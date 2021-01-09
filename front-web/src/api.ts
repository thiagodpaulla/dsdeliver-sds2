import axios from "axios"

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
const API_URL = 'http://localhost:8080'
export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}