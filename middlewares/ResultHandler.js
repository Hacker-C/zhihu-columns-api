const ToLowerCamelCase = require('./ToLowerCamelCase')

// TIP 返回数据统一出口
module.exports = (results, req, res, next) => {
  ToLowerCamelCase(results)
  if (results.code === 1) {
    results.data = null
    res.status(500).send(results)
  } else if (results.code === 2) {
    results.data = null
    res.status(200).send(results)
  } else {
    res.status(200).send(results)
  }
  next()
}
