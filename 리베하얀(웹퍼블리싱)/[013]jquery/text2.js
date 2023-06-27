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

  // $(window).scroll(function(){
  //   $('body').css('background','violet');
  // });
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
$('.btn_effect3').on('click', function(){
  $('.box').toggle();
  });
$('.btn_effect4').on('click', function(){
  $('.box').fadeIn(1000);
  });
$('.btn_effect5').on('click', function(){
  $('.box').fadeOut(1000);
  });
$('.btn_effect6').on('click', function(){
  $('.box').stop().fadeToggle(1000);
  });
$('.btn_effect7').on('click', function(){
  $('.box').slideDown();
  });
$('.btn_effect8').on('click', function(){
  $('.box').slideUp();
  });
$('.btn_effect9').on('click', function(){
  $('.box').stop().slideToggle();
  });

//animation

$('.btn_ani').on('click',function(){
  var box = $('.ani_box');
  box.animate({
    width:'400px',
    height:'100px',
    fontSize:'20px',
    margin:'0 0 0 20px',
    backgroundColor:'blue'
  }, 2000);
  box.animate({
    width:'200px',
    height:'200px'
  }, 2000);
});

// html

$('.btn_text').on('click',function(){
  var txt = $(this).text();
  //console.log(txt);

  $('.html_text').text(txt);
  // $('.html_text').text('삽입되었나요?');
})

$('.btn_html').on('click', function(){
  var btn = $('.html_p').html();

//console.log(btn);

$('.html_html').html(btn);
//$('.html_html').html('<span></span>');
})

$('.btn_value').on('click', function(){
  var value_text = $(this).text();
  $('.html_value').val(value_text);
  // $('.html_value').val('이방언');
})

$('.insert_html').on('click', function(){
  //$('.insert ul').append('<li class="d">4</li>')//마지막자식
  //$('.insert ul').prepend('<li class="aa">0</li>')//첫번째자식
  //$('.insert ul').after('<div>div</div>'); //형제
  //$('.insert ul').before('<div>div</div>'); //이전형제
  //$('.insert .b').remove(); //삭제
  //$('.insert li').empty(); //글씨삭제
  //$('.insert ul').addClass('a1'); //클래스 추가
  //$('.insert li').removeClass('c'); //클래스 제거
  //$('.insert ul').toggleClass('d'); //클래스 추가/제거
  //$('.insert ul').attr('id','ddd'); //html 속성 추가
  $('.html_value').removeAttr('value'); //html 속성 제거
})

// Css

$('.btn_css').on('click', function(){
  $('.css_box').css({
    'border':'2px solid red',
    'fontSize':20
  });
});

// size

$('.btn_size').on('click', function(){
  //var size = $('.size_box').width(); 
  //var size = $('.size_box').height(); 
  // var size1 = $('.size_box').innerWidth(); 
  // var size2 = $('.size_box').innerHeight(); 
  var size1 = $('.size_box').outerWidth(); 
  var size2 = $('.size_box').outerHeight(); 
  console.log(size1,size2);
});



});
