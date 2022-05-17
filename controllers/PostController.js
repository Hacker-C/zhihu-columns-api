const express = require('express')
const router = express.Router()

const { getPostsByColumnId } = require('../services/PostService')
const ResultHandler = require('../middlewares/ResultHandler')

router.get('/columns/:id/posts', async (req, res, next) => {
  const columnId = req.params.id
  // results 可能为结果，可能为错误信息
  const results = await getPostsByColumnId(columnId)
  ResultHandler(results, req, res, next)
})

module.exports = router
