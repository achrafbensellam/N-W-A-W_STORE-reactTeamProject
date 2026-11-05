/** ============================ start besmillah ================================*/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import PageHeader from './layouts/Header';
import PageFooter from './layouts/Footer';
import AboutPage from './pages/About/About';
import ErrorPage from './pages/Error/Error';
import { MyProvider } from './utils/MyContext';
import Showdetail from './pages/Products.jsx/components/ShowDetailes';
import CartSidebar from './components/CartSidebar';
import AdminDashbord from './pages/admin/admin';
import Checkout from './components/checkout';

import Productspage from './pages/Products.jsx/ProductsPage';

function App() {
  return (
    <>
      <MyProvider>
        <PageHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
           <Route path='/products' element={<Productspage/>}/>
           <Route path='/Products/:id' element={<Showdetail/>}/>
          <Route path="/cartSidebar" element={<CartSidebar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/admin' element={<AdminDashbord />} />
        </Routes>
        
        <PageFooter />
      </MyProvider>
    </>
  );
}

export default App;
