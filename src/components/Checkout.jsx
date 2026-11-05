
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../utils/MyContext';
import './Checkout.css';

function Checkout() {

    const [products, setProducts, cart, setCart] = useContext(MyContext);
    const navigate = useNavigate();

    // !معلومات الزبون
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        notes: ''
    });

    // !حالة تأكيد الطلب
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderTotal, setOrderTotal] = useState(0);

    // !حساب Subtotal
    const subtotal = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
    );

    // !تكلفة الشحن
    const shipping = cart.length > 0 ? 5 : 0;

    // !المجموع النهائي
    const total = subtotal + shipping;

    // !التعامل مع تغيير المعلومات داخل النموذج
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(currentData => ({
            ...currentData,
            [name]: value
        }));
    };

    // !إرسال الطلب
    const handleSubmit = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            return;
        }

        setOrderTotal(total);
        setOrderPlaced(true);
        setCart([]);
    };

    // !شاشة نجاح الطلب
    if (orderPlaced) {
        return (
            <main className="checkout-page">
                <div className="checkout-success">
                    <div className="success-icon">&#10003;</div>
                    <h1>Order Confirmed!</h1>
                    <p>Thank you for your purchase. Your order has been placed successfully. </p>

                    <div className="success-total">
                        <span>Order Total</span>
                        <strong>${orderTotal.toFixed(2)}</strong>
                    </div>

                    <button type="button"
                        onClick={() => navigate('/Products')}>
                        Continue Shopping
                    </button>
                </div>
            </main>
        );
    }

    // !إذا كانت السلة فارغة
    if (cart.length === 0) {
        return (
            <main className="checkout-page">
                <div className="checkout-empty">
                    <h2>Your cart is empty</h2>
                    <p>Please add products to your cart before checkout.</p>

                    <button type="button"
                        onClick={() => navigate('/Products')}>
                        Explore Products
                    </button>

                </div>
            </main>
        );
    }

    return (
        <main className="checkout-page">

            <div className="checkout-container">
                <div className="checkout-heading">
                    <h1>Checkout</h1>
                    <p>Complete your information to place your order.</p>
                </div>

                <div className="checkout-layout">

                    {/* Customer Information */}
                    <section className="checkout-form-section">
                        <h2>Shipping Information</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="checkout-form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="checkout-form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="checkout-form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="checkout-form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Street, building, apartment..."
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="checkout-form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="Enter your city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="checkout-form-group">
                                <label>Postal Code</label>
                                <input
                                    type="number"
                                    id="postalCode"
                                    name="postalCode"
                                    placeholder="Enter your postal code"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="checkout-form-group">
                                <label>Order Notes (Optional)</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    placeholder="Additional information..."
                                    value={formData.notes}
                                    onChange={handleChange}
                                />

                            </div>

                            {/* Payment Method */}
                            <div className="payment-section">

                                <h2>Payment Method</h2>
                                <label className="payment-option">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cash"
                                    />
                                    <span>Cash on Delivery</span>
                                </label>
                                <p>Pay when your order arrives.</p>
                            </div>

                            <button type="submit" className="place-order-button"
                            >
                                Place Order
                            </button>

                        </form>
                    </section>

                    {/* Order Summary */}
                    <aside className="checkout-summary">
                        <h2>Order Summary</h2>
                        <div className="checkout-summary-products">
                            {cart.map(item => (

                                <div className="checkout-product" key={item.id}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="checkout-product-info">
                                        <h3>{item.name}</h3>
                                        <p>Quantity: {item.quantity} </p>
                                        <strong>${(Number(item.price) * item.quantity).toFixed(2)}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="checkout-summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>

                        <div className="checkout-summary-row">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>

                        <div className="checkout-summary-total">
                            <strong>Total</strong>
                            <strong>${total.toFixed(2)}</strong>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

export default Checkout;
