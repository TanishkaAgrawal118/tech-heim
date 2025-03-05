import React, { useEffect, useState } from "react";
import "./style.css";
import { fetchProducts } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products); 

  const [newProduct, setNewProduct] = useState({
    name: "",
    type: "",
    sku: "",
    price: "",
    variants: "",
  });

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  return (
    <div className="product-List-container">
      <h2>Product Management</h2>
      <div className="add-product-form">
        <input
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
          }
        />
        <input
          placeholder="Type"
          name="type"
          value={newProduct.type}
          onChange={(e) =>
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
          }
        />
        <input
          placeholder="Stock"
          name="sku"
          value={newProduct.sku}
          onChange={(e) =>
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
          }
        />
        <input
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
          }
        />
        <input
          placeholder="Variants"
          name="variants"
          value={newProduct.variants}
          onChange={(e) =>
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
          }
        />
        <button>Add Product</button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Rating</th>
            <th>Color</th>
            <th>Screen Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.originalPrice}</td>
              <td>{product.stock}</td>
              <td>${product.rating}</td>
              <td>{product.details?.color || "-"}</td>
              <td>{product.details?.screenSize || "-"}</td>
              <td>
                <button onClick={() => console.log("Remove", product.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
          {products?.length === 0 && (
            <tr>
              <td colSpan="7">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddProduct;
