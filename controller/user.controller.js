
const fs = require('fs');
const _ = require('underscore');

const userData = fs.readFileSync('userData.json');
let users = JSON.parse(userData);
const randomIndex = (_.random(0, users.length));

module.exports.getRandomUser = (req, res) => {
    res.send(users[randomIndex])
}

module.exports.getAllUser = (req, res) => {
    res.send(users)
}

module.exports.saveAUser = (req, res) => {
    const adddUser = req.body;
    user.push(adddUser)
    res.send(users)
}

module.exports.updateAUser = (req, res) => {
    const { id, contact } = req.query;
    let foundedUser = users.find(u => u.Id == id);
    foundedUser.contact = contact;
    res.send(users)
}

module.exports.deleteAUser = (req, res) => {
    const { id } = req.body;
    const filteredUsers = users.filter(user => user.Id !== id);
    users = filteredUsers;
    res.send(users)
}
