var tableData = [
    // 1-ая таблица 
    [
        "фамилия",          // str
         "имя",             // str
         "отчество",        // str
         "",				// str (индекс города)
         89999999999,		// num (расспарсить)
         1751500800000,		// num (дата в формате: 1/1000 секунды, прошедших с 1 января 1970 года GMT+0)
         0,					// num (номер способа доставки из локального списка)
         5					// num (кол-во дней доставки)(узнать ограничения)
    ],

    // 2-я таблица
    [
		"XXXXXX",					// str (номер заказа)
	 	"Название организации",		// str (название организации клиента)
		"Название организации",		// str (название организации плательщика)
		1751500800000,				// num (дата в формате: 1/1000 секунды, прошедших с 1 января 1970 года GMT+0)
		1751600800000				// num (дата в формате: 1/1000 секунды, прошедших с 1 января 1970 года GMT+0)
	],

    // 3-я таблица
    // каждая строчка в таблице является услугой или товаром
    // синтаксис
    // название товара или услуги
    // артикул | тираж | стоимость в формате числа с плавующей точкой | № коробки | нанесение(номер из списка всех нанесений) | нанесение делалось в ремарк или на строне))
    [
        ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
        "XXXXXXXX",100,100000.99,"комментарий",0,0],
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minima, fugiat. Odio et atque fugit reiciendis odit placeat accusamus voluptates voluptas ullam, tempore aut eligendi deleniti itaque nobis culpa quis.",
        "XXXXXXXX",100,100000.99,"комментарий",1,0],
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minima, fugiat. Odio et atque fugit reiciendis odit placeat accusamus voluptates voluptas ullam, tempore aut eligendi deleniti itaque nobis culpa quis.",
        "XXXXXXXX",100,100000.99,"комментарий",2,0],
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minima, fugiat. Odio et atque fugit reiciendis odit placeat accusamus voluptates voluptas ullam, tempore aut eligendi deleniti itaque nobis culpa quis.",
        "XXXXXXXX",100,100000.99,"комментарий",3,0],
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minima, fugiat. Odio et atque fugit reiciendis odit placeat accusamus voluptates voluptas ullam, tempore aut eligendi deleniti itaque nobis culpa quis.",
        "XXXXXXXX",100,100000.99,"комментарий",2,0],
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, minima, fugiat. Odio et atque fugit reiciendis odit placeat accusamus voluptates voluptas ullam, tempore aut eligendi deleniti itaque nobis culpa quis.",
        "XXXXXXXX",100,100000.99,"комментарий",1,0],
    ]
]