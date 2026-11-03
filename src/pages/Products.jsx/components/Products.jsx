// import React, { createContext, useState } from "react";

// export const Thecontext = createContext();

// export const TheProvider = ({ children }) => { 
//     const [products, setProducts] = useState([
//         {
//             id: 0,
//             name: "Hermes bag",
//             price: 21000,
//             image: "",
//             category: "shoe"
//         },
//         {
//             id: 1,
//             name: "Hermes bag",
//             price: 21000,
//             image: "",
//             category: "shoe"
//         },
//         {
//             id: 2,
//             name: "Hermes bag",
//             price: 21000,
//             image: "",
//             category: "shoe"
//         }
//     ]);


//     return (
//         <Thecontext.Provider value={{ products, setProducts }}>
//          {children}
//         </Thecontext.Provider>
//     );
// };