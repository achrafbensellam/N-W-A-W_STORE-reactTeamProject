/** ============================ start besmillah ================================*/
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.png'
function PageFooter() {
  let  goToHero=()=>{
          document.querySelector('.HeroSection').scrollIntoView({
                    behavior: 'smooth'
                });
    }
  let  goToCategory=()=>{
          document.querySelector('.CtegorySection').scrollIntoView({
                    behavior: 'smooth'
                });
    }
  let  goTofeatured=()=>{
          document.querySelector('.feturedPRODUCTSsection').scrollIntoView({
                    behavior: 'smooth'
                });
    }
  let  goToSpecial=()=>{
          document.querySelector('.SpecialOffersSection').scrollIntoView({
                    behavior: 'smooth'
                });
    }
    return (
        <>
            <footer className='theFooter'>
                <div className='theFooterdiv1'>
                    <div className='theFooterdiv2'>
                        <div className='logoFooterDiv'>
                            <img className='logoFooter' src={logo} alt="" />
                        </div>
                        <p className='theFooterdiv2para1'>Presented by: Nawfal chiddi,Widad al faroky, Acharf bensellam , Walid Taghzaoui</p>
                        <div>
                            <p className='theFooterdiv2para2'>Follow Us</p>
                            <div className='FooterMediaIconsDiv'>
                                <FontAwesomeIcon className='FooterMediaIcons' icon={faFacebook} />
                                <FontAwesomeIcon className='FooterMediaIcons' icon={faInstagram} />
                                <FontAwesomeIcon className='FooterMediaIcons' icon={faWhatsapp} />
                                <FontAwesomeIcon className='FooterMediaIcons' icon={faYoutube} />
                                <FontAwesomeIcon className='FooterMediaIcons' icon={faDiscord} />
                                <FontAwesomeIcon className='FooterMediaIcons' icon={faGithub} />
                            </div>
                        </div>
                    </div>
                    <div className='theFooterdiv3'>
                        <div className='theFooterdiv3Para1'>
                            <p className='theFooterdiv3Para3'>Home PAge</p>
                            <p className='foterLinks' onClick={goToHero}>hero section</p>
                            <p className='foterLinks' onClick={goToCategory}>categorys</p>
                            <p className='foterLinks' onClick={goTofeatured}>featured products</p>
                            <p className='foterLinks' onClick={goToSpecial}>promotion</p>
                        </div>
                        <div className='theFooterdiv3Para2'>
                            <p className='theFooterdiv3Para3'>Other</p>
                            <Link className='foterLinks2' to='/'>home</Link>
                            <Link className='foterLinks2' to='/Product'>products</Link>
                            <Link className='foterLinks2' to='/Order'>order</Link>
                       
                            
                        </div>
                    </div>
                </div>
                <div className='theFooterdiv4'>
                    <p>Coding School 2026</p>       
                    <p>&copy;MolenGeek Al Hociema</p>
                </div>
            </footer>
        </>
    )
}
export default PageFooter;
