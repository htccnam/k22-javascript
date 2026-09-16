import "./sesson2.css";
import { useState } from "react";
import { PrimeNumberChecker } from "../../utils/sesson2/PrimeNumberChecker";
import { FormatFullName } from "../../utils/sesson2/FormatFullName";
import { MaskEmail } from "../../utils/sesson2/MaskEmail";

function Sesson2() {
    const [number, setNumber] = useState("");
    const [resultPrimeChecker, setResultPrimeChecker] = useState("");

    // sesson2
    const [fullName, setFullName] = useState("");
    const [resultFormatFullName, setResultFormatFullName] = useState("");

    // sesson3
    const [email, setEmail] = useState("");
    const [resultMaskEmail, setResultMaskEmail] = useState("");

    function handlePrimeNumber() {
        setResultPrimeChecker(PrimeNumberChecker(number));
    }
    function handleFormatFullName() {
        setResultFormatFullName(FormatFullName(fullName));
    }
    function handleMaskEmail() {
        setResultMaskEmail(MaskEmail(email));
    }
    return (
        <div className="form_container">
            <h2 className="session_title">Bài 1: Kiểm tra số nguyên tố</h2>
            <div className="exercise-description">
                <p>
                    Cho một biến n là số nguyên. Kiểm tra n có phải là số nguyên
                    tố hay không.
                </p>
                <p>
                    <strong>Yêu cầu:</strong>
                </p>
                <ul>
                    <li>
                        In ra hoặc tạo biến kết quả có giá trị true nếu n là số
                        nguyên tố.
                    </li>
                    <li>
                        In ra hoặc tạo biến kết quả có giá trị false nếu n không
                        phải là số nguyên tố.
                    </li>
                    <li>
                        Số nguyên tố là số nguyên lớn hơn 1 và chỉ chia hết cho
                        1 và chính nó.
                    </li>
                    <li>Không dùng thư viện bên ngoài.</li>
                </ul>
            </div>
            {/* bai1 */}
            <form
                className="form_container"
                onSubmit={(e) => e.preventDefault()}
            >
                <label className="label" htmlFor="input-number">
                    vui lòng nhập input kiểm tra số nguyên tố (ví dụ 2):
                </label>
                <input
                    type="number"
                    id="input-number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="input"
                />
                <button
                    type="submit"
                    onClick={handlePrimeNumber}
                    className="button"
                >
                    Kiểm tra
                </button>
                {resultPrimeChecker !== "" && (
                    <div className="resultBox">
                        <p
                            className={
                                resultPrimeChecker === "true"
                                    ? "success"
                                    : "error"
                            }
                        >
                            {resultPrimeChecker === "true"
                                ? "Đây là số nguyên tố"
                                : "Đây không phải là số nguyên tố"}
                        </p>
                    </div>
                )}
            </form>

            {/* bai2 */}
            <div className="exercise-description">
                <h2 className="session_title">
                    Bài 2: Chuẩn hóa tên người dùng
                </h2>
                <p>
                    Cho một biến fullName chứa chuỗi tên bị lỗi định dạng. Chuẩn
                    hóa chuỗi tên đó về đúng định dạng.
                </p>
                <p>
                    <strong>Yêu cầu:</strong>
                </p>
                <ul>
                    <li>Xóa khoảng trắng thừa ở đầu và cuối chuỗi.</li>
                    <li>Giữa các từ chỉ giữ lại 1 khoảng trắng.</li>
                    <li>Chữ cái đầu mỗi từ viết hoa.</li>
                    <li>Các chữ cái còn lại trong mỗi từ viết thường.</li>
                </ul>
            </div>
            <form
                className="form_container"
                onSubmit={(e) => e.preventDefault()}
            >
                <label className="label" htmlFor="input-text">
                    vui lòng nhập tên người dùng để format đúng định dạng( ví dụ
                    HoAng hAi naM):
                </label>
                <input
                    type="text"
                    id="input-text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input"
                />
                <button
                    type="submit"
                    onClick={handleFormatFullName}
                    className="button"
                >
                    Format
                </button>
                {resultFormatFullName !== "" && (
                    <div className="resultBox">
                        <p>{resultFormatFullName}</p>
                    </div>
                )}
            </form>

            {/* bai3 */}
            <div className="exercise-description">
                <h2 className="session_title">Bài 3: Che thông tin email</h2>
                <p>
                    Cho một biến email. Che một phần tên tài khoản trong email
                    đó.
                </p>
                <p>
                    <strong>Yêu cầu:</strong>
                </p>
                <ul>
                    <li>
                        Email gồm 2 phần: tên tài khoản và domain, ngăn cách bởi
                        ký tự @.
                    </li>
                    <li>Với tên tài khoản dài hơn 4 ký tự:</li>
                    <ul>
                        <li>Giữ lại 2 ký tự đầu.</li>
                        <li>Giữ lại 2 ký tự cuối.</li>
                        <li>Các ký tự ở giữa thay bằng dấu *.</li>
                        <li>Giữ nguyên phần domain sau ký tự @.</li>
                    </ul>
                    <li>
                        Không dùng thư viện bên ngoài. Lưu ý với tên tài khoản
                        ngắn:
                    </li>
                    <ul>
                        <li>
                            Nếu tên tài khoản có 4 ký tự trở xuống, giữ ký tự
                            đầu tiên và che các ký tự còn lại trước @.
                        </li>
                    </ul>
                </ul>
            </div>
            <form
                className="form_container"
                onSubmit={(e) => e.preventDefault()}
            >
                <label className="label" htmlFor="input-text">
                    vui lòng nhập email người dùng để ẩn( ví dụ
                    nam123@gmail.com):
                </label>
                <input
                    type="email"
                    id="input-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />
                <button
                    type="submit"
                    onClick={handleMaskEmail}
                    className="button"
                >
                    Format
                </button>
                {resultMaskEmail !== "" && (
                    <div className="resultBox">
                        <p>{resultMaskEmail}</p>
                    </div>
                )}
            </form>
        </div>
    );
}
export default Sesson2;
