module.exports = class ResponseData {
  constructor(code, data, msg) {
    // TIP code 为 0 表示 200，1 表示 500， 2 表示 404
    this.code = code
    this.msg = msg
    this.data = data
  }
}
