import "./Sesson15.css";
import { toggleBodyTheme } from "./../../utils/sesson15/themeUtils";
import { useState } from "react";

/*
==========================================
📋 ĐỀ BÀI - SESSION 15
==========================================

### Bài 1: Đổi theme Sáng/Tối
Xây dựng giao diện chuyển đổi giữa chế độ sáng và chế độ tối.

Giao diện:
- Có một nút chuyển đổi giao diện và một khối nội dung gồm tiêu đề, đoạn văn mẫu.
- Áp dụng theme cho toàn bộ trang thông qua thẻ <body>.
- Ban đầu trang ở chế độ sáng, nút có nhãn "Chế độ tối".
- Định nghĩa class `dark-mode` bằng CSS để thay đổi màu nền và màu chữ. Nội dung cần dễ đọc ở cả hai chế độ.

Chức năng:
- Khi người dùng bấm nút, dùng `classList.toggle()` để thêm/xóa class `dark-mode` trên thẻ <body>.
- Khi trang ở chế độ tối, nút hiển thị "Chế độ sáng"; khi trang ở chế độ sáng, nút hiển thị "Chế độ tối". Nhãn nút thể hiện chế độ sẽ chuyển sang khi bấm.
- Có thể bấm nhiều lần để chuyển đổi qua lại; màu sắc và nhãn nút phải luôn đồng bộ.

### Bài 2: Ẩn/Hiện mật khẩu
Xây dựng ô nhập mật khẩu có nút ẩn/hiện.

Giao diện:
- Có một ô input với nhãn "Mật khẩu" và một nút bấm bên cạnh.
- Ban đầu input có `type="password"`, nút có nhãn "Hiện".
- Nếu đặt nút bên trong form, dùng `type="button"` để việc ẩn/hiện không làm submit form.

Chức năng:
- Khi bấm "Hiện", chuyển `type` của input từ `password` sang `text`, đồng thời đổi nhãn nút thành "Ẩn".
- Khi bấm "Ẩn", chuyển `type` về `password`, đồng thời đổi nhãn nút thành "Hiện".
- Giữ nguyên nội dung người dùng đã nhập khi chuyển đổi trạng thái.

### Bài 3: Thay đổi ảnh sản phẩm
Xây dựng gallery sản phẩm.

Giao diện:
- Có một ảnh lớn hiển thị sản phẩm chính và đúng 3 ảnh thumbnail nhỏ bên dưới.
- Sử dụng 3 ảnh khác nhau của một sản phẩm; có thể dùng ảnh local hoặc đường dẫn online truy cập được.
- Các ảnh có thuộc tính `alt` mô tả nội dung.
- Định nghĩa class `active` bằng CSS để tạo viền nổi bật cho thumbnail đang được chọn.
- Ban đầu ảnh lớn hiển thị ảnh của thumbnail đầu tiên và chỉ thumbnail đầu tiên có class `active`.

Chức năng:
- Khi click vào bất kỳ thumbnail nào, lấy đường dẫn `src` của thumbnail đó và gán cho ảnh lớn.
- Cập nhật `alt` của ảnh lớn phù hợp với ảnh đang hiển thị.
- Tại mọi thời điểm, chỉ có một thumbnail được đánh dấu `active`, tương ứng với ảnh lớn đang hiển thị.
==========================================
*/

function Sesson15() {
    // 1.
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 2.
    const [showPassWord, setShowPassWord] = useState(false);

    // 3.mảng data bai 3
    const productImages = [
        {
            id: 1,
            src: "https://picsum.photos/id/103/600/400",
            alt: "Sản phẩm 1 - Góc chính",
        },
        {
            id: 2,
            src: "https://picsum.photos/id/11/400/300",
            alt: "Sản phẩm 1 - Góc cạnh",
        },
        {
            id: 3,
            src: "https://picsum.photos/id/12/400/300",
            alt: "Sản phẩm 1 - Chi tiết zoom",
        },
    ];
    // biến theo dõi thay đổi
    const [activeImage, setActiveImage] = useState(productImages[0]);
    function handleToggleBodyTheme() {
        const currentMode = toggleBodyTheme();

        setIsDarkMode(currentMode);
    }
    return (
        <div className="Sesson15__container">
            {/* ========== BÀI 1: ĐỔI THEME ========== */}
            <section className="bai1-theme">
                <h2>Bài 1: Đổi Theme Sáng/Tối</h2>
                <p>Bấm vào button để đổi màu nền</p>
                <button onClick={handleToggleBodyTheme}>
                    {isDarkMode ? "Chế độ sáng" : "Chế độ tối"}
                </button>
            </section>

            {/* ========== BÀI 2: ẨN/HIỆN MẬT KHẨU ========== */}
            <section className="bai2-password">
                <h2>Bài 2: Ẩn/Hiện Mật Khẩu</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Mật khẩu:
                        <input
                            type={showPassWord ? "text" : "password"}
                            placeholder="vui lòng nhập mật khẩu"
                        />
                    </label>
                    <button
                        type="button"
                        onClick={() => setShowPassWord(!showPassWord)}
                    >
                        {showPassWord ? "Ẩn" : "Hiện"}
                    </button>
                </form>
            </section>

            {/* ========== BÀI 3: GALLERY ẢNH SẢN PHẨM ========== */}
            <section className="bai3-gallery">
                <h2>Bài 3: Thay Đổi Ảnh Sản Phẩm</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="main-image-wrapper">
                        <img src={activeImage.src} alt={activeImage.alt} />
                    </div>
                    <div className="thumbnails">
                        {productImages.map((product) => (
                            <img
                                key={product.id}
                                src={product.src}
                                alt={product.alt}
                                className={
                                    activeImage.id === product.id
                                        ? "thumb-img active"
                                        : "thumb-img"
                                }
                                onClick={() => setActiveImage(product)}
                            />
                        ))}
                    </div>
                </form>
            </section>
        </div>
    );
}
export default Sesson15;
