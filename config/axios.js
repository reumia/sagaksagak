import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 10000,
  withCredentials: true
})
