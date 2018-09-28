var db = require("../models");

module.exports = function(app) {

  // Get all examples
  /*
  app.get("/api/trails", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
  */

  // Create a new person
  app.post("/api/hiker", function(req, res) {

    var bestMatch = {
      name: "",
      age: "",
      gender: "",
      trails: ""
  };

    console.log(req.body);

    db.Hiker.create(req.body).then(function(newHiker) {
      db.Hiker.findOne({ where: {
        trails: req.body.trails
      }}).then(function(bestMatch) {
        res.json(bestMatch);
        console.log(bestMatch)
        
          
      }); // get hiker
    }); // create hiker

    

  }); // function

  /*
  // Delete an example by id
  app.delete("/api/hiker/:id", function(req, res) {
    db.hikers.destroy({ where: { id: req.params.id } }).then(function(dbhikers) {
      res.json(dbhikers);
    });
  });
  */

};
