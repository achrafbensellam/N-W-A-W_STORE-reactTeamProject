import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../utils/MyContext";
 import { Link } from "react-router-dom";
 import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


function Showdetail() {
    const [products, setProducts,cart, setCart] = useContext(MyContext);

    // const [products,seetProducts] = useContext(MyContext)

   const {id} = useParams()


   const X = products.find((item)=>(item.id ===id))
     
  if(!X){
    return(
        
        // console.log("ID from URL:", id, typeof Number(id))
        // console.log(MyContext)
  <h2>
    not found
  </h2>
         
        
)
  }
     
     
     return(
     <section className="thedeatailcontainer">
                
                    <div className="theimagedetailsbox">
                          <img className="theimagedetails" src={X.image} alt=""/>

                          <div className="theboximages">
                                       <img  className="thethreesmall" src={X.image2} alt="" /><img className="thethreesmall" src={X.image3} alt="" /><img className="thethreesmall" src={X.image4} alt="" />
                          </div>
                          </div>
                    
             <div className="thetextdetails">
                    <div className="thedetailsthemselfs">
                        <h1>{X.name}</h1>
                        <p>{X.price} MAD</p>
                        <p>{X.category}</p>
                                                        <div className="FaStar"> <FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                        <p>{X.description}</p>
                    </div>

                    <button className="theaddcardofwidadDeatails" 
                    onClick={() => {
                                        const existingProduct = cart.find(
                                            (product) => product.id === X.id);
                                            if (existingProduct) {
                                                setCart((currentCart) =>
                                                    currentCart.map((product) =>
                                                        product.id === X.id
                                                ? {
                                                    ...product,
                                                    quantity: product.quantity + 1
                                                }
                                                : product
                                                )
                                            );
                                            
                                        } else {
                                            setCart((currentCart) => [
                                                ...currentCart,
                                                { ...X, quantity: 1 }
                                            ]);

                                        }
                                    }}>Add</button>
                    <button className="back"><Link className="backLink" to='/Products'>Back off</Link>  </button>
                </div>
       </section>
    )
       
 
 
}



export default Showdetail