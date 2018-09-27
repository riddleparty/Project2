var db = require("../models");

var path = require("path");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, ""));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });


  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  app.get("/photos", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/photos.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });


  // var title = "space+jam";
  //   var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=3b48b07d";

  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function(response) {
  //     console.log(response);
  //     console.log(response.Runtime);
  //   });





  // Load example page and pass in an example by id
  //app.get("/example/:id", function(req, res) {
    //db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      /*
      res.render("example", {
        example: dbExample
      });
      */
    //});
  //});

  // Render 404 page for any unmatched routes
  //app.get("*", function(req, res) {
    //res.render("404");
  //});
};
