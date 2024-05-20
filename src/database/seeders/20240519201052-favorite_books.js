"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "favorite_books",
         [
            {
               id: 1,
               user_id: 3,
               book_id: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 2,
               user_id: 3,
               book_id: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 3,
               user_id: 4,
               book_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 4,
               user_id: 5,
               book_id: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 5,
               user_id: 6,
               book_id: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 6,
               user_id: 7,
               book_id: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 7,
               user_id: 8,
               book_id: 7,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 8,
               user_id: 9,
               book_id: 8,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 9,
               user_id: 10,
               book_id: 9,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 10,
               user_id: 6,
               book_id: 10,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("favorite_books", null, {});
   },
};
