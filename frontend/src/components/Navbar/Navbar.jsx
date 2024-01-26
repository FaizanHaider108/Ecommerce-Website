import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu, setMenu] = useState( "shop" )
    const { getTotalCartItems } = useContext( ShopContext );
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={Logo} alt="Logo" />
                <Link to={"/"}>
                <p>Cosmatics</p> 
                </Link>
               
            </div>
            <ul className="nav-menu">
                <li onClick={ () => { setMenu( "shop" ) } }>
                    <Link
                        style={ { textDecoration: "none", color: "#0d0d0d" } }
                        to="/"> Shop</Link>
                    { menu === "shop" ? <hr /> : <></> }
                </li>
                <li onClick={ () => { setMenu( "Men" ) } }>
                    <Link
                        style={ { textDecoration: "none", color: "#0d0d0d" } }
                        to="/Mens"> Men</Link>
                    { menu === "Men" ? <hr /> : <></> }

                </li>
                <li onClick={ () => { setMenu( "Womens" ) } }
                >
                    <Link
                        style={ { textDecoration: "none", color: "#0d0d0d" } }
                        to="/Womens"> Women</Link>
                    { menu === "Womens" ? <hr /> : <></> }

                </li>
                <li onClick={ () => { setMenu( "kids" ) } }>
                    <Link
                        style={ { textDecoration: "none", color: "#0d0d0d" } }
                        to="/kids"> Kids</Link>
                    { menu === "kids" ? <hr /> : <></> }

                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to={ "/login" }>
                    <button>Login</button>
                </Link>
                <Link to={ "/cart" }>
                    <img src={ cart_icon } alt="Add to Cart" />
                </Link>

                <div className='nav-cart-count'>{ getTotalCartItems() }</div>
            </div>
        </div>
    )
}

export default Navbar