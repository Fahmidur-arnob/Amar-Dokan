import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
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


                <div className="empty-cart">
                    <BsCartX/>
                    <span>No Products Here</span>
                    <button className='return-cta'>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
