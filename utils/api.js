let API_HOST = "http://xxx.com/xxx";
let DEBUG = true;//切换数据入口
var Mock = require('mock.js')
function homePage(data = '', fn, method = "get", header = {}) {
  if (!DEBUG) {
    wx.request({
      url: config.API_HOST + data,
      method: method ? method : 'get',
      data: {},
      header: header ? header : { "Content-Type": "application/json" },
      success: function (res) {
        fn(res);
      }
    });
  } else {
    // 模拟数据
    var res = Mock.mock({
      'error_code': '',
      'error_msg': '',
      'data': [{
        'id': 1,
        'desc': '@ctitle(3,8)\n@ctitle(3,8)',
        'title': '标题标题1'
      }, {
          'id': 2,
          'desc': '@ctitle(3,8)\n@ctitle(3,8)',
          'title': '标题标题2'
        }, {
          'id': 3,
          'desc': '@ctitle(3,8)\n@ctitle(3,8)',
          'title': '标题标题3'
        }]
    })
    // 输出结果
    // console.log(JSON.stringify(res, null, 2))
    fn(res);
  }
}
module.exports = {
  homePage
}