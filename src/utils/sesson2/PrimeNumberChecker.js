export function PrimeNumberChecker(number) {
    const nb = Number(number);
    if (isNaN(nb) || nb <= 1) {
        return "false";
    }

    for (let i = 2; i <= Math.sqrt(nb); i++) {
        if (nb % i === 0) {
            return "false";
        }
    }
    return "true";
}
