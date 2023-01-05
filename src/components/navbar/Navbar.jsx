import * as React from 'react';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <img src="/img/arrow-down.svg" alt="" />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link' to="/">Clothes ans Clothes</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <img src="/img/search.svg" alt="" />
                        <img src="/img/user.svg" alt="" />
                        <img src="/img/favourite.svg" alt="" />
                        <div className="cartIcon">
                            <img src="/img/cart.svg" alt="" />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
