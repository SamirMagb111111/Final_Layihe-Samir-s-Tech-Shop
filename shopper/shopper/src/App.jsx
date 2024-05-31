import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_1 from './Components/Assets/banner_1.png';
import banner_2 from './Components/Assets/banner_2.png';
import banner_3 from './Components/Assets/banner_3.png'



const App = () => {
  return (
    
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Shop />} />
          <Route path='/laptops' element={<ShopCategory banner={banner_1} category="laptop" />} />
          <Route path='/tablets' element={<ShopCategory banner={banner_2} category="tablet" />} />
          <Route path='/mobiles' element={<ShopCategory banner={banner_3} category="mobile" />} />
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
