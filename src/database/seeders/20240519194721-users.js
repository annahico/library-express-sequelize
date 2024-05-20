"use strict";
const bcrypt = require("bcrypt");
const plainPassword = "12345678";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "users",
         [
            {
               id: 1,
               first_name: "John",
               last_name: "Doe",
               email: "admin@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 2,
               first_name: "Jane",
               last_name: "Smith",
               email: "manager@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 3,
               first_name: "Michael",
               last_name: "Johnson",
               email: "michael.johnson@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 4,
               first_name: "Emily",
               last_name: "Davis",
               email: "emily.davis@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 5,
               first_name: "David",
               last_name: "Martinez",
               email: "david.martinez@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 6,
               first_name: "Laura",
               last_name: "Rodriguez",
               email: "laura.rodriguez@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 7,
               first_name: "Robert",
               last_name: "Garcia",
               email: "robert.garcia@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 8,
               first_name: "Linda",
               last_name: "Wilson",
               email: "linda.wilson@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 9,
               first_name: "James",
               last_name: "Lopez",
               email: "james.lopez@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               id: 10,
               first_name: "Patricia",
               last_name: "Hernandez",
               email: "patricia.hernandez@example.com",
               password: bcrypt.hashSync(plainPassword, 10),
               is_active: true,
               role_id: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],

         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("users", null, {});
   },
};
