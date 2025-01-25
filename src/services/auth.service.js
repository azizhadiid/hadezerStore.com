import axios from 'axios';
import { jwtDecode } from "jwt-decode";

export const login =(data, callback) => {
    axios.post('https://fakestoreapi.com/auth/login', data).then((res) => {
        callback(true, res.data.token);
    }).catch((error) => {
        callback(false, error);
    });
};

export const getUserId = (token) => {
    const decoded = jwtDecode(token); // Decode JWT
    return decoded.sub; // Asumsikan ID user ada di `sub` payload
};

