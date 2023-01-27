import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"

function Header() {
  return (
    <nav className="header">
        {/* logo on left -> img */}
        <Link to="/">
            <img 
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt=""
            />
        </Link>
        {/* search box */}
        <div className="header_search">
            <input type="text" className="header__searchInput" /> 
            <SearchIcon className="header__searchIcon"></SearchIcon> 
        </div>

        {/* 3 links*/}
        <div className="headerNav">
            {/* 1st link */}
            {/* href refreshes the page but Link does not. It SPARs instead - single page app refresh */}
            <Link to='/login' className='header__link'>
                <div className="header__option">
                    {/* using a p tag or span is both fine, span will come with just plain text w/out styling */}
                    <span className='header__optionLineOne'>Hello Qazi</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
            </Link>
            {/* 2nd link */}
            <Link className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
            </Link>
            {/* 3rd link */}
            <Link className='header__link'>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
            {/* 4th link */}
            <Link to='/checkout' className='header__link'>
                <div className="header__optionBasket">
                    {/* Shopping basket icon */}
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket */}
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </Link>

        </div>
        {/* basket icon with number. BTW squiggly brackets is used in order to use JS comments in JSX.
         Instead can also just use HTML comments outside of brackets */}
    </nav>
  );
}

export default Header