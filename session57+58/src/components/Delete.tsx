import axios from "axios";
import React, { useEffect } from "react";

export default function Delete() {
  useEffect(() => {
    // khi xoa can phai truyen id cua user can xoa
    axios.delete("http://localhost:8080/users/6");
  }, []);
  return (
    <div>
      {/* Dung thu vien axios de xoa user trong cai bang user
            +Khi xoa dung phuong thuc DELETE */}
    </div>
  );
}
