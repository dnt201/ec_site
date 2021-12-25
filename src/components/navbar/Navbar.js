import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faCaretDown, faCaretRight,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import logoIMG from '../../images/logo.jpg'
import './Navbar.css'




const Navbar = (props) => {
 
    var listCategories = [
        {
            "id": "619e18564477df86b6ab262f",
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Flaptop-category.png?alt=media&token=7b2c0609-61a0-4a78-abec-6b542272b895",
            "path": "Laptop",
            "name": "Laptop",
            "children": [
                {
                    "id": "619e189f4477df86b6ab2636",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Flaptop-office.png?alt=media&token=51a0a797-37bf-4447-8284-975808cc61be",
                    "path": "Office-Laptop",
                    "name": "Office Laptop"
                },
                {
                    "id": "61a96a1738f291e569a780af",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Flaptop-gaming.png?alt=media&token=0cf0d697-805e-4825-a762-14e1bdbc4874",
                    "path": "Gaming-Laptop",
                    "name": "Gaming Laptop"
                },
                {
                    "id": "61ac7fa08336fc6a0a1c9e28",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Funnamed%20(2).png?alt=media&token=a62beead-cfc2-463f-9972-508256ca1892",
                    "path": "Macbook",
                    "name": "Macbook"
                }
            ]
        },
        {
            "id": "619e18794477df86b6ab2632",
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fmonitor-category.png?alt=media&token=7afcf3ae-08e1-4b48-855b-fccadc2b29f3",
            "path": "Monitor",
            "name": "Monitor",
            "children": [
                {
                    "id": "619e18df4477df86b6ab263a",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fmonitor-gaming.png?alt=media&token=3de89e73-46f4-4659-a00f-49549b12e48e",
                    "path": "Gaming-Monitor",
                    "name": "Gaming Monitor"
                },
                {
                    "id": "619e18f44477df86b6ab263c",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fmonitor-office.png?alt=media&token=37936b4e-1c81-4d77-b5cb-ef975ea777ca",
                    "path": "Office-Monitor",
                    "name": "Office Monitor"
                }
            ]
        },
        {
            "id": "619e5311d9ea1fc4879a719b",
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fgear-category.png?alt=media&token=ac498a2a-22f7-4c7a-a78e-e9503969cf4b",
            "path": "Gear",
            "name": "Gear",
            "children": [
                {
                    "id": "619e5391d9ea1fc4879a719d",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fkeyboard.png?alt=media&token=b216b51c-07f8-45f6-aefb-7ca6b1af4e8a",
                    "path": "Keyboard",
                    "name": "Keyboard"
                },
                {
                    "id": "619e53bbd9ea1fc4879a719f",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fpad_2.png?alt=media&token=762f92df-cadb-45f3-8ebc-9d3798140cc0",
                    "path": "Mousepad",
                    "name": "Mousepad"
                },
                {
                    "id": "61ac678687538cbb562618b5",
                    "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Fmouse.png?alt=media&token=4fe1f483-cfbd-4316-ad7d-33e8e0c71067",
                    "path": "Mouse",
                    "name": "Mouse"
                }
            ]
        },
        {
            "id": "61aced966002f1896731ebc8",
            "image": "https://firebasestorage.googleapis.com/v0/b/doancongnghethongtin-2df4c.appspot.com/o/doancntt%2Flogo.jpg?alt=media&token=10e0e6cf-bb38-40e5-81b4-37c1e61b8e0d",
            "path": "Network-Device",
            "name": "Network Device",
        }
    ]
    const cart = useSelector((state) => state.cart)

    const [navToggle, setNavToggle] = useState(false);
    const toggleNav = () => {
        setNavToggle(!navToggle);
    }
    const renderNav = () => {
        let className = "";
        if (navToggle) {
            className += " active";
        }
        return className;
    }
    return (
        <div>
            <nav className={renderNav()}>
                <div className="menu-icons" onClick={toggleNav}>
                    <FontAwesomeIcon icon={faBars} />
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <Link to="/#" className="logo">
                    <img
                        src={logoIMG}
                        alt="" />
                </Link>
                <ul className="nav-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <div className="cont" type="button" >Products <FontAwesomeIcon icon={faCaretDown} /></div>
                        <ul className="sub-menu" >
                            {listCategories && listCategories.map((category) => (
                                <li key={category.id}>
                                    <div className="cont flex_row_center_between" to="/#">{category.name}<FontAwesomeIcon icon={faCaretRight} /></div>
                                    <ul className="sub-menu">
                                        <li to="/#">
                                            <Link className="ta-center cl_orange" to={"/" + category.path}>{category.name}</Link>
                                        </li>
                                        {category.children &&  category.children.map((categoryChild) => (
                                            <li key={categoryChild.id}>
                                                <Link  to={category.path + "/" + categoryChild.path}>{categoryChild.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}

                        </ul>
                    </li>
                    <div className="move-right">
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
                                <span className="number-items-cart">{cart.cartItems.length}</span>
                        </Link>
         
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
