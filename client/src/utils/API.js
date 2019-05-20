import axios from "axios";

export default {
  // Gets all character
  getCharacter: function() {
    return axios.get("/api/character");
  },
  // Gets the character with the given id
  getCharacter: function(id) {
    return axios.get("/api/character/" + id);
  },
  // Deletes the character with the given id
  deleteCharacter: function(id) {
    return axios.delete("/api/character/" + id);
  },
  // Saves a character to the database
  saveCharacter: function(bookData) {
    return axios.post("/api/character", bookData);
  }
};


const BASEURL = "http://gateway.marvel.com/v1/public/characters?name=";
const APIKEY = "&ts=1&apikey=4f82aad81edf09ddae1833aecf5099ac&hash=c354f5dc8eaa43b1eab943a71762410c";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
 
};