export function PrintDayOfWeek(day) {
    switch (Number(day)) {
        case 1:
            return "chủ nhật";
        case 2:
            return "thứ hai";
        case 3:
            return "thứ ba";
        case 4:
            return "thứ tư";
        case 5:
            return "thứ năm";
        case 6:
            return "thứ sáu";
        case 7:
            return "thứ bảy";
        default:
            return "nhập thứ không hợp lệ";
    }
}
