export function MaskEmail(email) {
    if (typeof email !== "string" || !email.includes("@")) {
        return "email đầu vào không đúng định dạng";
    }
    const [username, domain] = email.split("@");
    const leng = username.length;
    let maskUsername = "";
    if (leng > 4) {
        const start = username.slice(0, 2);
        const end = username.slice(-2);
        const middle = "*".repeat(leng - 4);

        maskUsername = `${start}${middle}${end}`;
    } else {
        const start = username.slice(0, 1);
        const rest = "*".repeat(leng - 1);

        maskUsername = `${start}${rest}`;
    }
    return `${maskUsername}@${domain}`;
}
