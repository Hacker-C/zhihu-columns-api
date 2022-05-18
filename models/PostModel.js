const db = require('../db')

// 获取所有文章
const queryAllPost = async () => {
  const sql = 'SELECT * FROM posts'
  const results = await new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
  return results
}

// 查询某个专栏下所有文章
const queryPostsByColumnId = async columId => {
  const sql = 'SELECT * FROM posts WHERE `column_id`=?'
  const results = await new Promise((resolve, reject) => {
    db.query(sql, columId, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
  return results
}

module.exports = { queryPostsByColumnId, queryAllPost }
