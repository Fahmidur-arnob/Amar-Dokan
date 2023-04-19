import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import { Context } from '../../utils/context';
import CartItem from './CartItem/CartItem';
import "./Cart.scss";

import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from '../../utils/api';

const Cart = ({ setShowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context);
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="cart-panel">
            <div
                className="opacity-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">

                <div className="cart-header">
                    <span className="heading">
                        Shopping Cart
                    </span>
                    <span
                        className="close-button"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className='close-button' />
                        <span className="text">
                            Close
                        </span>
                    </span>
                </div>


                {!cartItems?.length && (
                    <>
                        <div className="empty-cart">
                            <BsCartX />
                            <span>No Products Here</span>
                            <button
                                className='return-cta'
                                onClick={() => { }}
                            >
                                Shop Now
                            </button>
                        </div>

                    </>
                )}
                {!!cartItems?.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">
                                    Subtotal:
                                </span>
                                <span className="text total">&#36;{cartSubTotal}</span>
                            </div>
                            <div className="button">
                                <button className='checkout-cta'
                                    onClick={handlePayment}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
//5:17:31
export default Cart;
