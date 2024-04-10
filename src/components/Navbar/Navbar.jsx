import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
export const Navbar = () => {
    const [menu, setmenu] = useState("shop")
    const { getTotalCartItems } = useContext(ShopContext)
    return (
        <div className='navbar d-flex'>

            <div className='nav-logo d-flex'>
                <img src={logo} alt="" />
                <p> SH<span>OPP</span>ER </p>
            </div>

            <ul className='nav-menu d-flex'>
                <li onClick={() => { setmenu("shop") }}> <Link to="/"> Shop🛍️</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("mens") }}> <Link to="/mens"> Men👨🏼‍🦰</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("womens") }}> <Link to="/womens">Women👩🏼‍🦰</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Kids") }}>  <Link to="/kids">Kids👶🏽 </Link>{menu === "Kids" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart d-flex">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">  <img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count d-flex">
                    {getTotalCartItems()}
                </div>


            </div>
        </div>

    )

}
