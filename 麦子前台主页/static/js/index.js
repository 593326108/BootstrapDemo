/**
 * Created by Administrator on 2018/11/10.
 */
$(function(){
  /*������ת���*/
  $('nav').singlePageNav({
    offset: 70
  });

  /*С��Ļ��������رղ˵�*/
  $('.navbar-collapse a').click(function(){
    $('.navbar-collapse').collapse('hide');
  });

  // ��ʼ�� wow
  new WOW().init();

});