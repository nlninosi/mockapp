import axios from 'axios'

const userAPI = axios.create({
    userURL : "http://localhost:8000/user/api/v1/user/",
});
export const getallusers = () => userAPI.get('/');

export const createUser = (User) => userAPI.post('/', User);
