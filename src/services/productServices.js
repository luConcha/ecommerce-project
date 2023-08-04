import axios from 'axios';

const BASE_URL = 'https://ecommerce-json-lacm.onrender.com';

const getAllItems = () => axios.get(`${BASE_URL}/items`);

export { getAllItems };
