import { Books } from "../../interface/interface";

const initialBook: Books[] = [
    {
        id: 1,
        name_book: "Harry Poter",
        user: "Minh Thu",
        date_borrowed: "2024-01-01",
        date_pay: "2024-03-01",
        status: true,
    },
    {
        id: 2,
        name_book: "Dạy con làm người",
        user: "Minh",
        date_borrowed: "2023-01-01",
        date_pay: "2023-02-01",
        status: false,
    },
    {
        id: 3,
        name_book: "Thiên Kim tiểu thư",
        user: "Minh",
        date_borrowed: "2023-01-01",
        date_pay: "2023-02-01",
        status: false,
    }
];

const bookReducer = (state = initialBook, action: any) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, action.payload];

        case "DELETE_BOOK": {
            const bookToDelete = state.find(book => book.id === action.payload);
            if (bookToDelete) {
                const confirmDelete = window.confirm(`Bạn có chắc chắn muốn xóa sách "${bookToDelete.name_book}" không?`);
                if (confirmDelete) {
                    return state.filter(book => book.id !== action.payload);
                }
            }
            return state;
        }

        case "UPDATE_BOOK":
            return state.map(book => 
                book.id === action.payload.id ? { ...book, ...action.payload } : book
            );

        case "UPDATE_STATUS":
            console.log("đang tiến hành update");
            let index = state.findIndex(item => item.id === action.payload);
            let status = window.confirm("Cập nhật?");
            if (status) {
                state[index].status = !state[index].status;
            }
            return [...state];

        default:
            return state;
    }
}

export default bookReducer;
