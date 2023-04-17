
import prod from '../../../assets/products/earbuds-prod-1.webp';

import "./Product.scss";

const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} alt="earbuds"/>
            </div>
            <div className="product-details">
                <span className="name">
                    Product Name
                </span>
                <span className="price">
                    &#36;499
                </span>
            </div>
        </div>
    );
};
//2:06:03
export default Product;
