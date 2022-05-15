// 用户信息相关后端路由
const express = require('express')
const router = express.Router()

const { userLogin } = require('../handler/user')

router.post('/login', userLogin)

module.exports = router
