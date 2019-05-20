import axios from "axios";

const BASEURL = "http://gateway.marvel.com/v1/public/characters?name=";
const APIKEY = "&ts=1&apikey=4f82aad81edf09ddae1833aecf5099ac&hash=c354f5dc8eaa43b1eab943a71762410c";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
 
};
