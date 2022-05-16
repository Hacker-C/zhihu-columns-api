// TIP 文章专栏相关接口
const express = require('express')
const router = express.Router()

const { getAllColumns, addColumn, getColumnById } = require('../services/ColumnsService')
const ResultHandler = require('../middlewares/ResultHandler')

// FEAT 获取所有专栏信息
router.get('/columns', async (req, res, next) => {
  let results = await getAllColumns()
  ResultHandler(results, req, res, next)
})

// FEAT 新建一个专栏
router.post('/columns', async (req, res, next) => {
  const columnInfo = req.body
  const results = await addColumn(columnInfo)
  ResultHandler(results, req, res, next)
})

// FEAT 获取某个专栏的信息
router.get('/columns/:id', async (req, res, next) => {
  const columnId = req.params.id
  const results = await getColumnById(columnId)
  ResultHandler(results, req, res, next)
})

module.exports = router
