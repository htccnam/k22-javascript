export const cart = new Map();

export function addToCart(productId, productInfo) {
    if (cart.has(productId)) {
        const existProduct = cart.get(productId);
        cart.set(productId, {
            ...existProduct,
            quantity: existProduct.quantity + 1,
        });
    } else {
        cart.set(productId, {
            name: productInfo.name,
            price: productInfo.price,
            quantity: 1,
        });
    }
}
export function getTotalPrice() {
    let total = 0;
    for (const item of cart.values()) {
        total += item.price * item.quantity;
    }
    return total;
}
export function applyVoucher(voucherMap) {
    const total = getTotalPrice();
    if (total === 0) return 0;

    const code = prompt("Nhập mã giảm giá (ví dụ: SALE10, SALE20):");

    // Nếu người dùng ấn Hủy hoặc không nhập gì
    if (!code) return total;

    const discountPercent = voucherMap.get(code.trim());

    // Nếu mã tồn tại trong Map
    if (discountPercent !== undefined) {
        return total * (1 - discountPercent / 100);
    }

    // Trường hợp nhập mã sai/không tồn tại
    return total;
}
// Hàm đệ quy tính tổng doanh thu toàn bộ chi nhánh
export function calculateTotalRevenue(report) {
    if (!report) return 0;

    // Doanh thu bản thân nhánh hiện tại
    let total = report.revenue || 0;

    // Nếu có nhánh con, gọi đệ quy cộng dồn vào total
    if (Array.isArray(report.subBranches) && report.subBranches.length > 0) {
        for (const subBranch of report.subBranches) {
            total += calculateTotalRevenue(subBranch);
        }
    }

    return total;
}
