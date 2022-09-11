
const fs = require('fs');
const _ = require('underscore');

const userData = fs.readFileSync('userData.json');
const user = JSON.parse(userData);
const randomIndex = (_.random(0, user.length));

module.exports.getRandomUser = (req, res) => {
    res.send(user[randomIndex])
}

module.exports.getAllUser = (req, res) => {
    res.send(user)
}

module.exports.saveAUser = (req, res) => {

    const adddUser = req.body;
    user.push(adddUser)

    res.send(user)
    // console.log(user);
}

