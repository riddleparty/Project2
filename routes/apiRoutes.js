var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/trails", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/hiker", function(req, res) {
    db.hikers.create(req.body).then(function(dbhikers) {
      res.json(dbhikers);
    });
  });

  // Delete an example by id
  app.delete("/api/hiker/:id", function(req, res) {
    db.hikers.destroy({ where: { id: req.params.id } }).then(function(dbhikers) {
      res.json(dbhikers);
    });
  });
};
