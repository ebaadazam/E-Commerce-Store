import axios from "axios"

// We will provide the base url on which we are running our api
export const API_BASE_URL = 'http://localhost:8080'

const jwt = localStorage.getItem("jwt")

// It will be used in Action.js
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Authorization":`Bearer ${jwt}`,
        "Content-Type": "application/json"
        
    }
})