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

    console.log(req.body);

    db.Hiker.create(req.body).then(function(newHiker) {
      db.Hiker.findOne({ where: {
        trails: req.body.trails
      }}).then(function(friendRow) {
        res.json(friendRow);
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
