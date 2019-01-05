import axios from "axios";

export default {
  // Get a specific User from the known User email.
  getUser: function(email) {
    return axios({ method: "get", url: `/api/user`, data: email });
  }
};
