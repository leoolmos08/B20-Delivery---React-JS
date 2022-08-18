import React from 'react'
import CardProduct from './CardProduct';
import LinearIndeterminate from "./LinearIndeterminate"
import { Box } from '@mui/material';

export default function ProductList({products}) {
  return(
    <Box className='container'>
       {products.length >0? 
        products.map(item=>
        <CardProduct 
          key={item._id}
          id= {item._id}
          title={item.title}
          image={item.main_image.url}
          price={item.price}
          description={item.description}
          />
          ) 
        :<LinearIndeterminate />
        }
    </Box>
);
}

