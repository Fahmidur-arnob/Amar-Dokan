import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from './CartItem/CartItem';
import "./Cart.scss";

const Cart = ({ setShowCart }) => {
    return (
        <div className="cart-panel">
            <div className="opacity-layer"></div>
            <div className="cart-content">

                <div className="cart-header">
                    <span className="heading">
                        Shopping Cart
                    </span>
                    <span
                        className="close-button"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose />
                        <span className="text">
                            Close
                        </span>
                    </span>
                </div>


                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>No Products Here</span>
                    <button className='return-cta'>
                        Shop Now
                    </button>
                </div> */}
                <>
                    <CartItem />
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">
                                Subtotal:
                            </span>
                            <span className="text total">&#36;454</span>
                        </div>
                        <div className="button">
                            <button className='checkout-cta'>
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};
//3:11:50
export default Cart;
