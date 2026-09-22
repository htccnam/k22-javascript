import "./Sesson12.css";
import { useState } from "react";
import { generateRandomHexColor } from "../../utils/sesson12/generateRandomHexColor";
import { getFilteredProducts } from "../../utils/sesson12/products";
import { sortByPrice } from "../../utils/sesson12/products";
import { generateOTP } from "../../utils/sesson12/OTP";
import { getProductDescriptions } from "../../utils/sesson12/products";
import { calculateTotal } from "../../utils/sesson12/products";

function Sesson12() {
    // list product để test
    const products = [
        { id: 1, name: "iPhone 15", price: 22000000, category: "Điện thoại" },
        {
            id: 2,
            name: "Samsung Galaxy S24",
            price: 20000000,
            category: "Điện thoại",
        },
        { id: 3, name: "MacBook Air M2", price: 26000000, category: "Laptop" },
        { id: 4, name: "Dell XPS 13", price: 30000000, category: "Laptop" },
        { id: 5, name: "AirPods Pro", price: 6000000, category: "Phụ kiện" },
        { id: 6, name: "Apple Watch", price: 9000000, category: "Phụ kiện" },
    ];

    // phan1:
    const [bgColor, setBgColor] = useState("#ffffff");
    function handleChangeBg() {
        setBgColor(generateRandomHexColor());
    }
    // phan2:
    // phan2.1:
    let [selectedCategory, setselectedCategory] = useState("Tất cả");

    const filteredProducts = getFilteredProducts(products, selectedCategory);

    // phan2.2:
    let [sort, setSort] = useState("asc");
    const sortProducts = sortByPrice(products, sort);

    // phan3:
    let [OTP, setOTP] = useState(0);
    function handleCreateOTP() {
        setOTP(generateOTP());
    }

    return (
        <div className="Sesson12__contaier">
            <div className="assignment-description">
                <h2>Đề bài Sesson12</h2>
                <h3>Phần 1: Random màu nền bằng mã HEX</h3>
                <p>
                    <strong>Yêu cầu:</strong>
                </p>
                <ul>
                    <li>
                        Viết hàm <code>generateRandomHexColor()</code> trả về
                        một mã màu HEX ngẫu nhiên.
                    </li>
                    <li>
                        Mã màu phải có đúng định dạng 6 ký tự sau dấu{" "}
                        <code>#</code>.
                    </li>
                    <li>Hàm không cần tham số đầu vào.</li>
                </ul>
                <p>
                    <strong>Ví dụ:</strong>
                </p>
                <pre>
                    const color = generateRandomHexColor(); console.log(color);
                </pre>
                <p>
                    <strong>Kết quả đầu ra:</strong>
                </p>
                <ul>
                    <li>#F3A12B</li>
                    <li>#09C8FE</li>
                    <li>#000000</li>
                </ul>

                <h3>Phần 2: Bộ lọc và sắp xếp giỏ hàng</h3>
                <p>
                    <strong>Yêu cầu:</strong>
                </p>
                <ul>
                    <li>
                        Lọc sản phẩm theo danh mục: Tất cả, Điện thoại, Laptop,
                        Phụ kiện.
                    </li>
                    <li>
                        Sắp xếp sản phẩm theo giá: Mặc định, Giá tăng dần, Giá
                        giảm dần.
                    </li>
                    <li>Tính tổng tiền của danh sách sản phẩm sau khi lọc.</li>
                    <li>Dùng map để tạo ra một mảng chuỗi mô tả sản phẩm.</li>
                </ul>
                <p>
                    <strong>Yêu cầu xử lý:</strong>
                </p>
                <ul>
                    <li>Dùng filter để lọc sản phẩm theo category.</li>
                    <li>Dùng sort để sắp xếp theo price.</li>
                    <li>
                        Dùng map để chuyển danh sách sản phẩm thành mảng chuỗi
                        theo format: <code>Tên sản phẩm - Danh mục - Giá</code>
                    </li>
                    <li>
                        Không làm thay đổi trực tiếp mảng products ban đầu khi
                        sắp xếp.
                    </li>
                    <li>
                        Tổng tiền phải thay đổi đúng theo danh sách sau khi lọc.
                    </li>
                </ul>

                <h3>Phần 3: Tạo mã OTP ngẫu nhiên</h3>
                <p>
                    <strong>Yêu cầu:</strong>
                </p>
                <ul>
                    <li>
                        Viết hàm <code>generateOTP()</code> trả về một số ngẫu
                        nhiên gồm 6 chữ số.
                    </li>
                    <li>OTP phải nằm trong khoảng từ 100000 đến 999999.</li>
                    <li>
                        Gọi hàm <code>generateOTP()</code> nhiều lần và in kết
                        quả ra console bằng <code>console.log</code>.
                    </li>
                    <li>Hàm không cần tham số đầu vào.</li>
                </ul>
                <p>
                    <strong>Gợi ý công thức:</strong>
                </p>
                <pre>Math.floor(Math.random() * 900000) + 100000;</pre>
            </div>

            <p>danh sách sản phẩm ban đầu là:</p>
            {getProductDescriptions(products).map((description, index) => (
                <li key={index}>{description}</li>
            ))}
            <button
                onClick={handleChangeBg}
                style={{ backgroundColor: bgColor }}
            >
                bấm vào đây đổi màu nền cho button
            </button>
            <div>
                <label>chọn danh mục để tìm kiếm</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setselectedCategory(e.target.value)}
                >
                    <option value="Tất cả">Tất cả</option>
                    <option value="Điện thoại">Điện thoại</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Phụ kiện">Phụ kiện</option>
                </select>
            </div>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        id:{product.id} - {product.name} - {product.price} -{" "}
                        {product.category}
                    </li>
                ))}
            </ul>
            <p>
                tổng tiền là:
                {calculateTotal(filteredProducts).toLocaleString("vi-VN")} VNĐ
            </p>
            <div>
                <p>chọn để sắp xếp sản phẩm</p>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="asc">tăng dần</option>
                    <option value="desc">giảm dần</option>
                </select>
                <ul>
                    {sortProducts.map((product) => (
                        <li key={product.id}>
                            id:{product.id} - {product.name} - {product.price} -{" "}
                            {product.category}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p>bấm nút để tạo OTP</p>
                <button onClick={handleCreateOTP}>Tạo OTP</button>
                {OTP === 0 ? (
                    <p>chưa có OTP, vui lòng nhấn nút tạo OTP</p>
                ) : (
                    <p>OTP là : {OTP}</p>
                )}
            </div>
        </div>
    );
}
export default Sesson12;
