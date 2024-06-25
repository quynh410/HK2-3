import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Books } from "../interface/interface";
import { actionBook } from "../action/action";

export default function Book() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const [newBook, setNewBook] = useState({
    id: 0,
    name_book: "",
    user: "",
    date_borrowed: "",
    date_pay: "",
    status: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateStatus = (id: number) => {
    dispatch(actionBook("UPDATE_STATUS", id));
  };

  const handleDeleteBook = (id: number) => {
    dispatch(actionBook("DELETE_BOOK", id));
  };

  const handleAddBook = () => {
    if (isEditing) {
      dispatch(actionBook("UPDATE_BOOK", newBook));
      setIsEditing(false);
    } else {
      const newBookId = data.bookReducer.length ? data.bookReducer[data.bookReducer.length - 1].id + 1 : 1;
      const bookToAdd = { ...newBook, id: newBookId };
      dispatch(actionBook("ADD_BOOK", bookToAdd));
    }
    setNewBook({
      id: 0,
      name_book: "",
      user: "",
      date_borrowed: "",
      date_pay: "",
      status: false,
    });
  };

  const handleEditBook = (book: Books) => {
    setNewBook(book);
    setIsEditing(true);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Tên sách"
          value={newBook.name_book}
          onChange={(e) => setNewBook({ ...newBook, name_book: e.target.value })}
        />
        <input
          type="text"
          placeholder="Người mượn"
          value={newBook.user}
          onChange={(e) => setNewBook({ ...newBook, user: e.target.value })}
        />
        <input
          type="date"
          placeholder="Ngày mượn"
          value={newBook.date_borrowed}
          onChange={(e) => setNewBook({ ...newBook, date_borrowed: e.target.value })}
        />
        <input
          type="date"
          placeholder="Ngày trả"
          value={newBook.date_pay}
          onChange={(e) => setNewBook({ ...newBook, date_pay: e.target.value })}
        />
        <button onClick={handleAddBook}>{isEditing ? "Cập nhật sách" : "Thêm Sách"}</button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sách</th>
            <th>Người mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng Thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {data.bookReducer.map((book: Books, index: number) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.name_book}</td>
              <td>{book.user}</td>
              <td>{book.date_borrowed}</td>
              <td>{book.date_pay}</td>
              <td onClick={() => handleUpdateStatus(book.id)}>
                {book.status ? <button>Đã trả</button> : <button>Chưa trả</button>}
              </td>
              <td>
                <button onClick={() => handleEditBook(book)}>Sửa</button>
                <button onClick={() => handleDeleteBook(book.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
