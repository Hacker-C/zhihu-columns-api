const { queryColumns, insertColumn } = require('../models/ColumnsModel')
const ResponseData = require('../common/ResponseData')

const getAllColumns = async () => {
  try {
    let results = await queryColumns()
    return new ResponseData(0, results, '获取所有专栏信息成功')
  } catch (e) {
    console.log(e)
    return new ResponseData(1, null, '获取所有专栏信息失败')
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

module.exports = { getAllColumns, addColumn }
