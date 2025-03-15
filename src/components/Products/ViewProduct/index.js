import React, { useEffect, useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./style.css";
import star from "../../../assets/Star.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/actions/productAction";
import InfiniteScroll from "react-infinite-scroll-component";
import { addToCompare, removeFromCompare } from "../../../redux/actions/compareAction";

const ViewProduct = ({ selectedFilters }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(12);
  const compareList = useSelector((state) => state.compare.compareList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedFilters]);

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
      (gpu.length === 0 ||
        gpu.includes(productDetails.graphics.split(" ")[0])) &&
      (driveSize.length === 0 ||
        driveSize.includes(productDetails.hardDiskSize))
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(applyFilters);
  }, [products, selectedFilters]);

  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = displayedProducts.length < filteredProducts.length;

  const fetchMoreProducts = () => {
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 12);
    }, 500);
  };

  const handleProductDetail = (product) => {
    navigate(`/productDetails/${product.id}`);
  };
  const handleShowCompare = () => {
    navigate('/compare-products')
  };
  const handleCompareChange = (product) => {
    if (compareList.some((item) => item.id === product.id)) {
      dispatch(removeFromCompare(product.id));
    } else if (compareList.length < 4) {
      dispatch(addToCompare(product));
    } else {
      alert("You can only compare up to 4 products.");
    }
  };
  return (
    <Container>
      <InfiniteScroll
        dataLength={displayedProducts.length}
        next={fetchMoreProducts}
        hasMore={hasMore}
        loader={<p className="loading-message">Loading more products...</p>}
        endMessage={<p className="end-message">All products are loaded.</p>}
      >
        <div className="compare-show">
          <button onClick={handleShowCompare}>Compare</button>
        </div>
        <div className="product-containers">
          {displayedProducts.map((product) => (
            <Paper
              key={product.id}
              elevation={0}
              className="product-card-wrapper"
            >
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
              <div className="add-to-compare">
                    <input
                      type="checkbox"
                      onChange={() => handleCompareChange(product)}
                      checked={compareList.some(
                        (item) => item.id === product.id
                      )}
                    />
                    <p>Add to compare</p>
              </div>


            </Paper>
          ))}
        </div>
      </InfiniteScroll>

      {filteredProducts.length === 0 && (
        <p className="no-products">No products match your filters.</p>
      )}
    </Container>
  );
};

export default ViewProduct;
