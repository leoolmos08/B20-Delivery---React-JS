import {API_URL} from "../utils/constants"

export async function getLastProductsApi(limit = 30){
    try {
        const url = `${API_URL}/products?_limit=${limit}&_sort=createdAt:DESC`;
        const response = await fetch(url)
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function getProductApi(idProduct){
    try {
        const url = `${API_URL}/products/${idProduct}`
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (error) {
        return null 
    }
}

export async function getProductsApi(){
    try {
        const url = `${API_URL}/products`
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null 
    }
}