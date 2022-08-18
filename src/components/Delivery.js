import React,{useEffect, useState, useCallback} from 'react'
import ProductList from './ProductList'
import { getProductsApi } from "../api/product"


export default function Delivery({products}) { 

  return (
    <>
    <ProductList products={products} />
    </>
  )
}
