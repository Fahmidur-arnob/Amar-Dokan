import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart} from "react-icons/ai";
import { Search } from "react-router-dom";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import './Header.scss';

const Header = () => {
    const [scrollCount, setScrollCount] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrollCount(true);
        }
        else{
            setScrollCount(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`main-header ${scrollCount ? 'sticky-header' : ''}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">
                    AMARDOKAN.
                </div>
                <div className="right">
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon ">
                        <CgShoppingCart/>
                        <span>50</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
