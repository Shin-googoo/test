/*
  회원가입 처리용 jQuery
  작성자: 신용구
  작성날짜: 2023.1.31
*/

$(function(){
  //에러메세지는 처음에는 안보이게 설정(show()<->hide())
  $('#id_error').hide();
  $('#age_error1').hide();
  $('#age_error2').hide();
  $('#p_error1').hide();
  $('#p_error2').hide();

  //<input type="button" id="btnSend" value="전송"></input>
  $('#btnSend').click(function(){
    //다 입력했는지 검증 
    //1. id 입력체크
    var id=$('#userid').val();
    if(id.length < 1){
      $('#id_error').show();
      return false;
    }else { //한글자라도 입력한 경우 
      $('#id_error').hide();
    }
    //2. age 입력체크
    var age=$('#age').val();
    if(age.length < 1){
      $('#age_error1').show();
      return false;
    }else { //한글자라도 입력한 경우 
      $('#age_error1').hide();
    }
    //3. 숫자인지 체크 -> 2a or a2,23a
    //0(아스키코드 48)~9(아스키코드 57) 범위를 벗어나면 무조건 문자-> 
                                        //String-> chartAt(인덱스번호)
    //isNaN함수를 이용 
    for(var i=0;i<age.length;i++){
      var data=age.charAt(i).charCodeAt(0); //아스키코드로 변환 
      //alert(data);
      if(data < 48 || data > 57){ //문자를 입력했다면
        $('#age_error2').show();
        return false; // 이 에러메세지가 처리하고 빠져나가게 하기위해서 
        break; //더이상 진행할 필요X
      }else{ //숫자입력했다면
        $('#age_error2').hide();
      }
    }//for

    //4. pwd입력
    var pwd1=$('#pwd1').val();
    if(pwd1.length < 1){
      $('#p_error1').show();
      return false;
    }else { //한글자라도 입력한 경우 
      $('#p_error1').hide();
    }
    //5. pwd 불일치 체크 
    var pwd2=$('#pwd2').val();
    if(pwd2.length < 1){
      $('#p_error2').show();
      return false;
    }else { //한글자라도 입력한 경우 
      $('#p_error2').hide();
    }
    //불일치
    if(pwd1!=pwd2){
      $('#p_error2').show(); //암호가 틀리다
    }
    //다 입력했다면 document.form객체명.submit()
    //=> action='register.jsp'
    $('#signup').attr('action','register.jsp').submit();
    return true; //전송이 가능하게 설정 
  })
})