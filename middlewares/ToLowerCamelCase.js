module.exports = results => {
  results.data = t(results.data)
}

function t(data) {
  let ans = []
  if (!data) return data
  let _isArray = data instanceof Array
  if (!_isArray) {
    data = [data]
  }
  data.forEach(obj => {
    let newObj = {}
    Object.keys(obj).forEach(key => {
      newObj[help(key)] = obj[key]
    })
    ans.push(newObj)
  })
  return _isArray ? ans : data[0]
}

function help(key) {
  let arr = key.split('_')
  if (arr.length <= 1) return key
  let temp = ''
  for (let i = 1; i < arr.length; i++) {
    temp += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
  }
  return arr[0] + temp
}
