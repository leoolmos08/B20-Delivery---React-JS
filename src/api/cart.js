import AsyncStorage from "@react-native-async-storage/async-storage";
import { map, filter } from "lodash"
import {API_URL, CART} from "../utils/constants"

export async function getProductCartApi(){
    try {
        const cart = await AsyncStorage.getItem(CART);
        if(!cart) return [];
        return JSON.parse(cart);
    } catch (error) {
        return null
    }
}

export async function addProductCartApi(idProduct, toppings){
     try {
        const cart = await getProductCartApi();
        if(!cart) {
            throw "Error al obtener productos del carrito";
        }else{
            cart.push({
                idProduct,
                toppings
            })
        }

        await AsyncStorage.setItem(CART, JSON.stringify(cart));
        return true
     } catch (error) {
        return false
     }
}

export async function deleteProductCartApi(idProduct){
    try {
        const cart = await getProductCartApi();
        const newCart = filter(cart, (product)=>{
            return product.idProduct !== idProduct
        })
        await AsyncStorage.setItem(CART, JSON.stringify(newCart));
        return true 
    } catch (error) {
        return null
    }
}

export async function increaseProductCartApi(idProduct){
    try {
        const cart = await getProductCartApi();
        map(cart, (product)=>{
            if(product.idProduct === idProduct ){
                return (product.quantity += 1)
            }
        })
        await AsyncStorage.setItem(CART, JSON.stringify(cart))
        return true
    } catch (error) {
        return null
    }
}

export async function paymentCartApi(auth, burgers, address) {
    try {
      const addressShipping = address;
      delete addressShipping.user;
      delete addressShipping.createdAt;
  
      const url = `${API_URL}/orders`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          burgers,
          idUser: auth.idUser,
          addressShipping,
        }),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

export async function deleteCartApi() {
    try {
      await AsyncStorage.removeItem(CART);
      return true;
    } catch (e) {
      return null;
    }
  }