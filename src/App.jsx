/** ============================ start besmillah ================================*/
import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import PageHeader from './layouts/Header';
import PageFooter from './layouts/Footer';
import AboutPage from './pages/About/About';
import ErrorPage from './pages/Error/Error';
import { MyProvider } from './utils/MyContext';
import Showdetail from './pages/Products.jsx/components/ShowDetailes';
import Productspage from './pages/Products.jsx/ProductsPage';

function App() {
  return (
    <>
      <MyProvider>
        <PageHeader />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<AboutPage />} />
           <Route path='/Productspage' element={<Productspage/>}/>
           <Route path='/Productspag/:id' element={<Showdetail/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
       
        <PageFooter />
      </MyProvider>
    </>
  );
}

export default App;