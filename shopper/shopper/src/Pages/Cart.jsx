import React, {useState} from 'react'
import CartItems from '../Components/CartItems/CartItems';
import CheckoutModal from '../Components/CheckoutModal/CheckoutModal';
import '../Pages/CSS/Cart.css'

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <CartItems />
      <div className="button_checkout_cart"><button  onClick={toggleModal}>Proceed to checkout</button>
      <CheckoutModal isOpen={isModalOpen} onClose={toggleModal} /></div>
      
    </div>
  );
};

export default Cart;
