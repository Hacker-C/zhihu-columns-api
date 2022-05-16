const { queryColumns, insertColumn } = require('../models/ColumnsModel')
const ResponseData = require('../common/ResponseData')

const getColumns = async () => {
  try {
    let res = await queryColumns()
    return res
  } catch (e) {
    console.log(e)
    return '出错了！'
  }
}

const addColumn = async columns => {
  try {
    let affectedRows = await insertColumn(columns)
    if (affectedRows === 1) {
      return new ResponseData(0, null, '创建专栏成功')
    }
    return new ResponseData(1, null, '创建专栏失败')
  } catch (e) {
    console.log(e)
    return new ResponseData(1, null, '创建专栏失败')
  }
}

module.exports = { getColumns, addColumn }
