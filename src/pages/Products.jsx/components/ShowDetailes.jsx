// import React, { useContext, useState } from "react";
// import { MyContext } from "../../../utils/MyContext";


// function Showdetail() {

//     const [products,seetProducts] = useContext(MyContext)

// const [selectedCard,setSelectedCard] = useState(null);

// if(selectedCard !== null)
// {
//     return(
//         <div className="thesectionindetails" >
//             <div className="theimageindetails">
//         <img src={selectedCard.image} alt="" />

//             </div>


// <div className="thetextindetails">
//     <h1>{selectedCard.name}</h1>


//     <p>{selectedCard.category}</p>
//     <p>{selectedCard.price}</p>
//     <p>{selectedCard.description}</p>
// </div>

// <button className="theadd">Add </button>
//         </div>
  
//     )
// }
// else{
//     return(
//        <section className="">

//         {
//             products.map(item=>
//                 <div key={item.id}>

//                     <div className="">
//                         <img className="" src={item.image} alt="" />
//                     </div>

//                     <div>
//                         <p>{item.name}</p>
//                         <p>{item.category}</p>
//                         <p>{item.description}</p>
//                     </div>

//                 </div>
//             )
//         }
//        </section>
//     )
// }

// }