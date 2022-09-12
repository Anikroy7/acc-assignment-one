const express = require('express');
const userController = require('../controller/user.controller')

const router = express.Router();

router
    .route('/random')
    .get(userController.getRandomUser)


router
    .route('/all')
    .get(userController.getAllUser)


router
    .route('/save')
    .post(userController.saveAUser)

router
    .route('/update')
    .patch(userController.updateAUser)

router
    .route('/delete')
    .delete(userController.deleteAUser)
module.exports = router;