import axios from "axios";
import { useEffect } from "react";

export default function Create() {
  useEffect(() => {
    let newUser = {
      name: "Trang",
      email: "trang@gmail.com",
    };
    axios.post("http://localhost:8080/users", newUser);
  }, []);
  return (
    <div>
      {/* Them du lieu vaof bang user
            +Khi them du lieu thi dungf phuong thuc POST */}
    </div>
  );
}
