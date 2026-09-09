export function taxiFareCalculator(km) {
    let kilomet = Number(km);
    let cost = 0;
    if (kilomet < 0) {
        return "vui lòng nhập km không âm";
    }

    if (kilomet > 12) {
        cost = (15000 + 4 * 13500 + (kilomet - 5) * 11000) * 0.9;
        return cost;
    }
    if (kilomet <= 12 && kilomet > 5) {
        cost = 15000 + 4 * 13500 + (kilomet - 5) * 11000;
        return cost;
    }
    if (kilomet <= 5 && kilomet > 1) {
        cost = 15000 + (kilomet - 1) * 13500;
        return cost;
    }
    if (kilomet <= 1) {
        return kilomet * 15000;
    }
}
