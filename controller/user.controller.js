
const fs = require('fs');


const userData = fs.readFileSync('userData.json');
const user = JSON.parse(userData);

// console.log(user);

const randomIndex = Math.floor(Math.random() * user.length);
// console.log(randomUser, 'tghis is random uswer');

module.exports.getRandomUser = (req, res) => {
    res.send(user[randomIndex])
}

