export function scoreCalculator(mathScore, literatureScore, englishScore) {
    const math = Number(mathScore);
    const literature = Number(literatureScore);
    const english = Number(englishScore);

    if (
        math > 10 ||
        math < 0 ||
        literature > 10 ||
        literature < 0 ||
        english > 10 ||
        english < 0
    ) {
        return "Nhập sai điểm vui lòng nhập lại điểm";
    }
    const scoreAverage = (math + literature + english) / 3;
    return scoreAverage;
}
export function Ranking(mathScore, literatureScore, englishScore) {
    const scoreAverage = scoreCalculator(
        mathScore,
        literatureScore,
        englishScore,
    );
    if (
        scoreAverage >= 9 &&
        mathScore >= 8 &&
        literatureScore >= 8 &&
        englishScore >= 8
    ) {
        return "Xuất sắc";
    } else if (
        scoreAverage >= 8 &&
        mathScore >= 6.5 &&
        literatureScore >= 6.5 &&
        englishScore >= 6.5
    ) {
        return "Giỏi";
    } else if (
        scoreAverage >= 6.5 &&
        mathScore >= 5 &&
        literatureScore >= 5 &&
        englishScore >= 5
    ) {
        return "khá";
    } else if (
        scoreAverage >= 5 &&
        mathScore >= 3.5 &&
        literatureScore >= 3.5 &&
        englishScore >= 3.5
    ) {
        return "trung bình";
    } else {
        return "yếu";
    }
}
