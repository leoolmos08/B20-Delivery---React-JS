import './App.css';
import NavBar from './components/NavBar';
import Delivery from './components/Delivery';
import ToppingsContainer from './components/ToppingsContainer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import { getProductsApi } from "./api/product"
import CartContextProvider from './context/CartContext';

function App() {

  const [products, setProducts] = useState(null);
  useEffect(() => {
    getProductsApi()
        .then(response => setProducts(response))
        .catch(err => console.log(err));
}, []);
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Delivery products={products}/>}/>
          <Route path='/toppings/:id' element={<ToppingsContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
