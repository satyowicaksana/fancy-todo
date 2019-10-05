const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const {authentication} = require('../middlewares/auth')

router.use(authentication)
router.get('/', TaskController.findAll)
router.get('/now', TaskController.findNow)
router.post('/', TaskController.create)

module.exports = router