const { queryColumns } = require('../models/ColumnsModel')

const getColumns = async () => {
  try {
    let res = await queryColumns()
    return res
  } catch (e) {
    console.log(e)
    return '出错了！'
  }
}

module.exports = { getColumns }
