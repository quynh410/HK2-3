import axios from "axios";
import React, { useEffect, useState } from "react";
interface Students {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}
export default function Bai4() {
  const [students, setStudents] = useState<Students[]>([]);
  useEffect(() => {
    const removeById = async () => {
      try {
        await axios.delete(`http://localhost:8080/students/2`);
      } catch (err) {
        console.log("lỗi xóa ");
      }
    };
    removeById();
  }, []);

  return (
    <div>
    </div>
  );
}
