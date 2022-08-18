import { API_URL } from "../utils/constants";

export async function getCouponsApi(){
    try {
        const url = `${API_URL}/coupons`
        const response = await fetch(url);
        const result = response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null 
    }
}