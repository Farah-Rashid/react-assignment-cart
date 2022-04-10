import React,{useState} from "react";
import { Route, Routes } from "react-router";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Description from "./components/Description";
import list from "./data";

function App(){
  const[cart,setCart]=useState([])
  return(
    <>
    <Navbar cart={cart} />
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
      <Route path="cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      <Route path="/:id" element={<Description list={list} />} />
    </Routes>
    </>
  );
}
export default App;
