import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd405df8d135e4c13b590a6329d3d8755'
    }
})