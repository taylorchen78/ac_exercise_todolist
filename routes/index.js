// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入 home 模組程式碼
const home = require('./modules/home')
// 引入 todos 模組程式碼
const todos = require('./modules/todos')
const users = require('./modules/users')

const { authenticator } = require('../middleware/auth')  // 掛載 middleware

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

// 準備引入路由模組
// 匯出路由器
module.exports = router