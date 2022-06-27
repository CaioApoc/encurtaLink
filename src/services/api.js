//minha chave eb235962a3132bd101fd4179a0ca13fccbc79959

import axios from "axios"

export const key = "eb235962a3132bd101fd4179a0ca13fccbc79959";

const api = axios.create({
    baseURL:"https://api-ssl.bitly.com/v4",
    headers:{"Authorization":`Bearer ${key}`}
})

export default api;