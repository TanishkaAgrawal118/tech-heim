import React, { useEffect, useState } from "react";
import "./style.css";
import { fetchProducts, removeProduct, updateProductStatus } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../LandingPages/Navbar/NavBar";
import { Container } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard";
import { Switch } from "@mui/material";
import edit from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/trash btn.svg'
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products = [] } = useSelector((state) => state.products);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState(null);

  const pageSize = 10;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        dispatch(fetchProducts());
      } else {
        navigate('/contact'); 
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const totalPages = Math.ceil(products.length / pageSize);

  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleToggle = (product) => {
    const newStatus = product.status === "active" ? "inactive" : "active";
    dispatch(updateProductStatus(product.id, newStatus));
  };

  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(removeProduct(id));
      dispatch(fetchProducts());
      toast.success("Product deleted", { position: "top-right" });
    }
  };

  // ✅ If user is not logged in, return `null` to prevent rendering
  if (!user) return null;

  return (
    <>
      <NavBar />
      <Container>
        <div className="whole-product-management">
          <div>
            <AdminDashboard />
          </div>

          <div className="product-List-container">
            <h2>Product Management</h2>
            <div className="table-wrapper">
              <table className="product-table">
                <thead>
                  <tr>
                    <th className="product-col">Product</th>
                    <th className="price-col">Price</th>
                    <th className="stock-col">Availability</th>
                    <th className="rating-col">Rating</th>
                    <th className="brand-col">Brand</th>
                    <th className="screen-col">Screen Size</th>
                    <th className="color-col">Color</th>
                    <th className="action-col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedProducts.length > 0 ? (
                    paginatedProducts.map((product) => (
                      <tr key={product.id}>
                        <td className="add-product-name" onClick={() => handleEdit(product)}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                          />
                          {product.name}
                        </td>
                        <td>${product.originalPrice}</td>
                        <td>
                          <Switch
                            checked={product.status === "active"}
                            onChange={() => handleToggle(product)}
                            color="primary"
                          />
                        </td>
                        <td>{product.rating}</td>
                        <td>{product.details?.brand || "-"}</td>
                        <td>{product.details?.screenSize || "-"}</td>
                        <td>{product.details?.color || "-"}</td>
                        <td>
                          <div className="product-actions">
                            <img 
                              src={edit} 
                              alt="edit" 
                              className="product-edit-btn" 
                              onClick={() => handleEdit(product)}
                            />
                            <img 
                              src={deleteIcon} 
                              alt="delete" 
                              className="product-delete-btn" 
                              onClick={() => handleDelete(product.id)} 
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8">No products found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button onClick={handlePrevious} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button onClick={handleNext} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

export default AddProduct;
