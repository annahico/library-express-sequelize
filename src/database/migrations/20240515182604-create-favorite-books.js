"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable("favorite_books", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
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

      await queryInterface.addConstraint("favorite_books", {
         fields: ["user_id", "book_id"],
         type: "unique",
         name: "user_book_unique",
      });
   },
   async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("favorite_books");
   },
};
