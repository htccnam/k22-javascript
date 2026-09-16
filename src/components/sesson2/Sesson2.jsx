import "./sesson2.css";
import { useState } from "react";
import { PrimeNumberChecker } from "../../utils/sesson2/PrimeNumberChecker";
import { FormatFullName } from "../../utils/sesson2/FormatFullName";

function Sesson2() {
    const [number, setNumber] = useState("");
    const [resultPrimeChecker, setResultPrimeChecker] = useState("");

    // sesson2
    const [fullName, setFullName] = useState("");
    const [resultFormatFullName, setResultFormatFullName] = useState("");

    function handlePrimeNumber() {
        setResultPrimeChecker(PrimeNumberChecker(number));
    }
    function handleFormatFullName() {
        setResultFormatFullName(FormatFullName(fullName));
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
        </div>
    );
}
export default Sesson2;
