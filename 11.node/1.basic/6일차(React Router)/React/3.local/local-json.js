/**
 * jQuery(local-json.js)
 */
$(function(){
	//배경색상,이름,색깔,폰트크기 저장 
	var storage=localStorage;
	var body=document.querySelector("body") //배경색상(태그) 
	var nameField=document.getElementById("name"); //$('#name')
	var colorField=document.getElementById("color");
	var fontSizeField=document.getElementById("fontSize");
	
	//맨처음 로그인 기본배경색상,글자크기
	var defaultBackground="#ffffff"
	var defaultFontSize=15
	
	//1.storage에 저장
	$('#save').click(function(){
		//로컬객체명.setItem("키명",저장할 값)
		var user={
			name:nameField.value,
			color:colorField.value,
			size:fontSizeField.value
		}
		//로컬객체에 저장하기 위해서 객체-> 문자열로 변환=> JSON.stringfy(객체명)
		storage.setItem(nameField.value,JSON.stringify(user))
		//화면에도 반영
		updateUserInfo(nameField.value,colorField.value,fontSizeField.value)
	})
	//2.storage에 저장된 내용을 삭제 
	$('#remove').click(function(){
		//형식) local객체명.clear() 모두 삭제 -> delete from 테이블명 
		storage.removeItem(nameField.value) //delete from 테이블 where 조건
		updateUserInfo("",defaultBackground,defaultFontSize)
	})
	
	//3. id,color,size 설정해주는 함수작성 ->DB에 저장된 값 출력 
	function updateUserInfo(id,color,size){
		nameField.value=id //사용자 id
		colorField.value=color
		fontSizeField.value=size
		//배경색
		body.style.background=color
		body.style.fontSize=size+"px" //단위설정(html5)
	}
	//4.처음 로그인시 반영할 초기값 설정(=생성자)
	$('#login').click(function(){
		//로컨객체명.getItem("키명")
		var userStr=storage.getItem(nameField.value)
		//문자열-> 객체로 변환시켜서 화면에 반영
		if(userStr){
		//JSON.parse(문자열)=> 객체로 변환
			var userObj=JSON.parse(userStr)
			updateUserInfo(userObj.name,userObj.color,userObj.size)
		}else{ //저장된 값이 없다면 초기값 설정
			updateUserInfo("",defaultBackground,defaultFontSize)
		}
	})
})