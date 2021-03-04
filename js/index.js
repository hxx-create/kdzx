$(function () {
  $('.left-nav li').click(function () {
    var text = $(this).text();
    // 设定样式变化
    $(this).css({
      backgroundColor: 'white',
      color: 'RGB(47, 65, 87)'
    });
    $(this).siblings().css({
      backgroundColor: 'RGB(47, 65, 87)',
      color: 'white'
    });
    
    if (text == '首页') {
      $('.right-content').load('./pages/home.html');
    } else if (text == '栏目管理') {
      $('.right-content').load('./pages/category.html');
    } else if (text == '文章管理') {
      $('.right-content').load('./pages/article.html');
    } else if (text == '用户管理') {
      $('.right-content').load('./pages/user.html');
    } else if (text == '评论管理') {
      $('.right-content').load('./pages/comment.html');
    } else {
      return;
    }
  });
  $('.left-nav li:first').click();
})