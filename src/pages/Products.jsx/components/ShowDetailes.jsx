import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../utils/MyContext";
 import { Link } from "react-router-dom";

function Showdetail() {

    // const [products,seetProducts] = useContext(MyContext)

   const {id} = useParams()

   const [products] = useContext(MyContext);

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
                <div >
                    <div className="theimagedetailsbox">
                          <img className="theimagedetails" src={X.image} alt=""/>

                          <div className="theboximages">
                                       <img  className="thethreesmall" src={X.image2} alt="" /><img className="thethreesmall" src={X.image3} alt="" /><img className="thethreesmall" src={X.image4} alt="" />
                          </div>
                    </div>

                    <div className="thedetailsthemselfs">
                        <h1>{X.name}</h1>
                        <p>{X.price} MAD</p>
                        <p>{X.category}</p>
                        <p>{X.description}</p>
                    </div>

                    <button className="theadd">Add</button>
                    <button className="back"><Link to='/Productspage'>Back off</Link>  </button>
                </div>
       </section>
    )
       
 
 
}



export default Showdetail