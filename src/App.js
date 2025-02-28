import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './components/LandingPages';
import DataTable from './components/TableTask/Table';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Product from './components/Products';
import ProductDetail from './components/Products/ProductDetail';


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/FAQ' element={<FAQ/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path="/productDetails/:id" element={<ProductDetail/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

