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
    fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function(err, data){
        console.log(data);
        return res.json(data);
    });
  });
  app.post("/api/notes", function(req, res) {

        data.push(req.body);
        res.json(true);
      
  });
  

}