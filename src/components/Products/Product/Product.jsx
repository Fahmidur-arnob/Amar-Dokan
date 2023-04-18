
import "./Product.scss";
import { useNavigate } from 'react-router-dom';

const Product = ({id, data}) => {
    const navigate = useNavigate();
    return (
        <div 
            className="product-card" 
            onClick={() => navigate("/product/" + id)}
        >
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
