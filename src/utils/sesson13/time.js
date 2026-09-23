export function timeAgo(dateString) {
    const pastTime = new Date(dateString);
    const nowTime = new Date();
    const diffSeconTime = Math.floor((nowTime - pastTime) / 1000);

    if (diffSeconTime < 60) {
        return "vừa xong";
    }

    const diffMinuteTime = diffSeconTime / 60;
    if (diffMinuteTime < 60) return `${diffMinuteTime} phút trước`;

    const diffHoursTime = diffMinuteTime / 60;
    if (diffHoursTime < 24) return `${diffHoursTime} giờ trước`;

    const day = String(pastTime.getDate()).padStart(2, "0");
    const month = String(pastTime.getMonth() + 1).padStart(2, "0");
    const year = String(pastTime.getFullYear());
    return `ra mắt ${day}/${month}/${year}`;
}
export function getCountdown(targetDateString) {
    const futureTime = new Date(targetDateString);
    const nowTime = new Date();
    const diffTime = futureTime - nowTime;

    if (diffTime < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    const second = Math.floor((diffTime / 1000) % 60);
    const minute = Math.floor((diffTime / (1000 * 60)) % 60);
    const hour = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const day = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return {
        days: day,
        hours: hour,
        minutes: minute,
        seconds: second,
    };
}
export function isWeekend(dateString) {
    const date = new Date(dateString);
    const dateOfWeek = date.getDay();

    return dateOfWeek === 0 || dateOfWeek === 6;
}
