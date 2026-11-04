import { useContext } from 'react';
import './specialOffers.css';
import { MyContext } from '../../../utils/MyContext';
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
function SpecialOffer() {
    const [products] = useContext(MyContext);
    return (
        <>
            <section className='SpecialOffersSection'>
                <p className='SpecialOffersSectionPara1'>Special Offers</p>
                <div className="theproductsConta2">
                    {
                        products.map(item =>
                            item.discount > 0 &&
                            <div className="card2" key={item.id}>
                                <div className="theimagebox">
                                    <img className="theimage" src={item.image} alt="" />

                                </div>
                                <div className="thetext">
                                    <h2 >Name : {item.name}</h2>
                                    <div className="FaStar"> <FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></div>
                                    <h2>Price : {item.price}</h2>
                                    <h2>category : {item.name}</h2>



                                    {/* this is the ADD BUTTON */}
                                    <button className="theadd">Add </button>
                                    {/* this is the ADD BUTTON */}





                                    <button className="theguy" >
                                        {/* <Link to={`/item/${item.id}`}>view details</Link>   */}
                                    </button>
                                </div>

                            </div>
                        )
                    }

                </div>
            </section>
        </>
    )
}
export default SpecialOffer;