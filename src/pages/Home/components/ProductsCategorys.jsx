import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/MyContext';
import testPIC from '../../../assets/img/testPIC.png'
import './ProductsCategorys.css';
function ProductsCategorySection() {
    const[products] = useContext(MyContext)
    console.log(products);
    const [categorys,setcategorys]= useState([])
     products.forEach(element => {
        if(!categorys.includes(element.categoy)){
            setcategorys([...categorys,element.categoy])
        }
    });
    console.log(categorys);
    
    return(
        <>
        <section className='CtegorySection'>
            <p className='CategoryPara1'>Categorys</p>
            <div className='CtegorySectionDIV'>
                {categorys.map((e)=>(
                <div className='categorySectionDivCard' key={e}>
                    <div>
                        <img src={testPIC} alt="" />
                    </div>
                    <p className='categorySectionDivCardPara1'>{e}</p>
                </div>

            ))}
            </div>
            
        </section>
        </>
    )
}
export default ProductsCategorySection;