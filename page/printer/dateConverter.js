// перевод времени: миллисекунды ==> dd.mm.yyyy
function dateConverter(ms) {
    let date = new Date(ms);
    let dd = date.getDate();
    let mm = date.getMonth() + 1; // Январь – это 0!
    let yyyy = date.getFullYear();

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    return `${dd}.${mm}.${yyyy}`;
}