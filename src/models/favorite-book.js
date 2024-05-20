"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class FavoriteBook extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         
      }
   }
   FavoriteBook.init(
      {
         user_id: DataTypes.INTEGER,
         book_id: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "FavoriteBook",
         tableName: "favorite_books",
      }
   );
   return FavoriteBook;
};
