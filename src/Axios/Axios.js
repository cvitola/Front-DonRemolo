import axios from 'axios';

const baseURL = 'https://don-remolo.herokuapp.com/product';

export const getAllProducts = () => {
    return axios.get(`${baseURL}/allProducts`);
}