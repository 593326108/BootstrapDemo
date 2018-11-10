/**
 * Created by Administrator on 2018/11/10.
 */
$(function(){
  /*导航跳转插件*/
  $('nav').singlePageNav({
    offset: 70
  });

  /*小屏幕导航点击关闭菜单*/
  $('.navbar-collapse a').click(function(){
    $('.navbar-collapse').collapse('hide');
  });

  // 初始化 wow
  new WOW().init();

});