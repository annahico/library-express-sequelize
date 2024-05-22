"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Book extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Book {n}--{1} Author
         Book.belongsTo(models.Author, {
            as: "author",
            foreignKey: "author_id",
         });

         // Book {1}--{n} Loan
         Book.hasMany(models.Loan, {
            as: "loans",
            foreignKey: "book_id",
         });

         // Book {n}--{m} User (through FavoriteBook)
         Book.belongsToMany(models.User, {
            through: models.FavoriteBook,
            as: "favoriteByUsers",
            foreignKey: "book_id",
         });
      }
   }
   Book.init(
      {
         title: DataTypes.STRING,
         gender: DataTypes.STRING,
         author_id: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Book",
         tableName: "books",
      }
   );
   return Book;
};