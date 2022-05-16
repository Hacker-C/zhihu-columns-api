const db = require('../db')

const queryColumns = async () => {
  let results = new Promise((resolve, reject) => {
    db.query('select "hello db"', (err, res) => {
      if (err) {
        reject('出错了！')
      } else {
        resolve(res)
      }
    })
  })
  return results
}

const insertColumn = async columns => {
  const sql = 'insert into columns(title, description, author_id) values (?, ?, ?)'
  const data = [columns.title, columns.description, columns.author_id]
  let affectedRows = await new Promise((resolve, reject) => {
    db.query(sql, data, (err, results) => {
      if (err) reject(err)
      resolve(results.affectedRows)
    })
  })
  return affectedRows
}

module.exports = { queryColumns, insertColumn }
