export const cart = {
    items: [
        {
            id: 1,
            name: "Laptop",
            price: 15000000,
            quantity: 1,
            category: "Electronics",
        },
        {
            id: 2,
            name: "Mouse",
            price: 300000,
            quantity: 2,
            category: "Electronics",
        },
    ],
    _discountRate: 0,
    validCoupons: {
        WELCOME10: 0.1,
        SUMMER20: 0.2,
        VIP30: 0.3,
    },

    // Trả về tổng sản phẩm trong giỏ
    get totalQuantity() {
        let totalProduct = 0;
        for (let i = 0; i < cart.items.length; i++) {
            totalProduct += cart.items[i].quantity;
        }
        return totalProduct;
    },

    // Tính tổng tiền hàng (chưa áp dụng mã giảm giá)
    get subtotal() {
        let totalPrice = 0;
        for (let i = 0; i < cart.items.length; i++) {
            totalPrice += cart.items[i].price * cart.items[i].quantity;
        }
        return totalPrice;
    },

    // Áp dụng mã giảm giá bằng cách truyền tên coupon
    set applyCoupon(code) {
        if (cart.validCoupons[code] !== undefined) {
            cart._discountRate = cart.validCoupons[code];
            console.log(`Áp dụng mã giảm giá ${code} thành công!`);
        } else {
            console.log(`Mã giảm giá ${code} không hợp lệ!`);
        }
    },

    // Tính tổng tiền thực tế phải trả
    get totalPrice() {
        return cart.subtotal * (1 - cart._discountRate);
    },

    // Thêm nhiều sản phẩm cùng lúc
    addItems(...newItems) {
        for (let i = 0; i < newItems.length; i++) {
            const newItem = newItems[i];
            let found = false;

            for (let j = 0; j < cart.items.length; j++) {
                if (newItem.id === cart.items[j].id) {
                    const qtyToAdd =
                        newItem.quantity === undefined ? 1 : newItem.quantity;
                    cart.items[j].quantity += qtyToAdd;
                    found = true;
                    break;
                }
            }

            // Nếu sản phẩm chưa có
            if (!found) {
                const qtyToAdd =
                    newItem.quantity === undefined ? 1 : newItem.quantity;
                cart.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: qtyToAdd, // Đã sửa: gán qtyToAdd thay vì newItem.quantity
                    category: newItem.category,
                });
            }
        }
    },

    // Cập nhật số lượng sản phẩm theo id
    updateQuantity(id, newQuantity) {
        let found = false;
        for (let i = 0; i < cart.items.length; i++) {
            if (id === cart.items[i].id) {
                found = true;
                if (newQuantity <= 0) {
                    cart.removeItem(id);
                } else {
                    cart.items[i].quantity = newQuantity;
                }
                break;
            }
        }
        if (!found) {
            console.log("Không tìm thấy sản phẩm có id: " + id);
        }
    },

    // Xoá sản phẩm theo id
    removeItem(id) {
        let found = false;
        for (let i = 0; i < cart.items.length; i++) {
            if (id === cart.items[i].id) {
                found = true;
                cart.items.splice(i, 1); // Đã sửa: dùng splice để xóa thay vì gọi lại removeItem
                break; // Ngắt vòng lặp ngay khi đã xóa
            }
        }
        if (!found) {
            console.log("Không tìm thấy sản phẩm có id: " + id);
        }
    },

    // Lọc danh sách sản phẩm theo danh mục (category)
    getItemsByCategory(category) {
        let result = [];
        for (let i = 0; i < cart.items.length; i++) {
            // Đã sửa: bắt đầu từ i = 0
            if (category === cart.items[i].category) {
                result.push(cart.items[i]);
            }
        }
        return result;
    },

    // In hoá đơn chi tiết ra console
    printInvoice() {
        console.log("================ HOÁ ĐƠN BÁN HÀNG ================");
        for (let i = 0; i < cart.items.length; i++) {
            const item = cart.items[i];
            const itemTotal = item.price * item.quantity;
            console.log(
                item.name +
                    " - " +
                    item.price +
                    " x " +
                    item.quantity +
                    " = " +
                    itemTotal,
            );
        }

        const subtotal = cart.subtotal;
        const discountAmount = subtotal * cart._discountRate;
        const discountPercent = cart._discountRate * 100;

        console.log("Tổng tiền hàng: " + subtotal);
        console.log(
            "Giảm giá: " + discountPercent + "% (-" + discountAmount + ")",
        );
        console.log("Tổng thanh toán: " + cart.totalPrice);
        console.log("==================================================");
    },
};
