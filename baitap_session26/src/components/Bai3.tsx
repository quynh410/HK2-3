import React from 'react';
interface User {
  name: string;
  gender: string;
  date: string;
  email: string;
  address: string;
}
class PersonalInfo extends React.Component {
  render() {
    const user:User = {
      name: "Nguyễn Văn A",
      gender:"Nam",
      date:"06/03/2034",
      email: "nguyenvana@gmail.com",
      address:"Thanh Xuân, Hà Nội"
    };

    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        <p>Họ và tên: {user.name}</p>
        <p>Giới tính:{user.gender}</p>
        <p>Ngày sinh: {user.date}</p>
        <p>Email: {user.email}</p>
        <p>Địa chỉ: {user.address}</p>
      </div>
    );
  }
}

export default PersonalInfo;