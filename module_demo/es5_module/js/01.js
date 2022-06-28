// 1. 定义js方法
const sum = function(a, b) {
    return parseInt(a) + parseInt(b);
}

const substract = function(a, b) {
    return parseInt(a) - parseInt(b);
}

// 2. 指定允许外部调用的方法
module.exports = {
    sum,
    substract
}