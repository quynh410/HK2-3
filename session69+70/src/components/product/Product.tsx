import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../interface/interface";

export default function Product() {
  const products: any = useSelector((state) => state);
  const dispatch = useDispatch();
  
  // ham them san pham vao gio hang
  const addToCart = (product: Products) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product, 
    });
  };

  return (
    <div className="font-mono">
      <table className="min-w-full border-collapse" border={1}>
        <thead>
          <tr className="border border-gray-300">
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Mô tả</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {products.productReducer.map((product: Products, index: number) => (
            <tr key={product.id} className="border border-gray-300 text-center">
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover mx-auto"
                />
              </td>
              <td>{product.price}</td>
              <td>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
