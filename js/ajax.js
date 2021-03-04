// 封装jQuery的ajax
// 请求的路径、请求的方式，携带的数据，响应内容
// 后台服务器的基础路径
var baseURL = 'http://localhost:7788';
function myAjax(url, method, param, successHandle, errorHandle) {
  $.ajax({
    url: baseURL + url,
    method: method,
    data: param,
    success: successHandle,
    error: errorHandle
  });
}