const Papa = require("papaparse");
const fs = require("fs");

const file = fs.readFileSync(`${__dirname}/books.csv`, "utf8");

Papa.parse(file, {
  header: true,
  skipEmptyLines: true,
  complete: function (results, file) {
    // console.log("Parsing complete:", results.data);
    fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(results.data));
  },
  error: function (error) {
    console.error(error);
  },
});

// Run Import: node .\data\csvToJson.js
