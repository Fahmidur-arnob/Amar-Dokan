import { MdClose } from 'react-icons/md';
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";

const CartItem = () => {
    return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                    <img src={prod} alt="product" />
                </div>
                <div className="prod-details">
                    <span className="name">
                        Product Name
                    </span>
                    <MdClose className='close-button' />
                    <div className="quantity-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <div className="text">
                        <span>3</span>
                        <span>x</span>
                        <span className='highlight'>&#36;price</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
