import React, { useContext, useState } from "react";
import { MyContext } from "../../../utils/MyContext";
import '../components/Cards.css';

import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

import Slider from '@mui/material/Slider';
function Showdetails() {

    const [category,setCategory] = useState("all")
    const [search,Setsearch] = useState('');
    const [products, setProducts,cart, setCart] = useContext(MyContext);
    
    const [selectedCard, setSelectedCard] = useState(null);
    // the checked btns
    const [isChecked1,setIschecked1] = useState(false);
    const [isChecked2,setIschecked2] = useState(false);
    const [isChecked3,setIschecked3] = useState(false);
    //the last checked btns
    // const [selectedCard,setSelectedCard] = useState(null);
    



  const [value, setValue] = useState([0, 100]);

  const handleChange = (event,  newValue) => {
    setValue(newValue);
  };




    const thedisplayandsearch = products.filter((aproduct)=>{
        if (aproduct !== null) {

            if(category==="all" && isChecked1 === false && isChecked2 === false && isChecked3 === false){
                return  aproduct.name.toLowerCase().includes(search.toLowerCase())
                
            }
               

        }
        if( category === "Tops"|| isChecked1===true ){
            
            if (aproduct.category ==="Tops" ) {

                return  aproduct.name.toLowerCase().includes(search.toLowerCase())
            }
               
                
        
    


    } if(category === "Bottoms" || isChecked2===true){
        if (aproduct.category === "Bottoms" ) {

            return  aproduct.name.toLowerCase().includes(search.toLowerCase())
        }
            
      
                
            
        }
    
        
         if(category === "Outerwear" || isChecked3 === true){
            if (aproduct.category === "Outerwear" ) {
                return  aproduct.name.toLowerCase().includes(search.toLowerCase())

            }
            
            
        }
    
        return false
    
    
})





    return (

        <section className="thefirstcontainerintheproductspage">
             <div className="thefilterbar">
      <div className="theboxoftheiconandthesearch"><CiSearch className="icon"/> <input type="search" value={search} onChange={(evnt)=>Setsearch(evnt.target.value)} className="searchinpt" placeholder="Search your favorite......" />
</div>        <select name="" id="" value={category} onChange={(event)=>setCategory(event.target.value)} className="theselectinpt">
        <option value="all">select categroy</option>
        <option value="Tops">Tops</option>
        <option value="Bottoms">Bottoms</option>
        <option value="Outerwear">Outerwear</option>
        
       </select><br />
        
        <div className="thedivofthecheckboxes"><input type="checkbox" checked={isChecked1} onChange={(event)=>setIschecked1(event.target.checked)} />
        <label htmlFor="" >Tops</label></div>

      <div className="thedivofthecheckboxes">  <input type="checkbox" checked={isChecked2} onChange={(event)=>setIschecked2(event.target.checked)}/>
        <label htmlFor="" >Bottoms</label></div>

        <div className="thedivofthecheckboxes"><input type="checkbox"  checked={isChecked3} onChange={(event)=>setIschecked3(event.target.checked)} />
        <label htmlFor="" >Outerw</label></div>
        

 

        


        <label htmlFor="">Price range</label>
        

        <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>

<div className="thedivoftheslider">
    <p>The Ranger : </p>
     <div className="thedivoftheslider">
              <Slider className="theslider"
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
       
      />
        </div>
</div>
       
    

     </div>
       
        

            <div className="theproductsConta">
                {
                    thedisplayandsearch.map(item =>(   
                        <div className="cardofProductspage" key={item.id}>
                            <div className="theimagebox">
                                <img className="theimage" src={item.image} alt="" />

                            </div>
                            <div className="thetext">
                                <h2 >Name : {item.name}</h2>
                                <div className="FaStar"> <FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                                <h2>Price : {item.price} MAD</h2>
                                <h2>category : {item.category}</h2>



                                {/* this is the ADD BUTTON */}
                                <button className="theaddcardofwidad"
                                    onClick={() => {
                                        const existingProduct = cart.find(
                                            (product) => product.id === item.id);
                                            if (existingProduct) {
                                                setCart((currentCart) =>
                                                    currentCart.map((product) =>
                                                        product.id === item.id
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
                                                { ...item, quantity: 1 }
                                            ]);

                                        }
                                    }}
                                >
                                    Add to Cart
                                </button>



                            <button className="theguy"> <Link className="thehero" to={`/Products/${item.id}`}>view details</Link>  </button>
                                {/* <button className="theguy" > <Link to={`/item/${item.id}`}>view details</Link>  </button> */}
                            </div>

                        </div>
                    )  )
}
  </div>
                </section>
                )}


export default Showdetails