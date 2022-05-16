const express = require('express')
const logger = require('morgan')
const app = express()
const BASE_CONFIG = require('./config/base.config')
const routes = require('./controllers')
const cors = require('cors')
const errorHandler = require('./middlewares/ErrorHandler')
const CorsConfig = require('./config/cors.config')

app.use(express.json()) // 解析 req body 表单数据
app.use(cors(CorsConfig))
app.use(logger('dev')) // 监听接口测试情况
app.use(BASE_CONFIG.API, routes.columnsRoutes)
app.use(errorHandler)

app.listen(BASE_CONFIG.PORT, () => {
  console.log(`serving at http://localhost:${BASE_CONFIG.PORT}`)
})
