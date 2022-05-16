const db = require('../db')

const queryColumns = async () => {
  const sql = 'SELECT * FROM columns'
  let results = await new Promise((resolve, reject) => {
    db.query(sql, (err, results) => {
      if (err) reject(err)
      resolve(results)
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

const getColumn = async columnId => {
  const sql = 'SELECT * FROM columns WHERE id=?'
  let column = await new Promise((resolve, reject) => {
    db.query(sql, columnId, (err, results) => {
      if (err) reject(err)
      resolve(results)
    })
  })
  return column
}

module.exports = { queryColumns, insertColumn, getColumn }
