const { Post } = require('../models');

const postData = [
    {
    title: 'Javascript',
    post_text: 'I LOVE JAVASCRIPT SO MUCH!',
    user_id: 1,
    },
    {
    title: 'HTML, CSS, Javascript',
    post_text: "I love front end so much! I can't wait to be a front-end developer after this boot-camp!",
    user_id: 2,
    },
    {
    title: 'Chart.js',
    post_text: 'If you want a fast and easy way to make a chart, check out chart.js!',
    user_id: 2,
    },
    {
    title: 'Project 1',
    post_text: 'My first project for this boot-camp was an app that would allow the user to compare news articles to stock market data and see if they were related.',
    user_id: 3,
    },
    {
    title: 'Tech-Blog',
    post_text: 'Man I struggled so much making a tech blog, if only it was easier.',
    user_id: 4,
    },
    {
    title: 'Full Stack',
    post_text: "Everything we have learned so far in this boot-camp is so interesting, I love it all. I can't wait to be a full stack web developer!",
    user_id: 5,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;