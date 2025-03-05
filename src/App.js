import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./components/LandingPages";
import DataTable from "./components/TableTask/Table";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Product from "./components/Products";
import ProductDetail from "./components/Products/ProductDetail";
import CartDetail from "./components/Products/CartDetail";
import Checkout from "./components/Products/CartDetail/Checkout";
import Payment from "./components/Products/CartDetail/Payment";
import CartItems from "./components/Products/CartDetail/CartItems";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import AddAdmin from "./components/Admin/AdminManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/productDetails/:id" element={<ProductDetail />} />
          <Route path="/cartDetails/:id" element={<CartDetail />}>
            <Route index element={<CartItems />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
          </Route>
          <Route path="/product-management" element={<AddProduct/>}></Route>
          <Route path="/admin-management" element={<AddAdmin/>}></Route>
        </Routes> 
      </BrowserRouter>
      {/* <DataTable/> */}
    </>
  );
}

export default App;
