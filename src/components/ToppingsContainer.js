import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getProductApi } from '../api/product';
import Toppings from './Toppings';

export default function ToppingsContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    
 
    useEffect(() => {
        getProductApi(id)
            .then(response => setProduct(response))
            .catch(err => console.log(err));
    }, []);

    console.log(product);
    
  return (
    <div className='toppingsContainer'>
    <Toppings item={product}  />
    </div>
  )
}
