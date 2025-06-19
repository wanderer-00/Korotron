document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('products-container'),
        minPriceInput = document.getElementById('min-price'),
        maxPriceInput = document.getElementById('max-price'),
        materialFilter = document.getElementById('material-filter'),
        resetBtn = document.getElementById('reset-filters'),
        loadingSpinner = document.getElementById('loading-spinner'),
        sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNxDmA-PwPIB1cVikdEo0A3fzl-XNIHvCg2Edmi2SZN_5_CILY_lXsx2PzQ3n1TA62GwIRsQHJX8zg/pub?gid=555852607&output=csv';
    let dishesProducts = [],
        filteredProducts = [],
        currentPage = 0,
        itemsPerPage = 10,
        isLoading = false;

    // Наблюдатель за пересечением элементов
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading && currentPage * itemsPerPage < filteredProducts.length) {
            loadMoreItems();
        }
    }, {
        threshold: 0.1
    });

    // Маркер для наблюдения
    const loadMarker = document.createElement('div');
    loadMarker.id = 'load-marker';
    container.after(loadMarker);
    observer.observe(loadMarker);

    fetch(sheetUrl).then(response => {
        if (!response.ok) throw new Error('Ошибка сети');
        return response.text();
    }).then(csvData => {
        const products = parseCSV(csvData);
        if (products.length > 0) {
            dishesProducts = products.filter(product =>
                product['Категория'] && product['Категория'].toLowerCase() === 'посуда'
            );
            if (dishesProducts.length > 0) {
                dishesProducts.forEach(product => {
                    product.priceNum = extractPriceNumber(product['Цена']);
                });
                initializeMaterialFilter(dishesProducts);
                filteredProducts = [...dishesProducts];
                currentPage = 0;
                loadMoreItems();
            } else showNoResults("В категории 'Посуда' нет товаров");
        } else showError("Нет данных о товарах");
    }).catch(error => {
        console.error('Ошибка загрузки:', error);
        showError("Ошибка загрузки данных. Пожалуйста, попробуйте позже.");
    });

    function parseCSV(csv) {
        const lines = csv.split(/\r?\n/);
        if (lines.length < 2) return [];
        const headers = lines[0].split(',').map(h => h.trim()),
            result = [];
        for (let i = 1; i < lines.length; i++) {
            if (!lines[i].trim()) continue;
            const values = lines[i].split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(v => v.trim().replace(/^"|"$/g, ''));
            if (values.length === headers.length) {
                const product = {};
                headers.forEach((header, j) => {
                    product[header] = values[j] || '';
                });
                result.push(product);
            }
        }
        return result;
    }

    function extractPriceNumber(priceStr) {
        if (!priceStr) return 0;
        const num = parseFloat(priceStr.replace(/[^\d.,]/g, '').replace(',', '.'));
        return isNaN(num) ? 0 : num;
    }

    function initializeMaterialFilter(products) {
        const materials = [...new Set(products.map(p => p['Материал']).filter(Boolean))];
        materials.sort();
        materials.forEach(material => {
            const option = document.createElement('option');
            option.value = material;
            option.textContent = material;
            materialFilter.appendChild(option);
        });
    }

    function filterProducts() {
        const minPrice = parseFloat(minPriceInput.value) || 0,
            maxPrice = parseFloat(maxPriceInput.value) || Infinity,
            selectedMaterial = materialFilter.value;
        filteredProducts = dishesProducts.filter(product => {
            if (selectedMaterial && product['Материал'] !== selectedMaterial) return false;
            return product.priceNum >= minPrice && product.priceNum <= maxPrice;
        });
        currentPage = 0;
        container.innerHTML = '';
        loadMoreItems();
    }

    function loadMoreItems() {
        if (isLoading) return;
        isLoading = true;
        loadingSpinner.style.display = 'block';

        // Имитация задержки для демонстрации
        setTimeout(() => {
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const productsToShow = filteredProducts.slice(startIndex, endIndex);

            if (productsToShow.length > 0) {
                displayProducts(productsToShow);
                currentPage++;
            }

            isLoading = false;
            loadingSpinner.style.display = 'none';

            // Если больше нет товаров для загрузки, прекращаем наблюдение
            if (endIndex >= filteredProducts.length) {
                observer.unobserve(loadMarker);
            }
        }, 500);
    }

    function displayProducts(products) {
        products.forEach(product => {
            if (product['Ссылка на фото'] && product['Название']) {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
<div class="product-image-container">
<img loading="lazy" src="https://images.weserv.nl/?url=files.gifts.ru/reviewer/webp/40/11877.20_1_2000x2000.webp" alt="${product['Название']}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=Нет+фото'">
</div>
<div class="product-info">
<h3 class="product-title">${product['Название']}</h3>
${product['Артикул']?`<p class="product-detail">Артикул: ${product['Артикул']}</p>`:''}
${product['Материал']?`<p class="product-detail">Материал: ${product['Материал']}</p>`:''}
${product['Вес брутто (1 шт.)']?`<p class="product-detail">Вес: ${product['Вес брутто (1 шт.)']}</p>`:''}
${product['Транспортная упаковка']?`<p class="product-detail">Упаковка: ${product['Транспортная упаковка']}</p>`:''}
${product['Цена']?`<p class="product-price">Цена: ${product['Цена']}</p>`:'<p class="product-price">Цена по запросу</p>'}
${product['Ссылка на товар']?`<a href="${product['Ссылка на товар']}" target="_blank" style="display:block;margin-top:10px;color:#2196F3;text-decoration:none;">Подробнее →</a>`:''}
</div>`;
                container.appendChild(card);
            }
        });
    }

    function showError(message) {
        container.innerHTML = `<div class="error">${message}</div>`;
    }

    function showNoResults(message) {
        container.innerHTML = `<div class="no-results">${message}</div>`;
    }

    minPriceInput.addEventListener('input', filterProducts);
    maxPriceInput.addEventListener('input', filterProducts);
    materialFilter.addEventListener('change', filterProducts);
    resetBtn.addEventListener('click', function () {
        minPriceInput.value = '';
        maxPriceInput.value = '';
        materialFilter.value = '';
        filterProducts();
    });
});
