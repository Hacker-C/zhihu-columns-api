const express = require('express')
const router = express.Router()

const { getPostsByColumnId, getAllPosts } = require('../services/PostService')
const ResultHandler = require('../middlewares/ResultHandler')

router.get('/posts', async (req, res, next) => {
  const results = await getAllPosts()
  ResultHandler(results, req, res, next)
})

router.get('/columns/:id/posts', async (req, res, next) => {
  const columnId = req.params.id
  // results 可能为结果，可能为错误信息
  const results = await getPostsByColumnId(columnId)
  ResultHandler(results, req, res, next)
})

module.exports = router
