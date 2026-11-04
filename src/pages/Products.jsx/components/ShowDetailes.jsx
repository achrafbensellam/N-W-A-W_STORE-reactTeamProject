import React, { useContext, useState } from "react";
import Showdetails from "./TheCards";
import { useParams } from "react-router-dom";
import { MyContext } from "../../../utils/MyContext";
 

function Showdetail() {

    // const [products,seetProducts] = useContext(MyContext)

   const [id] = useParams

    return(
       <section className="thedeatailcontainer">

       </section>
    )
}



export default Showdetail