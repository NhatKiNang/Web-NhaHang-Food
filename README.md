# AdminUsers.jsx – README

## 1. Giới thiệu

`AdminUsers.jsx` là trang **quản lý người dùng (Admin Panel)** trong hệ thống website **DaNangFood**.
Trang này cho phép **Admin xem danh sách tất cả người dùng** được lưu trong cơ sở dữ liệu.

Trang sử dụng:

* **React**
* **Axios** để gọi API
* **TailwindCSS** để tạo giao diện

---

# 2. Chức năng chính

Trang Admin Users thực hiện các chức năng:

* Lấy danh sách người dùng từ Backend API
* Hiển thị danh sách người dùng dạng bảng
* Hiển thị các thông tin cơ bản:

  * Email
  * Role (quyền)

---

# 3. API sử dụng

Component gọi API:

```
GET http://localhost:5000/api/users
```

Backend trả dữ liệu dạng:

```json
[
 {
   "_id": "123",
   "name": "Admin",
   "email": "admin@gmail.com",
   "role": "admin"
 },
 {
   "_id": "456",
   "name": "User",
   "email": "user@gmail.com",
   "role": "user"
 }
]
```

---

# 4. Cách hoạt động của code

## 4.1 State

```
const [users, setUsers] = useState([]);
```

Lưu danh sách user nhận từ API.

---

## 4.2 useEffect

```
useEffect(() => {
  axios
    .get("http://localhost:5000/api/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err));
}, []);
```

Khi trang load:

1. Gửi request tới server
2. Nhận danh sách user
3. Lưu vào state `users`

---

## 4.3 Render danh sách user

```
{users.map((user) => (
  <tr key={user._id}>
```

* Lặp qua danh sách user
* Hiển thị từng user vào bảng

---

# 5. Giao diện hiển thị

Bảng hiển thị:

| Email                                     | Role  |
| ----------------------------------------- | ----- |
| [admin@gmail.com](mailto:admin@gmail.com) | admin |
| [user@gmail.com](mailto:user@gmail.com)   | user  |

---

# 6. Cấu trúc file

```
src
 ├── pages
 │    └── admin
 │         └── AdminUsers.jsx
```

---

# 7. Cách chạy project

### 1. Chạy Backend

```
node server.js
```

Server chạy tại:

```
http://localhost:5000
```

---

### 2. Chạy Frontend

```
npm run dev
```

Frontend chạy tại:

```
http://localhost:5173
```

---

# 8. Hướng phát triển thêm

Có thể nâng cấp trang AdminUsers:

* Xóa user
* Khóa tài khoản
* Thay đổi role
* Tìm kiếm user
* Phân trang
* Thống kê số lượng user

Ví dụ thêm nút xóa:

```
Delete User
Edit User
Ban User
```

---

# 9. Kết luận

`AdminUsers.jsx` là trang quan trọng trong **Admin Dashboard**, giúp quản trị viên:

* Quản lý người dùng
* Theo dõi tài khoản hệ thống
* Kiểm soát quyền truy cập

Trang được xây dựng bằng **React + Axios + TailwindCSS** và kết nối với **Node.js + MongoDB Backend**.
