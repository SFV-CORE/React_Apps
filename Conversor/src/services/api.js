import axios from 'axios';

// https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=6bd73272f612ccec5fa5

const api = axios.create({
  baseURL: 'https://free.currconv.com/api/v7',
});

export default api;
