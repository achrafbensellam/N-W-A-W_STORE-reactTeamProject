import React, { useContext , useState } from "react";
import { MyContext } from "../../../utils/MyContext";
import '../components/Cards.css';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
function Showdetails() {
    
    const [products, setProducts] = useContext(MyContext);

    const [selectedCard,setSelectedCard] = useState(null);
    

    return (

        <section className="thefirstcontainerintheproductspage">
               <div className="theproductsConta">
       {
        products.map(item=>
            <div className="card" key={item.id}>
                <div className="theimagebox">
                <img className="theimage" src={item.image} alt="" />

                </div>
                <div className="thetext">
                      <h2 >Name : {item.name}</h2>
                    <div className="FaStar"> <FaStar/><FaStar/><FaStar/><FaRegStarHalfStroke/></div> 
                <h2>Price : {item.price}</h2>
                <h2>category : {item.name}</h2> 



            {/* this is the ADD BUTTON */}

              <button className="theadd">Add </button>
            {/* this is the ADD BUTTON */}
            




                <button className="theguy" > <Link to={`/item/${item.id}`}>view details</Link>  </button>
                </div>
             
            </div>
        )
       }
         
        </div>    
        </section>
     
    )}


export default Showdetails;