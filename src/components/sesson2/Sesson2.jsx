import { useState } from "react";
import { PrimeNumberChecker } from "../../utils/sesson2/PrimeNumberChecker";
import "./Sesson2.css";
function Sesson2() {
    const [number, setNumber] = useState("");
    const [resultPrimeChecker, setResultPrimeChecker] = useState("");
    function isPrimeNumber() {
        setResultPrimeChecker(PrimeNumberChecker(number));
    }
    return (
        <div className="form_container">
            <h2 className="session_title">Bài 1: Kiểm tra số nguyên tố</h2>
            <div className="exercise-description">
                <p>Cho một biến n là số nguyên. Kiểm tra n có phải là số nguyên tố hay không.</p>
                <p><strong>Yêu cầu:</strong></p>
                <ul>
                    <li>In ra hoặc tạo biến kết quả có giá trị true nếu n là số nguyên tố.</li>
                    <li>In ra hoặc tạo biến kết quả có giá trị false nếu n không phải là số nguyên tố.</li>
                    <li>Số nguyên tố là số nguyên lớn hơn 1 và chỉ chia hết cho 1 và chính nó.</li>
                    <li>Không dùng thư viện bên ngoài.</li>
                </ul>
            </div>
            <form className="form_container" onSubmit={(e) => e.preventDefault()}>
                <label className="label" htmlFor="input-number">
                    vui lòng nhập input kiểm tra số nguyên tố :
                </label>
                <input
                    type="number"
                    id="input-number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="input"
                />
                <button type="submit" onClick={isPrimeNumber} className="button">
                    Kiểm tra
                </button>
                {resultPrimeChecker !== "" && (
                    <div className="resultBox">
                        <p className={resultPrimeChecker === "true" ? "success" : "error"}>
                            {resultPrimeChecker === "true" ? "Đây là số nguyên tố" : "Đây không phải là số nguyên tố"}
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}
export default Sesson2;
