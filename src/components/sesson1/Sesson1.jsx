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
            <form
                className="form_container"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="number"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                />
                <button type="submit" onClick={handleFareCalculator}>
                    tính tiền vé xe
                </button>
                <div className="resultBox">
                    {<p>giá tiền là: {fareCost}</p>}
                </div>
            </form>
        </>
    );
}

export default Sesson1;
