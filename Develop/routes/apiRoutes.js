var path = require("path");
var fs = require("fs");
var database = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(database);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    for (i = 0; i <= database.length; i++){
      newNote.id = [i].toString();
    }
    console.log(newNote);
    database.push(newNote);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(database, null, 1), function(err){
      if (err) throw err;
    });
    res.json(true);
  });

  app.delete("/api/notes/:id", function(req, res) {
    const id = req.params.id;
    console.log(database);
    for(i = 0; i <= database.length; i++) {
      if (database[i].id == id){
        database.splice([i].toString(), 1);
      }
    }
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(database, null, 1), function(err){
      if (err) throw err;
    });
    res.json(true);
  });
}