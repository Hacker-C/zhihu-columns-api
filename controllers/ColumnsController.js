// FEAT 文章专栏相关接口
const express = require('express')
const router = express.Router()

const { getColumns } = require('../services/ColumnsService')

// 获取所有专栏信息
router.get('/columns', async (req, res) => {
  let results = await getColumns()
  res.send(results)
})

module.exports = router
