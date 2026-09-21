import { useState } from "react";
import { cart } from "../../utils/sesson11/sesson11";
function Sesson11() {
    // gán giá trị cho setter
    cart.applyCoupon = "WELCOME10";

    // thêm giá trị
    cart.addItems(
        { id: 3, name: "Keyboard", price: 700000, category: "Electronics" },
        {
            id: 2,
            name: "Mouse",
            price: 300000,
            quantity: 1,
            category: "Electronics",
        },
    );
    return (
        <>
            <p>tổng tất cả sản phẩm là : {cart.totalQuantity}</p>
            <p>tổng tiền hàng là {cart.subtotal} VNĐ</p>
            <p>Mức giảm giá đang áp dụng : {cart._discountRate * 100}%</p>
            <p>Tổng tiền hàng phải thanh toán là: {cart.totalPrice}</p>
        </>
    );
}
export default Sesson11;
