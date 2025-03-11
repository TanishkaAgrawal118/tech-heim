import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./components/LandingPages";
import DataTable from "./components/TableTask/Table";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Product from "./components/Products";

import CartDetail from "./components/Products/CartDetail";
import Checkout from "./components/Products/CartDetail/Checkout";
import Payment from "./components/Products/CartDetail/Payment";
import CartItems from "./components/Products/CartDetail/CartItems";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import AddAdmin from "./components/Admin/AdminManagement";
import EditProduct from "./components/Admin/EditProduct";
import UserOnBoard from "./components/Admin/UserOnBoarding";
import ProductDetail from "./components/Products/ProductDetail";
import CompareProducts from "./components/Products/Compare";

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<LandingPage />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/productDetails/:id" element={<ProductDetail/>}></Route>
          <Route path="/cartDetails/:id" element={<CartDetail />}>
            <Route index element={<CartItems />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="/product-management" element={<AddProduct/>}></Route>
          <Route path="/admin-management" element={<AddAdmin/>}></Route>
          <Route path="/edit-product/:id" element={<EditProduct/>}></Route>
          <Route path="/edit-product" element={<EditProduct/>}></Route>
          <Route path="/user-onBoard" element={<UserOnBoard/>}></Route>
          <Route path="/compare-products" element={<CompareProducts/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
