import axios from "axios";

export default {
  //Get all Pantry items.
  getPantry: function() {
    return axios.get(`/api/pantry`);
  },
  // Get a specific Pantry item.
  getPantryItem: function(id) {
    return axios.get(`/api/pantry/${id}`);
  },
  // Create a new Pantry Item.
  createPantryItem: function() {
    return axios.post(`/api/pantry`);
  },
  // Edit a specific Pantry item.
  updatePantryItem: function(id) {
    return axios.put(`/api/pantry/${id}`);
  },
  // Delete a specific Pantry item.
  deletePantryItem: function(id) {
    return axios.delete(`/api/pantry/${id}`);
  }
};
