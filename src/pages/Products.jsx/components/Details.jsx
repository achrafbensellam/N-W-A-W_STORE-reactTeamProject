import React, { useContext } from "react";
// TheProvider import removed because it's not used in this file
import { Thecontext } from "./Products";

function Showdetails() {
    
    const [products, setProducts] = useContext(Thecontext);

    return (
        <section>
       {
        products.map(item=>
            <div>
                <h2>Name : {item.name}</h2>
                <h2>Price : {item.price}</h2>
                <h2>category : {item.name}</h2>
            </div>
        )
       }
         
        </section>    
    );
}

export default Showdetails;