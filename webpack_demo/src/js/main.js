const common = require('./common.js')
const utils = require('./utils.js')

// 引入CSS文件
require('../css/style.css')

common.info('Hello World ' + utils.add(100, 200));