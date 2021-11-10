const { Comment } = require('../models');

const commentData = [
{
    comment_text: "I'll take a look into it and maybe include it in my next project!",
    post_id: 3,
    user_id: 1
},
{
    comment_text: "I envy you, I do not like Javascript at all. I am more of a back-end kind of guy.",
    post_id: 1,
    user_id: 4
},
{
    comment_text: "Wow you project sounds so interesting! Is there anyway I can contribute?",
    post_id: 4,
    user_id: 2
},
{
    comment_text: "I love your project idea, I am going to use it when I decide to invest into the stock market!",
    post_id: 4,
    user_id: 3
},
{
    comment_text: "Yeah same here! I struggled so much that I am on another tech-blog complaining about the one I have to create!",
    post_id: 5,
    user_id: 5
},
{
    comment_text: "If you guys need some help, I can offer some assistance. I did struggle but I managed to figure everything out and got mine to work!",
    post_id: 5,
    user_id: 4
}, 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;