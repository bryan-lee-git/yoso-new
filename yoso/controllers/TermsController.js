const getTerms = require("../utilities/GetTerms");

module.exports = {
  findAll: function(req, res) {
    res.json(getTerms());
  }
};
