import React, { useContext } from 'react';
import "./CardItem.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";

const CardItem = () => {
    let { all_product, cartItems, RemoveFromCart, getTotalCartAmount } = useContext( ShopContext );

    return (
        <div className='cartitem'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            { all_product.map( ( e ) => {
                if ( cartItems[e.id] > 0 ) {
                    return (
                        <div key={ e.id }>
                            <div className="cartitems-format cartitem-format-main">
                                <img
                                    src={ e.image }
                                    alt=""
                                    className='carticon-product-icon'
                                />
                                <p>{ e.name }</p>
                                <p>${ e.new_price }</p>
                                <button className='cart-items-quantity'>
                                    { cartItems[e.id] }
                                </button>
                                <p>
                                    ${ e.new_price * cartItems[e.id] }
                                </p>
                                <img
                                    className='cart-remove_icon'
                                    src={ remove_icon }
                                    alt="Remove icon"
                                    onClick={ () => { RemoveFromCart( e.id ) } }
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            } ) }
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${ getTotalCartAmount() }</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cart-items-total-item'>
                            <h3>Total</h3>
                            <h3>${ getTotalCartAmount() }</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cart-items-promocode'>
                    <p>Enter promo code</p>
                    <div className="card-item-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
