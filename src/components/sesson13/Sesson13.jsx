import "./Sesson13.css";
import {
    Employee,
    Developer,
    Manager,
    calculateTotalSalary,
} from "../../utils/sesson13/salary";
import { timeAgo, getCountdown, isWeekend } from "../../utils/sesson13/time";

function Sesson13() {
    const employee = new Employee(1, "Hoàng Hải Nam", 10000000);
    const developer = new Developer(2, "Hoàng Văn Nam", 10000000, 2);
    const manager = new Manager(3, "Hoàng Nam", 11000000, 5000000);

    // mảng nhân viên
    const employees = [
        new Developer(1, "Nguyễn Văn A", 12000000, 10),
        new Developer(2, "Trần Thị B", 15000000, 5),
        new Manager(3, "Lê Văn C", 20000000, 5000000),
        new Manager(4, "Phạm Thị D", 18000000, 3000000),
    ];
    // Mảng thời gian
    const nowTime = new Date();
    const testDates = [
        nowTime.getTime() - 45 * 1000, // Vừa xong
        nowTime.getTime() - 45 * 60 * 1000, // X phút trước
        nowTime.getTime() - 7 * 60 * 60 * 1000, // X giờ trước
        "2026-09-18T08:00:00+07:00", // DD/MM/YYYY
    ];
    // ngày tương lai 45 second , 45 minute , 7 hour , 6 day
    const futureTime =
        nowTime.getTime() +
        45 * 1000 +
        45 * 60 * 1000 +
        7 * 60 * 60 * 1000 +
        6 * 24 * 60 * 60 * 1000;

    const assignmentText = `Yêu cầu bài tập
Bài 1: Quản lý Nhân sự
Xây dựng chương trình quản lý nhân sự cho một công ty.

Class Employee
Tạo class Employee gồm:

Constructor nhận vào:

id: mã nhân viên.

name: tên nhân viên.

baseSalary: lương cơ bản.

Method calculateSalary():

Trả về baseSalary.
Ví dụ:

const employee = new Employee(1, "Nguyễn Văn A", 10000000);

console.log(employee.calculateSalary());
Kết quả đầu ra:

10000000
Class Developer
Tạo class Developer kế thừa từ Employee.

Constructor nhận vào:

id

name

baseSalary

overtimeHours: số giờ làm thêm.

Ghi đè method calculateSalary().

Công thức tính lương:

baseSalary + overtimeHours * 200000
Ví dụ:

const developer = new Developer(2, "Trần Thị B", 12000000, 10);

console.log(developer.calculateSalary());
Kết quả đầu ra:

14000000
Giải thích:

12,000,000 + 10 * 200,000 = 14,000,000
Class Manager
Tạo class Manager kế thừa từ Employee.

Constructor nhận vào:

id

name

baseSalary

bonus: tiền thưởng.

Ghi đè method calculateSalary().

Công thức tính lương:

baseSalary + bonus
Ví dụ:

const manager = new Manager(3, "Lê Văn C", 20000000, 5000000);

console.log(manager.calculateSalary());
Kết quả đầu ra:

25000000
Tính tổng lương công ty
Tạo một mảng employees chứa cả Developer và Manager.

Viết hàm calculateTotalSalary(employeeList) để tính tổng số tiền lương công ty phải trả cho tất cả nhân viên.

Ví dụ:

const employees = [
  new Developer(1, "Nguyễn Văn A", 12000000, 10),
  new Developer(2, "Trần Thị B", 15000000, 5),
  new Manager(3, "Lê Văn C", 20000000, 5000000),
  new Manager(4, "Phạm Thị D", 18000000, 3000000),
];

const totalSalary = calculateTotalSalary(employees);

console.log(totalSalary);
Kết quả đầu ra:

76000000
Bài 2: Bộ công cụ xử lý Thời gian
Viết một nhóm hàm tiện ích xử lý thời gian thường dùng trong dự án thực tế.

Hàm timeAgo(dateString)
Viết hàm timeAgo(dateString) trả về thời gian tương tự như các mạng xã hội như Facebook hoặc TikTok.

Nếu thời gian truyền vào cách hiện tại dưới 1 phút: trả về "Vừa xong".

Nếu dưới 60 phút: trả về "X phút trước".

Nếu dưới 24 giờ: trả về "X giờ trước".

Nếu từ 24 giờ trở lên: trả về định dạng DD/MM/YYYY.

Ví dụ:

console.log(timeAgo("2026-09-20T14:59:30+07:00"));
console.log(timeAgo("2026-09-20T14:30:00+07:00"));
console.log(timeAgo("2026-09-20T10:00:00+07:00"));
console.log(timeAgo("2026-09-18T08:00:00+07:00"));
Kết quả đầu ra gợi ý nếu thời điểm hiện tại là 15:00 20/09/2026:

Vừa xong
30 phút trước
5 giờ trước
18/09/2026
Hàm getCountdown(targetDateString)
Viết hàm getCountdown(targetDateString).

Nhận vào một thời điểm trong tương lai.

Trả về object chứa số ngày, giờ, phút, giây còn lại đến thời điểm đó.

Object trả về có dạng:

{
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}
Ví dụ:

const countdown = getCountdown("2026-09-21T15:30:20+07:00");

console.log(countdown);
Kết quả đầu ra nếu thời điểm hiện tại là 15:00:00 20/09/2026:

{
  days: 1,
  hours: 0,
  minutes: 30,
  seconds: 20,
}
Hàm isWeekend(dateString)
Viết hàm isWeekend(dateString).

Kiểm tra ngày truyền vào có phải là Thứ Bảy hoặc Chủ Nhật hay không.

Nếu là cuối tuần, trả về true.

Nếu không phải cuối tuần, trả về false.

Ví dụ:

console.log(isWeekend("2026-09-19"));
console.log(isWeekend("2026-09-20"));
console.log(isWeekend("2026-09-21"));
Kết quả đầu ra:

true
true
false`;

    return (
        <div className="Sesson13__container">
            <div className="assignment">
                <h2>Đề bài</h2>
                <pre>{assignmentText}</pre>
            </div>
            <p>kết quả làm bài : </p>
            <p>
                Lương của nhân viên {employee.name} là :{" "}
                {employee.calculateSalary().toLocaleString("vi-VN")} VNĐ
            </p>
            <p>
                Lương của lập trình viên {developer.name} là :{" "}
                {developer.calculateSalary().toLocaleString("vi-VN")} VNĐ
            </p>
            <p>
                Lương của quản lý {manager.name} là :{" "}
                {manager.calculateSalary().toLocaleString("vi-VN")} VNĐ
            </p>
            <p>mảng nhân viên</p>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        id:{employee.id} - tên:{employee.name} - lương:{" "}
                        {employee.calculateSalary()}
                    </li>
                ))}
            </ul>
            <p>
                tổng lương công ty phải thanh toán cho nhân viên{" "}
                {calculateTotalSalary(employees).toLocaleString("vi-VN")} VNĐ
            </p>
            <p>thời giai trôi qua : {timeAgo(testDates[0])}</p>
            <p>thời giai trôi qua : {timeAgo(testDates[1])}</p>
            <p>thời giai trôi qua : {timeAgo(testDates[2])}</p>
            <p>thời giai trôi qua : {timeAgo("2026-09-18T08:00:00+07:00")}</p>
            <p>
                {" "}
                đếm ngược thời gian {getCountdown(futureTime).days} ngày ,{" "}
                {getCountdown(futureTime).hours} giờ ,{" "}
                {getCountdown(futureTime).minutes} phút ,{" "}
                {getCountdown(futureTime).seconds} giây
            </p>
            <p>
                đây có phải cuối tuần không :{" "}
                {isWeekend(testDates[1]) ? "có " : "không"}
            </p>
        </div>
    );
}
export default Sesson13;
