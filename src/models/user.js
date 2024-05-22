"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // User {n}--{1} Role
         User.belongsTo(models.Role, {
            as: "role",
            foreignKey: "role_id",
         });

         // User {1}--{n} Loan
         User.hasMany(models.Loan, {
            as: "loans",
            foreignKey: "user_id",
         });

         // User {n}--{m} Book (through FavoriteBook)
         User.belongsToMany(models.Book, {
            through: models.FavoriteBook,
            as: "favoriteBooks",
            foreignKey: "user_id",
         });
      }
   }
   User.init(
      {
         first_name: DataTypes.STRING,
         last_name: DataTypes.STRING,
         email: DataTypes.STRING,
         password: DataTypes.STRING,
         is_active: DataTypes.BOOLEAN,
         role_id: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "User",
         tableName: "users",
      }
   );
   return User;
};