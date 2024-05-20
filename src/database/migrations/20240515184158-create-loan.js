"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("loans", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         loan_date: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         due_date: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         return_date: {
            type: Sequelize.DATE,
         },
         user_id: {
            type: Sequelize.INTEGER,
            references: {
               model: "users",
               key: "id",
            },
         },
         book_id: {
            type: Sequelize.INTEGER,
            references: {
               model: "books",
               key: "id",
            },
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
         },
      });

      await queryInterface.addConstraint("loans", {
         fields: ["user_id", "book_id", "loan_date"],
         type: "unique",
         name: "user_book_date_unique",
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("loans");
   },
};
