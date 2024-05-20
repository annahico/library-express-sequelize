"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "books",
         [
            {
               id: 1,
               title: "Cien años de soledad",
               gender: "Realismo mágico",
               author_id: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 2,
               title: "Norwegian Wood",
               gender: "Ficción contemporánea",
               author_id: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 3,
               title: "Harry Potter y la piedra filosofal",
               gender: "Fantasía",
               author_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 4,
               title: "It",
               gender: "Terror",
               author_id: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 5,
               title: "Asesinato en el Orient Express",
               gender: "Misterio",
               author_id: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 6,
               title: "1984",
               gender: "Distopía",
               author_id: 6,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 7,
               title: "Orgullo y prejuicio",
               gender: "Clásico",
               author_id: 7,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 8,
               title: "Guerra y paz",
               gender: "Novela histórica",
               author_id: 8,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 9,
               title: "Crimen y castigo",
               gender: "Novela psicológica",
               author_id: 9,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 10,
               title: "El viejo y el mar",
               gender: "Novela corta",
               author_id: 10,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],

         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("books", null, {});
   },
};
