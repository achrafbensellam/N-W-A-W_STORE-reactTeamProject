
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../utils/MyContext';
import './CartSidebar.css';

function CartSidebar({ isOpen, onClose }) {

    
    const [products, setProducts, cart, setCart] =
        useContext(MyContext);

    const navigate = useNavigate();

    // !حساب عدد المنتجات
    const cartCount = cart.reduce(
        (total, item) => total + Number(item.quantity), 0
    );

    // !حساب مجموع الأسعار
    const subtotal = cart.reduce(
        (total, item) =>
            total + Number(item.price) * Number(item.quantity), 0
    );

    // !زيادة الكمية
    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Number(item.quantity) + 1 }
                    : item));
    };

    // !إنقاص الكمية
    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Number(item.quantity) - 1 }
                    : item
            ).filter((item) => item.quantity > 0));
    };

    // !حذف منتج
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // !إفراغ السلة
    const clearCart = () => {
        setCart([]);
    };

    // !الانتقال إلى Checkout
    const goToCheckout = () => {
        onClose();
        navigate('/checkout');
    };

    return (
        <>
            {isOpen && (
                <div className="cart-overlay" onClick={onClose}>

                    <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
                        <div className="sidebar-header">
                            <h2>Shopping Cart ({cartCount})</h2>

                            <button type="button" className="sidebar-close" onClick={onClose} > &times;</button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="sidebar-empty">
                                <h3>Your cart is empty</h3>
                                <button onClick={onClose}>Continue Shopping</button>
                            </div>
                            ) : (
                            <>
                                <div className="sidebar-products">
                                    {cart.map((item) => (
                                        <div className="sidebar-product" key={item.id}>
                                            <img src={item.image} alt={item.name}/>
                                            <div className="sidebar-product-info">
                                                <h3>{item.name}</h3>
                                                <p> ${Number(item.price).toFixed(2)} </p>

                                                <div className="sidebar-quantity">

                                                    <button type="button" onClick={() => decreaseQuantity(item.id)}>
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button type="button" onClick={() => increaseQuantity(item.id)} >
                                                        +
                                                    </button>

                                                </div>

                                                <button type="button" className="sidebar-remove" onClick={() => removeItem(item.id)}>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <div className="sidebar-footer">

                                    <button className="sidebar-clear" onClick={clearCart}>
                                        Clear Cart
                                    </button>

                                    <div className="sidebar-total">
                                        <strong>Subtotal</strong>
                                        <strong>${subtotal.toFixed(2)}</strong>
                                    </div>

                                    <button className="sidebar-checkout" onClick={goToCheckout}>
                                     Checkout
                                    </button>

                                    <button className="sidebar-continue" onClick={onClose}>
                                        Continue Shopping
                                    </button>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            )}
        </>
    );
}

export default CartSidebar;


