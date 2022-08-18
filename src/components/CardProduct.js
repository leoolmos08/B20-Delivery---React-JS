import React from 'react'
import { API_URL } from '../utils/constants'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardProduct({ key, id, image, price, title, description }){
  return(
      <div key={key}>
        <div className='containerProduct'>
          <div className='product' id={id}>
            <img  className='image' src={`${API_URL}${image}`}/>
            <div className='description'>
              <p className='title'>{title}</p>
              <p className='descriptionText'>{description}</p>
              <div className='priceButton'>
                <p className='price'>$ {price}</p>
                <Link to={`/toppings/${id}`}>
                  <Button className='selectButton' variant='outline-warning'>ELEGIR</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}