import { useState, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { toast } from 'react-toastify';

import Navbar from '../Components/Navbar';
import SignUp from '../Components/SignUp';
import Sidebar from '../Components/Sidebar';
import UserSidebar from '../Components/UserSidebar';
import CartSidebar from '../Components/CartSidebar';
import ReviewCarousel from '../Components/ReviewCarousel';
import ShopMediNova from '../Components/ShopMediNova';
import Admin from '../Components/Admin';
import RestBody from '../Components/RestBody';
import Footer from '../Components/Footer';
import PrivateRoute from '../Components/PrivateRoute';
import OrderHistorySidebar from '../Components/OrderHistorySidebar';

function CompleteRoutes() {
    const [showPopup, setShowPopup] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userSidebarOpen, setUserSidebarOpen] = useState(false);
    const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);

    const shopRef = useRef(null);
    const subscriptionRef = useRef(null);
    const contactRef = useRef(null);

    const openSidebar = () => setSidebarOpen(true);
    const closeSidebar = () => setSidebarOpen(false);

    const openUserSidebar = () => setUserSidebarOpen(true);
    const closeUserSidebar = () => setUserSidebarOpen(false);

    const openCartSidebar = () => setCartSidebarOpen(true);
    const closeCartSidebar = () => setCartSidebarOpen(false);

    const openOrderHistory = () => setOrderHistoryOpen(true);
    const closeOrderHistory = () => setOrderHistoryOpen(false);

    const handleSignupClick = () => {
        setShowPopup(true);
    };

    const handleShopClick = () => {
        setSidebarOpen(false);
        setTimeout(() => {
            shopRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleSubsriptionClick = () => {
        setSidebarOpen(false);
        setTimeout(() => {
            subscriptionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleContactClick = () => {
        setSidebarOpen(false);
        setTimeout(() => {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleSignupClose = () => {
        setShowPopup(false);
    };

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const exists = prevItems.find((item) => item._id === product._id);
            if (exists) {
                toast.success(`${product.name} quantity updated in cart!`);
                return prevItems.map((item) =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            toast.success(`${product.name} added to cart!`);
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== productId));
        toast.info('Product removed from cart.');
    };

    const handleIncrementQty = async (productId) => {
        const product = cartItems.find((item) => item._id === productId);
        if (!product) return;

        try {
            const res = await fetch(`http://localhost:5000/api/checkstock/${productId}`);
            const data = await res.json();

            if (product.quantity < data.available) {
                setCartItems((prev) =>
                    prev.map((item) =>
                        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
                    )
                );
            } else {
                toast.warn('No more stock available');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error checking stock');
        }
    };

    const handleDecrementQty = (productId) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item._id === productId && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return (
        <>
            <div>
                <Navbar
                    onMenuClick={openSidebar}
                    onUserClick={openUserSidebar}
                    onCartClick={openCartSidebar}
                    onOrderClick={openOrderHistory}
                />
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={closeSidebar}
                    onUserClick={openUserSidebar}
                    shopOpen={handleShopClick}
                    subscriptioOpen={handleSubsriptionClick}
                    contactOpen={handleContactClick}
                />
                <UserSidebar isOpen={userSidebarOpen}
                    onClose={closeUserSidebar}
                    onSignupClick={handleSignupClick}
                />
                <SignUp
                    isOpen={showPopup}
                    onClose={handleSignupClose}
                />
                <CartSidebar
                    isOpen={cartSidebarOpen}
                    onClose={closeCartSidebar}
                    cartItems={cartItems}
                    onRemoveFromCart={handleRemoveFromCart}
                    onIncrementQty={handleIncrementQty}
                    onDecrementQty={handleDecrementQty}
                    setCartItems={setCartItems}
                />
                <OrderHistorySidebar
                    isOpen={orderHistoryOpen}
                    onClose={closeOrderHistory}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <ReviewCarousel />
                                <div ref={shopRef}>
                                    <ShopMediNova onAddToCart={handleAddToCart} />
                                </div>
                                <div ref={subscriptionRef}>
                                    <RestBody />
                                </div>
                                <div ref={contactRef}>
                                    <Footer onUserClick={openUserSidebar} shopOpen={handleShopClick} subscriptioOpen={handleSubsriptionClick} contactOpen={handleContactClick} />
                                </div>
                            </>
                        }
                    />
                    <Route path="/admin" element={<PrivateRoute element={Admin} />} />
                </Routes>
            </div>
        </>
    )
};

export default CompleteRoutes;