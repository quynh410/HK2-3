import React, { memo, useMemo } from 'react'

 function B2() {
    const users = [
        { id: 1, name: 'Quỳnh', age: 19 },
        { id: 2, name: 'Lan Anh', age: 17 },
        { id: 3, name: 'Trang', age: 20 },
        { id: 4, name: 'Phương Anh', age: 18 },
        { id: 5, name: 'Huyền', age: 18 },
      ];
    
      const adultUsers = useMemo(() => {
        return users.filter(user => user.age > 18);
      }, [users]);
    
      return (
        <div>
            <h1>Bài 2 /38 </h1>
          <h2>Danh sách người dùng trên 18 tuổi:</h2>
          <ul>
            {adultUsers.map(user => (
              <li key={user.id}>
                {user.name} -- Age: {user.age}
              </li>
            ))}
          </ul>
        </div>
      );
}
export default memo(B2);