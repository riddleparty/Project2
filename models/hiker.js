module.exports = function(sequelize, DataTypes) {
  var Hiker = sequelize.define("Hiker", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Hiker;
};
