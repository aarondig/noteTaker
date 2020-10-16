var path = require("path");
var fs = require("fs");
var database = require("../db/db.json");

const { v4: uuidv4 } = require('uuid');

uuidv4();


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function(err, data){
        console.log(data);
        return res.json(data);
    });
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    for (i = 0; i < database.length; i++){
      newNote.id = i;
    }
    database.push(newNote);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(database), function(err){
      if (err) throw err;
    });
    return res.json(true);
  });
}