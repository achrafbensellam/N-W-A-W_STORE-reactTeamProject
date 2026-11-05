import './heroSection.css'
import { Link } from 'react-router-dom';
function HeroSection() { 
    return (
        <>
            <section className='HeroSection'>
                <p className='herosectionPara2'><span className='logoLetters'>-N</span>W<span className='logoLetters'>A</span>W sotre</p>
                <p className='herosectionPara1'>ELEGANCE IN EVERY DETAIL</p>
                <p className='herosectionPara3'>Discover timeless styles and premium tailoring
                    designed for the modern wardrobe.</p>
                <Link to= '/Products' className='herosectionBTN'>EXPLORE COLLECTION</Link>
            </section>
        </>
    )
}
export default HeroSection;