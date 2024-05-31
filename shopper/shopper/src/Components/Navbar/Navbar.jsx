import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='laptop_store_samir' src={logo} alt="Shopper" />
        <div className="nav-logo-store"><p>Samir's Tech Store</p></div>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("laptops")}>
          <Link style={{ textDecoration: 'none' }} to='/laptops'>Laptops</Link> {menu === "laptops" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("tablets")}>
          <Link style={{ textDecoration: 'none' }} to='/tablets'>Tablets</Link> {menu === "tablets" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mobiles")}>
          <Link style={{ textDecoration: 'none' }} to='/mobiles'>Mobiles</Link> {menu === "mobiles" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;