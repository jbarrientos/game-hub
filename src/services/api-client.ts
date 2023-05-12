import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '6cbb875ffaaf4ae080a923089a272aee'
  }
});