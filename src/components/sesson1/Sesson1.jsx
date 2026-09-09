import { useState } from "react";
import "./Sesson1.css";
import {
    scoreCalculator,
    Ranking,
} from "../../utils/sesson1/ScoreCaculatorAndRanking.js";
import { PrintDayOfWeek } from "../../utils/sesson1/PrintDayOfWeek.js";
import { taxiFareCalculator } from "../../utils/sesson1/TaxiFareCalculator.js";

function Sesson1() {
    // bai1
    const [math, setMath] = useState("");
    const [literature, setLiterature] = useState("");
    const [english, setEnglish] = useState("");
    const [result, setResult] = useState(null);

    // bai2
    const [day, setDay] = useState("");
    const [reSultDay, setReSultDay] = useState("");

    // bai3
    const [km, setKm] = useState("");
    const [fareCost, setFareCost] = useState("");

    function handleCalculate() {
        const avg = scoreCalculator(math, literature, english);
        const rk = Ranking(math, literature, english);

        if (avg === null) return setResult({ error: avg });
        else if (rk === null) return setResult({ error: rk });
        else {
            return setResult({ average: avg, rank: rk });
        }
    }

    function handlePrintDayOfWeek() {
        const rsd = PrintDayOfWeek(day);

        setReSultDay(rsd);
    }

    function handleFareCalculator() {
        setFareCost(taxiFareCalculator(km));
    }

    return (
        <>
            <div className="exercise-description">
                <h3>Bài 1: Hệ thống tính điểm và xếp loại học sinh</h3>
                <p>Viết chương trình nhận vào điểm 3 môn: Toán, Văn, Anh.</p>
                <p>Yêu cầu xử lý:</p>
                <ul>
                    <li>Mỗi điểm phải nằm trong khoảng từ 0 đến 10.</li>
                    <li>
                        Nếu người dùng nhập điểm ngoài khoảng 0 - 10, in ra
                        thông báo: Dữ liệu không hợp lệ.
                    </li>
                    <li>Nếu dữ liệu hợp lệ, tính điểm trung bình của 3 môn.</li>
                    <li>Hiển thị điểm trung bình và học lực tương ứng.</li>
                </ul>
                <p>Quy tắc xếp loại:</p>
                <ul>
                    <li>
                        Xuất sắc: Điểm trung bình &gt;= 9.0 và không có môn nào
                        dưới 8.0.
                    </li>
                    <li>
                        Giỏi: Điểm trung bình &gt;= 8.0 và không có môn nào dưới
                        6.5.
                    </li>
                    <li>
                        Khá: Điểm trung bình &gt;= 6.5 và không có môn nào dưới
                        5.0.
                    </li>
                    <li>
                        Trung bình: Điểm trung bình &gt;= 5.0 và không có môn
                        nào dưới 3.5.
                    </li>
                    <li>Yếu: Các trường hợp còn lại.</li>
                </ul>
            </div>
            <form
                className="form_container scoreForm"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="mathScore">Điểm toán</label>
                <input
                    type="number"
                    id="mathScore"
                    value={math}
                    onChange={(e) => setMath(e.target.value)}
                />

                <label htmlFor="literatureScore">Điểm văn</label>
                <input
                    type="number"
                    id="literatureScore"
                    value={literature}
                    onChange={(e) => setLiterature(e.target.value)}
                />

                <label htmlFor="englishScore">Điểm anh</label>
                <input
                    type="number"
                    id="englishScore"
                    value={english}
                    onChange={(e) => setEnglish(e.target.value)}
                />

                <button
                    type="submit"
                    id="scoreCalculator-btn"
                    onClick={handleCalculate}
                >
                    Tính điểm trung bình:
                </button>

                {result && (
                    <div className="resultBox">
                        <p>lời giải</p>
                        {result.error ? (
                            <p>{result.error}</p>
                        ) : (
                            <>
                                <p>Điểm trung bình là :{result.average}</p>
                                <p>Xếp loại học lực: {result.rank}</p>
                            </>
                        )}
                    </div>
                )}
            </form>
            <div className="exercise-description">
                <h3>Bài 2: Chuyển đổi số sang ngày trong tuần</h3>
                <p>
                    Viết hàm nhận vào một số nguyên từ 1 đến 7 và in ra ngày
                    trong tuần tương ứng:
                </p>
                <ul>
                    <li>1 -&gt; Chủ Nhật</li>
                    <li>2 -&gt; Thứ Hai</li>
                    <li>3 -&gt; Thứ Ba</li>
                    <li>4 -&gt; Thứ Tư</li>
                    <li>5 -&gt; Thứ Năm</li>
                    <li>6 -&gt; Thứ Sáu</li>
                    <li>7 -&gt; Thứ Bảy</li>
                </ul>
                <p>Nếu nhập số khác 1 - 7, in ra Không hợp lệ.</p>
            </div>
            <form
                className="form_container print_day_of_week"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="day">
                    vui lòng nhập ngày dạng số để chuyển đổi
                </label>
                <input
                    type="number"
                    className="day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
                <button type="submit" onClick={handlePrintDayOfWeek}>
                    chuyển đổi ra ngày
                </button>
                <div className="resultBox">
                    {<p>Kết quả chuyển đổi: {reSultDay}</p>}
                </div>
            </form>
            <div className="exercise-description">
                <h3>Bài 3: Tính tiền cước Taxi</h3>
                <p>
                    Viết chương trình tính tiền cước Taxi dựa vào số km đi được.
                </p>
                <p>Bảng giá:</p>
                <ul>
                    <li>Giá mở cửa, áp dụng cho 1 km đầu tiên: 15.000 VNĐ.</li>
                    <li>Từ km thứ 2 đến km thứ 5: 13.500 VNĐ / km.</li>
                    <li>Từ km thứ 6 trở đi: 11.000 VNĐ / km.</li>
                </ul>
                <p>Nếu đi trên 12 km, tổng tiền cước được giảm 10%.</p>
                <p>Yêu cầu xử lý:</p>
                <ul>
                    <li>Nhập số km đi được.</li>
                    <li>
                        Nếu số km không hợp lệ, nhỏ hơn hoặc bằng 0, hoặc không
                        phải là số, hiển thị thông báo lỗi phù hợp.
                    </li>
                    <li>Nếu số km hợp lệ, tính và hiển thị tổng tiền cước.</li>
                    <li>
                        Tổng tiền nên được định dạng dễ đọc, ví dụ: 125.000 VNĐ.
                    </li>
                </ul>
            </div>
            <form
                className="form_container"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="km">
                    vui lòng nhập số km muốn đi để được tính toán số tiền
                </label>
                <input
                    className="km"
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                />
                <button type="submit" onClick={handleFareCalculator}>
                    tính tiền vé xe
                </button>
                <div className="resultBox">
                    {<p>giá tiền là: {fareCost} VNĐ</p>}
                </div>
            </form>
        </>
    );
}

export default Sesson1;
