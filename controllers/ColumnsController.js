// FEAT 文章专栏相关接口
const express = require('express')
const router = express.Router()

const { getAllColumns, addColumn } = require('../services/ColumnsService')

// 获取所有专栏信息
router.get('/columns', async (req, res) => {
  let results = await getAllColumns()
  res.send(results)
})

// 新建一个专栏
router.post('/columns', async (req, res) => {
  const columnInfo = req.body
  const result = await addColumn(columnInfo)
  res.send(result)
})

module.exports = router
