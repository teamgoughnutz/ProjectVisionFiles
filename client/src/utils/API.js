import axios from "axios";

export default {
  // Gets all character
  getCharacter: function() {
    return axios.get("/api/character");
  },
  // Gets the character with the given id
  getCharacterByID: function(id) {
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

