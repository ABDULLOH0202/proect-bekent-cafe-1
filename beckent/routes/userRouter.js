const Router = require('express')
const userController = require('../controllers/userController')
const authenticate = require('../middleware/authMiddleware')
const router = new Router()
router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authenticate, userController.check)

module.exports = router 