import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";
import star from "../../../assets/Star.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/actions/productAction";

const ViewProduct = ({ selectedFilters }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductDetail = (product) => {
    navigate(`/productDetails/${product.id}`);
  };

  const applyFilters = (product) => {
    const { brand, ram, screenSize, processor, gpu, driveSize } =
      selectedFilters;

    const productDetails = product.details;

    return (
      (brand.length === 0 || brand.includes(productDetails.brand)) &&
      (ram.length === 0 || ram.includes(productDetails.ram)) &&
      (screenSize.length === 0 ||
        screenSize.includes(productDetails.screenSize)) &&
      (processor.length === 0 ||
        processor.includes(productDetails.processor)) &&
      (gpu.length === 0 || gpu.includes(productDetails.graphics.split[0])) &&
      (driveSize.length === 0 ||
        driveSize.includes(productDetails.hardDiskSize))
    );
  };

  const filteredProducts = products.filter(applyFilters);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Container>
      <div className="product-containers">
        {paginatedProducts.map((product) => (
          <Paper key={product.id} className="product-card-wrapper">
            <div
              className="product-cards"
              onClick={() => handleProductDetail(product)}
            >
              <span className="discount-badge">{product.discount}% OFF</span>

              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <h4 className="product-title">{product.name}</h4>
              </div>

              <div className="slider-price-detail">
                <div className="price">
                  <p className="original-price">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                  <p className="product-price">
                    ${product.discountedPrice.toFixed(2)}
                  </p>
                </div>

                <div className="rating">
                  <img src={star} alt="star" />
                  <p>{product.rating.toFixed(1)}</p>
                </div>
              </div>
            </div>
          </Paper>
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-products">No products match your filters.</p>
        )}
      </div>
      <div className="pagination-controls">
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ViewProduct;

// import React from "react";
// import { Container } from "react-bootstrap";
// import { Paper } from "@mui/material";
// import "./style.css";
// import { products } from "../../constants/constant";
// import start from "../../../assets/Star.svg";
// import { useNavigate } from "react-router";

// const ViewProduct = () => {
//   const navigate = useNavigate();
//   const handleProductDetail = (product) => {
//     navigate(`/productDetails/${product.id}`, { state: { product } });
//   };

//   return (
//     <Container>
//       <div className="product-containers">
//         {products.map((product) => (
//           <Paper key={product.id}>
//             <div
//               className="product-cards"
//               onClick={() => handleProductDetail(product)}
//             >
//               <span className="discount-badge">{product.discount}</span>
//               <div className="product-image">
//                 <img src={product.image} alt={product.name} />
//                 <h4 className="product-title">{product.name}</h4>
//               </div>

//               <div className="slider-price-detail">
//                 <div className="price">
//                   <p className="original-price">${product.price.toFixed(2)}</p>
//                   <p className="product-price">${product.price.toFixed(2)}</p>
//                 </div>

//                 <div className="rating">
//                   <img src={start} alt="star" />
//                   <p>{product.rating}</p>
//                 </div>
//               </div>
//             </div>
//           </Paper>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default ViewProduct;
