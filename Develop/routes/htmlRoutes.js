var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/index.html"));
        // res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
        // res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));

    });
    app.get("/notes", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/notes.html"));
        // res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
        // res.sendFile(path.join(__dirname, "../public/assets/css/styles.css"));

    });

}