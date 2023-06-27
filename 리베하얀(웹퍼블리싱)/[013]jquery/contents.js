// js
$(function(){
//팝업
$('.btn_popup').on('click',function(){
  $('.popup').fadeIn();
  });
  $('.popup .close').on('click', function(){
    $(this).parent('.popup').fadeOut();
  });

//햄버거메뉴 1번째 방법 -> .side_gnb {opacity: 0;} 필요
  // $('.btn_side').on('click',function(){
  //   $('.side_gnb').animate({
  //     left:0,
  //     opacity:1
  //   }, 1000);
  // });

  // $('.side_gnb .close').on('click', function(){
  //   $(this).parent().animate({
  //     left:-100+'%',
  //     opacity:0
  //   }, 1000);
  // })

  //햄버거메뉴 2번째 방법

  $('.btn_side').on('click', function(){
    $('.side_gnb').addClass('active');
  });
  $('.side_gnb .close').on('click', function(){
    $(this).parent().removeClass('active');
  });
});