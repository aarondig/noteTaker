var path = require("path");
var fs = require("fs");

require("../db/db.json");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    console.log("IT WORKED")
    fs.readFile(__dirname + "/db/db.json", function(data){
        return res.json(data);
    })
  });

}