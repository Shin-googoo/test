function loginCheck(){
	//document.폼객체명.입력양식객체명.속성=값
	if(document.login.mem_id.value==""){
		alert("아이디를 입력해 주세요.");
		document.login.mem_id.focus();//커서입력
		return;
	}
	if(document.login.mem_passwd.value==""){
		alert("비밀번호를 입력해 주세요.");
		document.login.mem_passwd.focus();
		return;
	}
	//<input type="button" onclick="호출할 함수명(~)".
	//document.폼객체명.submit()
	document.login.submit();
}
//회원가입
function memberReg(){
	document.location="agreement.jsp"
}

function inputCheck(){
	if(document.regForm.mem_id.value==""){
		alert("아이디를 입력해 주세요.");
		document.regForm.mem_id.focus();
		return;
	}
	if(document.regForm.mem_passwd.value==""){
		alert("비밀번호를 입력해 주세요.");
		document.regForm.mem_passwd.focus();
		return;
	}
	if(document.regForm.mem_repasswd.value==""){
		alert("비밀번호를 확인해 주세요");
		document.regForm.mem_repasswd.focus();
		return;
	}
	if(document.regForm.mem_name.value==""){
		alert("이름을 입력해 주세요.");
		document.regForm.mem_name.focus();
		return;
	}
	
	if(document.regForm.mem_email.value==""){
		alert("이메일을 입력해 주세요.");
		document.regForm.mem_email.focus();
		return;
	}
	if(document.regForm.mem_phone.value==""){
		alert("연락처를 입력해 주세요.");
		document.regForm.mem_phone.focus();
		return;
	}
	if(document.regForm.mem_job.value=="0"){
		alert("직업을 선택해 주세요.");
		document.regForm.mem_job.focus();
		return;
	}
	
	if(document.regForm.mem_passwd.value != document.regForm.mem_repasswd.value){
		alert("비밀번호가 일치하지 않습니다.");
		document.regForm.mem_repasswd.focus();
		return;
	}
	document.regForm.submit();//RegisterProc.jsp로 이동하라
}

//중복ID체크 해주는 자바스크립트함수 선언
/*
function idCheck(id){
   if(id==""){
	   alert("아이디를 먼저 입력하세요!");
	   document.regForm.mem_id.focus();//document.폼객체명.입력양식객체명.함수명()
   }else{//입력을 했다면 ->jsp파일에게 매개변수를 전달하는 방법
	   //창을 실행->요청할 문서를 지정->매개변수도 같이 전달할 수있도록 코딩
	   url="IdCheck.jsp?mem_id="+id //request.getParameter("mem_id")
	   //1.불러올 문서명 2.창의 제목 3.창의 옵션
	   window.open(url,"post","left=450,top=150,width=300,height=150")
   }
}
*/
//우편번호를 검색해주는 함수선언
function zipCheck(){
	//check=y->검색전의 창의모습을 구분하는 인자(매개변수로 지정해서 전달하기위해 필요)
	//menubar(메뉴바),status(상태바),scrollbars(스크롤기능),toolbar=yes|no
    url="ZipCheck.jsp?check=y"
    window.open(url,"post","left=400,top=220,width=500,height=300,"+
    		                "menubar=no,status=yes,toolbar=no,scrollbars=yes")	
}














