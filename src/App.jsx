// /** ============================ start besmillah ================================*/
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import PageHeader from './layouts/Header';
import PageFooter from './layouts/Footer';
import AboutPage from './pages/About/About';
import ErrorPage from './pages/Error/Error';
import { MyProvider } from './utils/MyContext';
import CartSidebar from './components/CartSidebar';
import Checkout from './components/checkout';
import './App.css';

import Productspage from './pages/Products.jsx/ProductsPage';

function App() {
  return (
    <>
      <MyProvider>
        <PageHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Products' element={<Productspage />} />
          <Route path="/cartSidebar" element={<CartSidebar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        {/* <Productspage /> */}
        <PageFooter />
      </MyProvider>
    </>
  );
}

export default App;
