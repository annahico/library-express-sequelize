"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "authors",
         [
            {
               id: 1,
               name: "Gabriel García Márquez",
               nationality: "Colombiano",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 2,
               name: "Haruki Murakami",
               nationality: "Japonés",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 3,
               name: "J.K. Rowling",
               nationality: "Británica",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 4,
               name: "Stephen King",
               nationality: "Estadounidense",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 5,
               name: "Agatha Christie",
               nationality: "Británica",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 6,
               name: "George Orwell",
               nationality: "Británica",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 7,
               name: "Jane Austen",
               nationality: "Británica",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 8,
               name: "Leo Tolstoy",
               nationality: "Ruso",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 9,
               name: "Fyodor Dostoevsky",
               nationality: "Ruso",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 10,
               name: "Ernest Hemingway",
               nationality: "Estadounidense",
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("authors", null, {});
   },
};
