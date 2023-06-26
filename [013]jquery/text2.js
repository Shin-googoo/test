// alert('경고창');
$(function(){
  
  $('.btn').click(function(){
    $('.btn').css('background','blue');
  });
  $('.btn2').mouseenter(function(){
    $('.btn2').css('font-size','25px');
  });
  $('.btn3').mouseleave(function(){
    $(this).css('color','red');
  });
  $('.btn4').keyup(function(){
    $(this).css('border','2px dashed orange');
  });
  $('.btn5').focus(function(){
    $(this).css('color', 'orange');
  });
  $('.btn6').blur(function(){
    $(this).css('background', 'pink');
  });

  $(window).scroll(function(){
    $('body').css('background','violet');
  });
  $('.btn7').on('click keyup', function(){
    $(this).css('font-size','10px');
  });


//effect  

$('.btn_effect2').on('click', function(){
  $('.box').hide();
  });
$('.btn_effect1').on('click', function(){
  $('.box').show();
  });
});
