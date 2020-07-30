export function formatNumberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function ascendingSort(list, key) {
    return list.sort(function (a, b) {
        return a[key] - b[key]
    });
}

export function descendingSort(list, key) {
    return list.sort(function (a, b) { return b[key] - a[key] });
}