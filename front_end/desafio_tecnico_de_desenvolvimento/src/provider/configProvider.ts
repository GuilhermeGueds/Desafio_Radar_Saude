//import dotenv from "dotenv";
import axios from "axios";
import {responseInterceptor, errorInterceptor} from "./interceptors"


export  const provider = axios.create({baseURL: 'http://localhost:3333'})

provider.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
    );
