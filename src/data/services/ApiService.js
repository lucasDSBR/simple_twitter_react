import Axios from "axios";

const url = 'http://localhost:3002/api';


export const ApiService = Axios.create({
	baseURL: url,
	headers: { 'Accept': 'application/json' }
});