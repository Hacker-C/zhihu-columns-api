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

const addColumns = async columns => {
  const sql = 'insert into columns(title, avatar, description) values (?, ?)'
  let results = new Promise((resolve, reject) => {
    db.query(sql, Object.values(columns))
  })
}

module.exports = { queryColumns }
