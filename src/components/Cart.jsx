
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MyContext } from '../utils/MyContext';
import './cart.css';

function Cart() {
    const { cart, setCart } = useContext(MyContext);
    const navigate = useNavigate();

    // !زيادة كمية المنتج
    const increaseQuantity = (id) => {
        setCart((currentCart) =>
            currentCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // !إنقاص كمية المنتج
    const decreaseQuantity = (id) => {
        setCart((currentCart) =>
            currentCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // !حذف منتج من السلة
    const removeItem = (id) => {
        setCart((currentCart) =>
            currentCart.filter((item) => item.id !== id)
        );
    };

    // !إفراغ السلة بالكامل
    const clearCart = () => {
        setCart([]);
    };

    // !حساب مجموع المنتجات
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    // !تكلفة الشحن
    const shipping = cart.length > 0 ? 5 : 0;

    // !المجموع النهائي
    const total = subtotal + shipping;

    return (
        <main className="cart-page">
            <div className="cart-heading">
                <h1>Shopping Cart</h1>
                <Link to="/">Continue Shopping</Link>
            </div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <p>Looks like you haven't added anything yet.</p>

                    <button onClick={() => navigate('/')}>
                        Explore Products
                    </button>
                </div>
            ) : (
                <div className="cart-layout">

                    {/* قائمة المنتجات */}
                    <section className="cart-items">
                        {cart.map((item) => (
                            <article className="cart-item" key={item.id}>

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-product-image"
                                />

                                <div className="cart-product-info">
                                    <h3>{item.name}</h3>

                                    <p className="cart-product-price">
                                        ${Number(item.price).toFixed(2)}
                                    </p>

                                    <div className="quantity-control">
                                        <button
                                            type="button"
                                            onClick={() => decreaseQuantity(item.id)}
                                            aria-label="Decrease quantity"
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            type="button"
                                            onClick={() => increaseQuantity(item.id)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="remove-item"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>

                            </article>
                        ))}

                        <button
                            type="button"
                            className="clear-cart"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                    </section>

                    {/* ملخص الطلب */}
                    <aside className="cart-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>

                        <div className="summary-total">
                            <strong>Total</strong>
                            <strong>${total.toFixed(2)}</strong>
                        </div>

                        <button
                            type="button"
                            className="checkout-button"
                            onClick={() => navigate('/checkout')}
                        >
                            Proceed to Checkout
                        </button>
                    </aside>

                </div>
            )}
        </main>
    );
}

export default Cart;
