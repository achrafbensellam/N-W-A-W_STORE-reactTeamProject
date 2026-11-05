/** ============================ start besmillah ================================*/
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import HeaderPage from './layouts/Header';
import PageFooter from './layouts/Footer';
import AboutPage from './pages/About/About';
import ErrorPage from './pages/Error/Error';
import AdminDashbord from './pages/admin/admin';
function App() {
  return (
    <>
    <HeaderPage/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    <Route path='/admin' element={<AdminDashbord/>}/>
    </Routes>
    <PageFooter/>
    </>
  );
}

export default App;
