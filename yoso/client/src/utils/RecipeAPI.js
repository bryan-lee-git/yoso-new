import axios from "axios";
const BASEURL = "http://api.yummly.com/v1/api/recipes?";
const APIKEY = "_app_id=cda1a85b&_app_key=4070bee7c2360bbaf8e2157c686c37e7&q=";

export default {
    
    getRecipes: function(query) {
        return axios.get(BASEURL + APIKEY + query);
    }
};