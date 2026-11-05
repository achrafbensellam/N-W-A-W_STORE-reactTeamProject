import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/MyContext';
// import testPIC from '../../../assets/img/testPIC.png'
import { Link } from 'react-router-dom';
import './ProductsCategorys.css';
function ProductsCategorySection() {
    const[products, setProducts, cart, setCart, nawfalCard, setNawfalCard, search, Setsearch,category, setCategory] = useContext(MyContext)
    console.log(products);
    const [categorys,setcategorys]= useState([])
     products.forEach(element => {
        if(!categorys.includes(element.category) ){
            setcategorys([...categorys,element.category])
        }
    });
    console.log(categorys);
 
    let catImages= products.map((e)=>(e.image))
    // console.log(catImages);
    let getCATEGORY = (param)=>{
        setCategory(param)
        
    }
    
    return(
        <>
        <section className='CtegorySection'>
            <p className='CategoryPara1'>Categorys</p>
            <div className='CtegorySectionDIV'>
                {categorys.map((e)=>(
                <Link to='/Products' onClick={()=>getCATEGORY(e)} className='categorySectionDivCard' key={e}>
                    <div>
                        <img className='CategoryImage' src={catImages} alt="" />
                    </div>
                    <p className='categorySectionDivCardPara1'>{e}</p>
                </Link>

            ))}
            </div>
            
        </section>
        </>
    )
}
export default ProductsCategorySection;