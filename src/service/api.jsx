import axios from 'axios'

function apiUserGallery() {
    const apiGallery = axios.create( {
        baseURL: "http://192.168.0.21:3002/"
    })

    return apiGallery
}

export const api = apiUserGallery()