import axios from "axios";

export default {
  //Get all User Lists items.
  getLists: function(userId) {
    console.log(
      `from inside the getlists method of the list api the user id is ${userId}`
    );
    return axios.post(`/api/list/findAll`, {
      userId
    });
  },
  // Get a specific User List.
  getList: function(userId, listId) {
    return axios({
      method: `get`,
      url: `/api/list/${listId}`,
      data: {
        userId: userId
      }
    });
  },
  // Create just a new User List.
  createList: function(userId, data) {
    return axios({
      method: `post`,
      url: `/api/list/`,
      data: {
        UserId: userId,
        name: data.name
      }
    });
  },

  // Create a new User List with items
  createListWithItems: function(userId, data) {
    return axios({
      method: `post`,
      url: `/api/list/items`,
      data: {
        UserId: userId,
        name: data.name,
        items: data.items // MUST be an array of items
      }
    });
  },
  // Edit a specific User List.
  updateList: function(userId, listId, data) {
    return axios({
      method: `put`,
      url: `/api/list/${listId}`,
      data: {
        userId: userId,
        data
      }
    });
  },
  // Delete a specific User List.
  deleteList: function(userId, listId) {
    return axios({
      method: `delete`,
      url: `/api/list/${listId}`,
      data: {
        userId: userId
      }
    });
  }
};
