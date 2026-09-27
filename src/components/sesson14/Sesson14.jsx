import "./Sesson14.css";
import { getUniqueTags, getCommonTags } from "../../utils/sesson14/tagUtils";
import {
    cart,
    addToCart,
    getTotalPrice,
    applyVoucher,
    calculateTotalRevenue,
} from "../../utils/sesson14/cartUtils";
import { useState } from "react";

function Sesson14() {
    // --- DỮ LIỆU BÀI 1 ---
    const userA_searches = [
        "áo thun",
        "quần jeans",
        "áo khoác",
        "áo thun",
        "giày cừu",
    ];
    const userB_searches = ["quần jeans", "mũ bảo hiểm", "giày cừu", "balo"];

    const arrFilter = getUniqueTags(userA_searches);
    const arrCommonTag = getCommonTags(userA_searches, userB_searches);

    // --- DỮ LIỆU BÀI 2 ---
    const voucherMap = new Map([
        ["SALE10", 10],
        ["SALE20", 20],
    ]);

    const [selectedProductId, setSelectedProductId] = useState("101");
    const [selectedPrice, setSelectedPrice] = useState("150000");
    const [finalPrice, setFinalPrice] = useState(null);
    const [, setRefresh] = useState(0);

    const handleAddProduct = (e) => {
        e.preventDefault();

        // Xác định tên sản phẩm theo ID được chọn
        const productName =
            selectedProductId === "101" ? "Áo thun" : "Quần jeans";

        // Thêm vào giỏ với kiểu dữ liệu productId (number) và price (number)
        addToCart(Number(selectedProductId), {
            name: productName,
            price: Number(selectedPrice),
        });

        // Reset lại giá voucher đã tính trước đó và ép re-render
        setFinalPrice(null);
        setRefresh((pre) => pre + 1);
    };

    const handleApplyVoucher = () => {
        const result = applyVoucher(voucherMap);
        setFinalPrice(result);
    };

    // --- DỮ LIỆU BÀI 3 ---
    const salesReport = {
        branch: "Hà Nội",
        revenue: 500,
        subBranches: [
            {
                branch: "Cầu Giấy",
                revenue: 200,
                subBranches: [
                    { branch: "Cầu Giấy 1", revenue: 50, subBranches: [] },
                ],
            },
            {
                branch: "Đống Đa",
                revenue: 150,
                subBranches: [],
            },
        ],
    };

    return (
        <div className="sesson14__container">
            <h1 className="sesson14__title">Bài tập Session 14</h1>

            {/* BÀI 1 */}
            <section className="sesson14__card">
                <h2>Bài 1: Lọc trùng & Tag sản phẩm</h2>
                <div className="sesson14__group">
                    <p>
                        <strong>Mảng ban đầu:</strong>
                    </p>
                    <ul>
                        {userA_searches.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>

                <div className="sesson14__group">
                    <p>
                        <strong>Mảng loại bỏ từ khóa trùng lặp:</strong>
                    </p>
                    <ul>
                        {arrFilter.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>

                <div className="sesson14__group">
                    <p>
                        <strong>Cả 2 người dùng cùng tìm kiếm:</strong>
                    </p>
                    <ul>
                        {arrCommonTag.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>

                <div className="sesson14__group">
                    <p>
                        <strong>Test trường hợp 2:</strong>
                    </p>
                    <ul>
                        {getCommonTags(
                            ["áo thun", "áo thun", "balo"],
                            ["áo thun"],
                        ).map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>

                <div className="sesson14__group">
                    <p>
                        <strong>Test trường hợp 3 (Không trùng nhau):</strong>
                    </p>
                    <ul>
                        {getCommonTags(["áo thun"], ["balo"]).map(
                            (value, index) => (
                                <li key={index}>{value}</li>
                            ),
                        )}
                    </ul>
                </div>

                <div className="sesson14__group">
                    <p>
                        <strong>Test trường hợp 4 (Mảng rỗng):</strong>
                    </p>
                    <ul>
                        {getCommonTags([], []).map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* BÀI 2 */}
            <section className="sesson14__card">
                <h2>Bài 2: Bộ nhớ đệm giỏ hàng (Cart Cache)</h2>
                <form onSubmit={handleAddProduct} className="sesson14__form">
                    <div className="sesson14__field">
                        <label htmlFor="clothing">Chọn sản phẩm:</label>
                        <select
                            id="clothing"
                            name="clothing"
                            value={selectedProductId}
                            onChange={(e) =>
                                setSelectedProductId(e.target.value)
                            }
                        >
                            <option value="101">Áo thun (ID: 101)</option>
                            <option value="102">Quần jeans (ID: 102)</option>
                        </select>
                    </div>

                    <div className="sesson14__field">
                        <label htmlFor="price">Chọn giá:</label>
                        <select
                            id="price"
                            name="price"
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(e.target.value)}
                        >
                            <option value="150000">150.000 VNĐ</option>
                            <option value="300000">300.000 VNĐ</option>
                        </select>
                    </div>

                    <button type="submit" className="sesson14__btn primary">
                        Thêm vào giỏ hàng
                    </button>
                </form>

                <div className="sesson14__cart-info">
                    <h3>Sản phẩm trong giỏ hàng (Size: {cart.size})</h3>
                    {cart.size === 0 ? (
                        <p className="empty-cart">Giỏ hàng hiện đang rỗng</p>
                    ) : (
                        <ul>
                            {Array.from(cart.entries()).map(([id, item]) => (
                                <li key={id}>
                                    <strong>ID {id}:</strong> {item.name} -{" "}
                                    {item.price.toLocaleString()} VNĐ ×{" "}
                                    <strong>{item.quantity}</strong>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="sesson14__summary">
                        <p>
                            <strong>Tổng tiền trước giảm giá:</strong>{" "}
                            {getTotalPrice().toLocaleString()} VNĐ
                        </p>

                        <button
                            type="button"
                            onClick={handleApplyVoucher}
                            disabled={cart.size === 0}
                            className="sesson14__btn secondary"
                        >
                            Áp dụng Voucher (Prompt)
                        </button>

                        {finalPrice !== null && (
                            <p className="sesson14__discount-result">
                                <strong>Thành tiền sau áp dụng mã:</strong>{" "}
                                {finalPrice.toLocaleString()} VNĐ
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* BÀI 3 */}
            <section className="sesson14__card">
                <h2>Bài 3: Tính tổng doanh thu chi nhánh (Đệ quy)</h2>
                <div className="sesson14__revenue">
                    <p>Báo cáo doanh thu toàn hệ thống chi nhánh:</p>
                    <div className="sesson14__revenue-box">
                        <span>Tổng doanh thu:</span>
                        <strong>
                            {calculateTotalRevenue(
                                salesReport,
                            ).toLocaleString()}{" "}
                            đơn vị
                        </strong>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sesson14;
