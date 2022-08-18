import { API_URL } from "../utils/constants"

export async function getBannersApi(){
    try {
        const url = `${API_URL}/home-banners?_sort=position:DESC`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function getCouponsBannersApi(){
    try {
        const url = `${API_URL}/coupons-banners?_sort=position:DESC`
        const response = await fetch(url)
        const result = response.json()
        return result;
    } catch (error) {
        console.log(error);
        return null
    }
}