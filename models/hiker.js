module.exports = function(sequelize, DataTypes) {
  var Hiker = sequelize.define("Hiker", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    trails: DataTypes.STRING
  });
  return Hiker;
};
