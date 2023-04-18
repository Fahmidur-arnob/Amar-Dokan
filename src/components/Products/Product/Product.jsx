
import prod from '../../../assets/products/earbuds-prod-1.webp';

import "./Product.scss";

const Product = ({id, data}) => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="earbuds"/>
            </div>
            <div className="product-details">
                <span className="name">
                    {data.title}
                </span>
                <span className="price">
                    &#36;{data.price}
                </span>
            </div>
        </div>
    );
};
//2:06:03
export default Product;
