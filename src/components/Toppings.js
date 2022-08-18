import * as React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from 'react-bootstrap'
import {Link} from "react-router-dom"

export default function Toppings({item}) {
    const cartContext = useContext(CartContext)
    const product = [];
    const {_id, price, title, main_image} = item
    {product.push(_id, price, title, main_image)}
    const toppings = [];

    const [lechuga, setLechuga] = useState(false);
    const [tomate, setTomate] = useState(false);
    const [morada, setMorada] = useState(false);
    const [caramelizada, setCaramelizada] = useState(false);
    const [bacon, setBacon] = useState(false);
    const [pepinos, setPepinos] = useState(false);
    const [mayo20, setMayo20] = useState(false)
    const [ketchup, setKetchup] = useState(false)
    const [mostaza, setMostaza] = useState(false)
    const [salsa20, setSalsa20] = useState(false)
    const [bbq, setBbq] = useState(false)
    const [picante, setPicante] = useState(false)
    const [cheddar, setCheddar] = useState(false)
    const [extraBacon, setExtraBacon] = useState(false)
    const [carne, setCarne] = useState(false)
    const [cheddarPapas, setCheddarPapas] = useState(false)

    {lechuga && toppings.push("Lechuga")}
    {tomate && toppings.push("Tomate")}
    {morada && toppings.push("Ceb Morada")}
    {caramelizada && toppings.push("Ceb Caramelizada")}
    {bacon && toppings.push("Bacon")}
    {pepinos && toppings.push("Pepinos")}
    {mayo20 && toppings.push("Mayo Burger20")}
    {ketchup && toppings.push("Ketchup")}
    {mostaza && toppings.push("Mostaza")}
    {salsa20 && toppings.push("Salsa Burger20")}
    {bbq && toppings.push("Salsa BBQ")}
    {picante && toppings.push("Mayo Picante")}
    {cheddar && toppings.push("Extra cheddar")}
    {extraBacon && toppings.push("Extra Bacon")}
    {carne && toppings.push("Extra carne")}
    {cheddarPapas && toppings.push("Cheddar en papas")}

    {product.push(toppings)}

    console.log(product);
    const onAdd = () => {
        cartContext.addToCart(product);
        resetToppings();
    }
    console.log(cartContext.cartList);
    const resetToppings = ()=>{
        setLechuga(false)
        setTomate(false)
        setMorada(false)
        setCaramelizada(false)
        setBacon(false)
        setPepinos(false)
        setMayo20(false)
        setKetchup(false)
        setMostaza(false)
        setSalsa20(false)
        setBbq(false)
        setPicante(false)
        setCheddar(false)
        setExtraBacon(false)
        setCarne(false)
        setCheddarPapas(false)
      }
  return (
    <>
    <div className='divToppings'>
        <h3>¡Elegí tus toppings preferidos!</h3>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={lechuga} onClick={()=>setLechuga(!lechuga)}/>} label="Lechuga" />
            <FormControlLabel control={<Checkbox checked={tomate} onClick={()=>setTomate(!tomate)}/>} label="Tomate" />
            <FormControlLabel control={<Checkbox checked={morada} onClick={()=>setMorada(!morada)}/>} label="Ceb Morada" />
            <FormControlLabel control={<Checkbox checked={caramelizada} onClick={()=>setCaramelizada(!caramelizada)}/>} label="Ceb Caramelizada" />
            <FormControlLabel control={<Checkbox checked={bacon} onClick={()=>setBacon(!bacon)}/>} label="Bacon" />
            <FormControlLabel control={<Checkbox checked={pepinos} onClick={()=>setPepinos(!pepinos)}/>} label="Pepinos" />
        </FormGroup>
    </div>
    <div className='divToppings'>
        <h3>¿Algún aderezo?</h3>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={mayo20} onClick={()=>setMayo20(!mayo20)}/>} label="Mayo Burgers20" />
            <FormControlLabel control={<Checkbox checked={ketchup} onClick={()=>setKetchup(!ketchup)}/>} label="Ketchup" />
            <FormControlLabel control={<Checkbox checked={mostaza} onClick={()=>setMostaza(!mostaza)}/>} label="Mostaza" />
            <FormControlLabel control={<Checkbox checked={salsa20} onClick={()=>setSalsa20(!salsa20)}/>} label="Salsa Burgers20" />
            <FormControlLabel control={<Checkbox checked={bbq} onClick={()=>setBbq(!bbq)}/>} label="BBQ" />
            <FormControlLabel control={<Checkbox checked={picante} onClick={()=>setPicante(!picante)}/>} label="Mayo Picante" />
        </FormGroup>
    </div>
    <div className='divToppings'>
        <h3>¡Extras!</h3>
        <FormGroup>
            <FormControlLabel control={<Checkbox checked={cheddar} onClick={()=>setCheddar(!cheddar)}/>} label="Extra Cheddar" />
            <FormControlLabel control={<Checkbox checked={extraBacon} onClick={()=>setExtraBacon(!extraBacon)}/>} label="Extra Bacon" />
            <FormControlLabel control={<Checkbox checked={carne} onClick={()=>setCarne(!carne)}/>} label="Extra Carne/cheddar" />
            <FormControlLabel control={<Checkbox checked={cheddarPapas} onClick={()=>setCheddarPapas(!cheddarPapas)}/>} label="Cheddar, bacon y verdeo en tus papas" />
        </FormGroup>
    </div>
    <Button variant="secondary" onClick={onAdd} >AÑADIR AL PEDIDO</Button>
    <Link to="/cart"><Button variant="secondary" >IR AL CARRITO</Button></Link>
    </>
  );
}


          