const { queryPostsByColumnId, queryAllPost } = require('../models/PostModel')
const ResponseData = require('../common/ResponseData')

const getAllPosts = async () => {
  try {
    const results = await queryAllPost()
    return new ResponseData(0, results, '查询文章成功')
  } catch (e) {
    return new ResponseData(1, e, '查询失败，服务器错误')
  }
}

const getPostsByColumnId = async columnId => {
  try {
    const results = await queryPostsByColumnId(columnId)
    if (results.length <= 0) {
      return new ResponseData(2, null, '该专栏下还没有文章')
    }
    return new ResponseData(0, results, '查询文章列表成功')
  } catch (e) {
    return new ResponseData(1, e, '查询失败，服务器错误')
  }
}

module.exports = { getPostsByColumnId, getAllPosts }
