// FEAT 文章专栏相关接口
const express = require('express')
const router = express.Router()

const { allColumns } = require('../handler/column')

// 获取所有专栏信息
router.get('/columns', allColumns)

module.exports = router
