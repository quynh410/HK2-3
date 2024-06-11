import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
}
export default function Read() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((response) => {
        console.log("gia tri tra ve respone", response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* Dung thu vien axios de lay tat ca thong tin trong bang user 
            +Khi lay du lieu thi dung phuong thuc GET ( theo tieu chuan restful API)
            +*/}
      <p>Danh sach user o trong bang bang user11</p>
      <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
