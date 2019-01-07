import axios from "axios";

export default {
  getTerms: function() {
    return axios.post(`/api/terms`);
  }
};
