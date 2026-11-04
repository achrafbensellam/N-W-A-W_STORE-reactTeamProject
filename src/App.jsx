// /** ============================ start besmillah ================================*/
// import './App.css';
// // import { Route, Routes } from 'react-router-dom';
// // import HomePage from './pages/Home/Home';
// // import HeaderPage from './layouts/Header';
// // import PageFooter from './layouts/Footer';
// // import AboutPage from './pages/About/About';
// // import ErrorPage from './pages/Error/Error';
// // import { MyProvider } from './utils/MyContext';
// import Cart from './components/cart';
// function App() {
//   return (
//     <>

//          <Cart />

//     </>
//   );
// }

// export default App;

import './App.css';
// import { Route, Routes } from 'react-router-dom';



import { MyProvider } from './utils/MyContext';

import Cart from './components/cart';
// import Checkout from './components/checkout';

function App() {
  return (
    <MyProvider>
  
    <Cart />
      
    </MyProvider>
  );
}

export default App;

