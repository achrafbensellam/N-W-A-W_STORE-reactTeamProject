/** ============================ start besmillah ================================*/
import './Header.css'
import { Link } from 'react-router-dom';
import headerLogo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../utils/MyContext';
import CartSidebar from '../components/CartSidebar';
function PageHeader() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts, cart, setCart] = useContext(MyContext);
    const [burger, setBurger] = useState(false);
    const burgerState = () => {
        if (burger === false) {
            setBurger(true)
        } else {
            setBurger(false)
        }
    }

    return (
        <>
            <header className='theHeader'>
                <div className='divLogoPic'>
                    <img className='logoPic' src={headerLogo} alt="" />
                </div>
                <nav className='NavBar'>
                    <Link className='headerLinks' to='/'>Home</Link>
                    <Link className='headerLinks' to='/Products'>Products</Link>
                    <Link className='headerLinks' to='/checkout'>Checkout</Link>
                </nav>
                <FontAwesomeIcon onClick={burgerState} className='berguMenu' icon={faBars} />
                <nav className={burger ? 'NavBar3' : 'NavBar2'}>
                    <Link className={burger ? 'headerLinks3' : 'headerLinks2'} to='/'>Home</Link>
                    <Link className={burger ? 'headerLinks3' : 'headerLinks2'} to='/Products'>Products</Link>
                    <Link className={burger ? 'headerLinks3' : 'headerLinks2'} to='/Order'>Order</Link>
                </nav>
                <div className='searchCartDiv'>
                    <div>
                        <input className='headerSearchInput' type="text" />
                    </div>
                    <div className='HeaderCartIconDiv'>

                        <button type="button" onClick={() => setIsCartOpen(true)} className="cart-icon-button">
                            <FontAwesomeIcon className='CartHeaderIcon' icon={faCartShopping} />
                        </button>
                        <p className='HeadercartCounter'>
                            {cart.reduce((total, item) => total + Number(item.quantity || 0), 0)}
                        </p>
                    </div>
                </div>
            </header>
            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
        </>
    )
}
export default PageHeader;
