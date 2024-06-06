"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function index() {
    const Infor = [{
            name: "Nguyễn Văn A",
            date: "06/03/2034",
            gender: "Nam",
            address: "Thanh Xuân, Hà Nội"
        },
        {
            name: "Nguyễn Văn B",
            date: "06/03/2024",
            gender: "Nữ",
            address: "Hoàng Mai, Hà Nội"
        }
    ];
    return (<div className='all'>
      <table border={1}>
        <thead>
            <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            {Infor.map((item, index) => {
            return <tr>
           <td>{index + 1}</td>
           <td>{item.name}</td>
           <td>{item.date}</td>
           <td>{item.gender}</td>
           <td>{item.address}</td>
           <td>
            <button>Sửa</button>
            <button>Xóa</button>
            </td>
         </tr>;
        })}

        </tbody>
      </table>
    </div>);
}
exports.default = index;
