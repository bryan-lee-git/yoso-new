import axios from "axios";

export default {
  //Get all Pantry items.
  getPantry: function(UserId) {
    return axios.post({
      url: `/api/pantry/all`,
      data: UserId
    });
  },
  // Get a specific Pantry item.
  getPantryItembyId: function(id) {
    return axios.get(`/api/pantry/${id}`);
  },
  getPantryItem: function(UserId, name) {
    const data = { UserId: UserId, name: name };
    console.log(
      `inside pantryapi, get pantryitem, here's UserId: ${UserId} and name: ${name}`
    );
    return axios.post({
      url: `/api/pantry/name`,
      data: data
    });
  },
  // Create a new Pantry Item.
  findOrCreatePantryItem: function(data) {
    return axios({
      method: "post",
      url: `/api/pantry`,
      data: data
    });
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
