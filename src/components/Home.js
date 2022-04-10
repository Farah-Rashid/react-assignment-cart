import React from "react"
import list from "../data"
import "./home.css"
import Cards from "./Card"

function Home({cart, setCart}){
const handleClick = (item)=>{
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
}
return (
    <section>
      {list.map((item) => {
          return( <>
        <Cards key={item.id} item={item} handleClick={handleClick} />
        </>
        )
})}
    </section>
  );
 }
 export default Home;