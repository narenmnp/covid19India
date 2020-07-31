export function formatNumberWithCommas(x) {
    //return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //return x.replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return Number((x)).toLocaleString('en', { style: 'currency', currency: 'INR' })
}

export function ascendingSort(list, key) {
    return list.sort(function (a, b) {
        return a[key] - b[key]
    });
}

export function descendingSort(list, key) {
    return list.sort(function (a, b) { return b[key] - a[key] });
}