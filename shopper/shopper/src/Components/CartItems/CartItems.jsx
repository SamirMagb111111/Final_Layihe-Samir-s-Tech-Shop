import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import  {Link} from 'react-router-dom';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, clearCart } = useContext(ShopContext);

    // Fonksiyon cartı təmizləmək üçün
    const handleClearCart = () => {
        // Contextdən clearCart funksiyasını çağırmaq
        clearCart();
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p className='quantity_width'>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            <div className="cartitems-clear-cart">
                <button onClick={handleClearCart}>CLEAR</button>
            </div>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <Link to={`/product/${e.id}`}>
                                    <img className='carticon-product-icon' src={e.image} alt="" />
                                </Link>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity' onClick={() => addToCart(e.id)}>+</button>
                                <p className='say'>{cartItems[e.id]}</p>
                                <p className='umumi'> ${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-items' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promocode' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;