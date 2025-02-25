import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import LandingPage from './components/LandingPages';
import DataTable from './components/TableTask/Table';
import FAQ from './components/FAQ';


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/FAQ' element={<FAQ/>}></Route>
    </Routes>
   </BrowserRouter>
    {/* <DataTable/> */}
   </>
  );
}

export default App;

