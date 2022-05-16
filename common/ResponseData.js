module.exports = class ResponseData {
  constructor(code, data, msg) {
    this.code = code
    this.msg = msg
    this.data = data
  }
}
