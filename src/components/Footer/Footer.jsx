import React from 'react';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import "./Footer.scss";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="col">
                    <div className="title">
                        About
                    </div>
                    <div className="text">
                        Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecta beatae vitae dicta sunt explicabo eaque ipsa quae ab illa
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        Contact
                    </div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, Kottunkulangara, Alappuzha, Kerala, 68806
                        </div>
                    </div>

                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 999 99 999 999
                        </div>
                    </div>

                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: envkt@example.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        Categories
                    </div>
                    <div className="text">
                        Headphones
                    </div>
                    <div className="text">
                        Smart Watches
                    </div>
                    <div className="text">
                        Bluetooth Speakers
                    </div>
                    <div className="text">
                        Wireless Earbuds
                    </div>
                    <div className="text">
                        Home Theatre
                    </div>
                    <div className="text">
                        Projectors
                    </div>
                </div>
                <div className="col">
                    <div className="title">
                        Pages
                    </div>
                    <div className="text">
                        Home
                    </div>
                    <div className="text">
                        About
                    </div>
                    <div className="text">
                        Privacy Policy
                    </div>
                    <div className="text">
                        Returns
                    </div>
                    <div className="text">
                        Terms & Conditions
                    </div>
                    <div className="text">
                        Contact Us
                    </div>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Amar Dokan 2023, Created By Md Fahmidur Rahman Arnob, Easy buying and selling solutions for the people.
                    </div>
                    <img src={Payment} alt="payment options"/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
