/** ============================ start besmillah ================================*/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import HeaderPage from './layouts/Header';
import PageFooter from './layouts/Footer';
import AboutPage from './pages/About/About';
import ErrorPage from './pages/Error/Error';

import { TheProvider } from './pages/Products.jsx/components/Products';
import ThepageProducts from './pages/Products.jsx/ProductsPage';

function App() {
  return (
    <>
      <TheProvider> 
        <HeaderPage/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<AboutPage/>}/>
          <Route path='/products' element={<ThepageProducts/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <PageFooter/>
      </TheProvider>
    </>
  );
}

export default App;