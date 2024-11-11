import axios from "axios"; 

const API = axios.create({
    baseURL: "http://localhost:3000/",
}); 


export const symptomsPost = async(data) => await API.post("/symptoms", data);


export default API;