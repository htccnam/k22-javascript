export function FormatFullName(fullName) {
    if (!fullName) {
        return "tên sai định dạng";
    }
    return fullName
        .trim()
        .split(/\s+/)
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(" ");
}
