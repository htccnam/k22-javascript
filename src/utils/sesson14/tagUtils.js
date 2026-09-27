export function getUniqueTags(arr = [""]) {
    if (!Array.isArray(arr) && arr.length === 0) return [];
    return Array.from(new Set(arr));
}
export function getCommonTags(arr1 = [""], arr2 = [""]) {
    if (
        !Array.isArray(arr1) ||
        !Array.isArray(arr2) ||
        arr1.length === 0 ||
        arr2.length === 0
    ) {
        return [];
    }
    const uniqueArray1 = getUniqueTags(arr1);
    const uniqueArray2 = new Set(arr2);
    return uniqueArray1.filter((value) => uniqueArray2.has(value));
}
