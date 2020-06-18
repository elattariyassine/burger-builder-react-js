import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-js-demo.firebaseio.com/'
});

export default instance;