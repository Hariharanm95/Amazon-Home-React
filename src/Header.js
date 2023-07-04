import React from "react";
import "./css/header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(){
    return (
        <React.Fragment>
        <div className="header">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="h_logo" alt="Banner"/>

            <div className="h_search">
                        <input type="text"/>
                        <SearchIcon className="h_searchIcon"/>
            </div>

            <div className="h_nav">
                <div className="h_selectLanguage">
                    <select id="languageSelect" name="language">
                        <option value="volvo">EN</option>
                        <option value="saab">TAM</option>
                        <option value="opel">HINDI</option>
                    </select>
                </div>
                <div className="h_option">
                    <span className="h_optionone">Hello, Hari</span>
                    <span className="h_optiontwo">Account & Lists</span>
                </div>
                <div className="h_option">
                    <span className="h_optionone">Returns</span>
                    <span className="h_optiontwo">& Orders</span>
                </div>
                <div className="h_basket">
                    <ShoppingCartIcon className="h_shopIcon"/>
                    <span>0</span>
                </div>
            </div>

        </div>

        <div className="h_bottom">

            <ul>
                <li>All</li>
                <li>Fresh</li>
                <li>Amazon miniTv</li>
                <li>Sell</li>
                <li>Gift Cards</li>
                <li>Buy Again</li>
                <li>Amazon Pay</li>
                <li>Browsing History</li>
                <li>Baby</li>
                <li>Kindle eBooks</li>
                <li>Gift Ideas</li>
                <li>Hari's Amazon.in</li>
            </ul>

        </div>
        </React.Fragment>
    )
}

export default Header