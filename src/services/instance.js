import axios from 'axios'

export const instance = axios.create({
    baseURL: 'http://demo-api.vsdev.space/api'
})
