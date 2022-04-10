import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import "./index.css"


 const Navbar = ({cart})=>{
   return (
<nav className="primary" >
    <NavLink to='/'  id="home">
         Home </NavLink>

   <NavLink to='/cart'> 
        <div className="cart">
              <span>
            <i className="fas fa-cart-plus"></i>
              </span>
          <span>{cart.length}</span>
        </div> 
    </NavLink>
   
</nav>
     )
     }
 export default Navbar;