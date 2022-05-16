const { queryColumns, insertColumn, getColumn } = require('../models/ColumnsModel')
const ResponseData = require('../common/ResponseData')

const getAllColumns = async () => {
  try {
    let results = await queryColumns()
    return new ResponseData(0, results, '获取所有专栏信息成功')
  } catch (e) {
    return new ResponseData(1, e, '获取所有专栏信息失败')
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
    return new ResponseData(1, e, '创建专栏失败')
  }
}

const getColumnById = async columnId => {
  try {
    const results = await getColumn(columnId)
    if (results.length <= 0) {
      return new ResponseData(2, null, '该专栏不存在')
    }
    return new ResponseData(0, results[0], '获取专栏信息成功')
  } catch (e) {
    return new ResponseData(1, e, '服务器错误！')
  }
}

module.exports = { getAllColumns, addColumn, getColumnById }
