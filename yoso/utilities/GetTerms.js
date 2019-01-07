var fs = require("fs");

function getTerms() {
  const termsFile = "./utilities/ItemTerms.txt";
  fs.readFile(termsFile, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });
}

module.exports = getTerms;
