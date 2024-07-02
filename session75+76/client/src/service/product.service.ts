// nơi để lấy dữ liệu
import axios from "axios";

// hàm lấy tất cả thông tin sản phẩm
export const getProducts = async () => {
    const response: any = await axios.get("http://localhost:8080/products")
    return response.data
};
// hàm thêm sản phẩm vào trong giỏ hàng