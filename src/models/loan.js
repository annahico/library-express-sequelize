"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class Loan extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         // Loan {n}--{1} User
         Loan.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
         });

         // Loan {n}--{1} Book
         Loan.belongsTo(models.Book, {
            as: "book",
            foreignKey: "book_id",
         });
      }
   }
   Loan.init(
      {
         loan_date: DataTypes.DATE,
         due_date: DataTypes.DATE,
         return_date: DataTypes.DATE,
         user_id: DataTypes.INTEGER,
         book_id: DataTypes.INTEGER,
      },
      {
         sequelize,
         modelName: "Loan",
         tableName: "loans",
      }
   );
   return Loan;
};