const { User } = require('../models');

const userData = [
    {
    username: "dylan",
    email: "dylan@gmail.com",
    password: "password1234"
    },
    {
    username: "leah",
    email: "leah@gmail.com",
    password: "password1234"
    },
    {
    username: "jinru",
    email: "jinru@gmail.com",
    password: "password1234"
    },
    {
    username: "alain",
    email: "alain@gmail.com",
    password: "password1234"
    },
    {
    username: "raj",
    email: "raj@gmail.com",
    password: "password1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;