import React from 'react';
import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const categories = [{
    categoryId: "infanteria",
    name: "INFANTERIA"
},
{
    categoryId: "arqueria",
    name: "ARQUERIA"
},{
    categoryId: "caballeria",
    name: "CABALLERIA"
}]

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to={"/"}><img src="https://static.ageofempires.com/aoe/wp-content/uploads/2020/01/aoe_logo_stacked-1.png" alt=""/></Link>
            </div>
            <div className="navbar__links">
                { categories.map( category => <Link to={`/category/${category.categoryId}`}>
                    <p>{category.name}</p>
                    </Link>)}
                <p>ABOUT US</p>
                <p>CONTACT</p>
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar
