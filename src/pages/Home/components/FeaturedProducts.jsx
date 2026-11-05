import { useContext } from 'react';
import './FeaturedProducts.css'
import { MyContext } from '../../../utils/MyContext';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
// !
import { useState } from 'react';
import { Link } from 'react-router-dom';
// !
function FeaturedProductsCards() {
    const [category, setCategory] = useState("all")
    const [search, Setsearch] = useState('');
    const [products, setProducts, cart, setCart,nawfalCard,setNawfalCard] = useContext(MyContext);

    // const [selectedCard, setSelectedCard] = useState(null);
    // the checked btns
    const [isChecked1, setIschecked1] = useState(false);
    const [isChecked2, setIschecked2] = useState(false);
    const [isChecked3, setIschecked3] = useState(false);
    //the last checked btns
    // const [selectedCard,setSelectedCard] = useState(null);




    // const [value, setValue] = useState([0, 100]);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
const thedisplayandsearch = products.filter((aproduct) => {
        if (aproduct !== null) {

            if (category === "all" && isChecked1 === false && isChecked2 === false && isChecked3 === false) {
                return aproduct.name.toLowerCase().includes(search.toLowerCase())

            }


        }
        if (category === "Tops" || isChecked1 === true) {

            if (aproduct.category === "Tops") {

                return aproduct.name.toLowerCase().includes(search.toLowerCase())
            }






        } if (category === "Bottoms" || isChecked2 === true) {
            if (aproduct.category === "Bottoms") {

                return aproduct.name.toLowerCase().includes(search.toLowerCase())
            }




        }


        if (category === "Outerwear" || isChecked3 === true) {
            if (aproduct.category === "Outerwear") {
                return aproduct.name.toLowerCase().includes(search.toLowerCase())

            }


        }
        return false


    })
    return (
        <>
            <section className='feturedPRODUCTSsection'>
                <p className='feturedPRODUCTSsectionPara1'>Featured Products</p>
                {/* <div className="theproductsConta2">
                    {
                        products.map(item =>
                            item.featured === true &&
                            <div className="card2" key={item.id}>
                                <div className="theimagebox">
                                    <img className="theimage" src={item.image} alt="" />

                                </div>
                                <div className="thetext">
                                    <h2 >Name : {item.name}</h2>
                                    <div className="FaStar"> <FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                                    <h2>Price : {item.price}</h2>
                                    <h2>category : {item.name}</h2>



                                    
                                    <button className="theadd">Add </button>
                                    





                                    <button className="theguy" >
                                        
                                    </button>
                                </div>

                            </div>
                        )
                    }

                </div> */}
                 <div className="theproductsConta2">
                {
                    thedisplayandsearch.map(item => (
                        item.featured === true &&
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
                    ))
                }
            </div>
            </section>
        </>
    )
}
export default FeaturedProductsCards;