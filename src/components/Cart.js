import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ProductList from './ProductList';

const Cart = () => {
    const cartContext = useContext(CartContext)
    const {cartList} = cartContext
    console.log(cartList);

  return (
    <>
    <ProductList products={cartList}/>
    </>
  )
}
export default Cart;