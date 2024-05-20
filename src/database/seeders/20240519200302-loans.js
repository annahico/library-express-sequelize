"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "loans",
         [
            {
               id: 1,
               loan_date: "2024-04-01",
               due_date: "2024-04-15",
               book_id: 1,
               user_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 2,
               loan_date: "2024-04-03",
               due_date: "2024-04-17",
               book_id: 2,
               user_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 3,
               loan_date: "2024-04-05",
               due_date: "2024-04-19",
               book_id: 3,
               user_id: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 4,
               loan_date: "2024-04-07",
               due_date: "2024-04-21",
               book_id: 4,
               user_id: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 5,
               loan_date: "2024-04-09",
               due_date: "2024-04-23",
               book_id: 5,
               user_id: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 6,
               loan_date: "2024-04-11",
               due_date: "2024-04-25",
               book_id: 6,
               user_id: 7,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 7,
               loan_date: "2024-04-13",
               due_date: "2024-04-27",
               book_id: 7,
               user_id: 8,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 8,
               loan_date: "2024-04-15",
               due_date: "2024-04-29",
               book_id: 8,
               user_id: 9,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 9,
               loan_date: "2024-04-17",
               due_date: "2024-05-01",
               book_id: 9,
               user_id: 10,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 10,
               loan_date: "2024-04-19",
               due_date: "2024-05-03",
               book_id: 10,
               user_id: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("loans", null, {});
   },
};
