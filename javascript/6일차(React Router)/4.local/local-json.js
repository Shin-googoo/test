/**
 * jQuery(local-json.js)
 */

$(function(){
	//로컬스토러지객체 생성->배경색상,이름,색깔,폰트크기 저장
	var storage=localStorage;//로컬스트러지객체
	var body=document.querySelector("body")//배경색상때문
	var nameField=document.getElementById("name")//$('#name')
	var colorField=document.getElementById("color")
	var fontSizeField=document.getElementById("fontSize")
	
	//맨처음에 로그인했을때 기본배경색상,글자크기
	var defaultBackground="#ffffff"
	var defaultFontSize=15
	
	//1.storage에 저장
	$('#save').click(function(){
		//로컬스토러지.setItem("키명",저장할값)
		/* 개별로 저장
		storage.setItem("name",nameField.value)
		storage.setItem("fcolor",colorField.value)
		storage.setItem("fsize",fontSizeField.value)
		*/
		//------------------------------------------------------------------------
		var user={
				name:nameField.value,
				color:colorField.value,
				size:fontSizeField.value
		}
		//로컬스토러지에 저장하기위해서 객체=>문자열로 변환=>JSON.stringify(객체명)
		storage.setItem(nameField.value,JSON.stringify(user))
		//-------------------------------------------------------------------------
		//화면에 반영
		updateUserInfo(nameField.value,colorField.value,fontSizeField.value)
	})
	//2.storage에서 저장된 내용을 삭제
	$('#remove').click(function(){
		//형식) 로컬스토러지객체명.clear() 모두 삭제->delete from 테이블명;
		//storage.clear()
		//형식)로컬스토러지객체명.removeItem(키명)
		storage.removeItem(nameField.value)
		//화면도 기본화면으로 다시 초기화 작업
		updateUserInfo("",defaultBackground,defaultFontSize)
	})
	//3.id,color,size설정해주는 함수작성=>DB에 저장된값을 화면에 출력(양방향 동기화)
	function updateUserInfo(id,color,size){
		//DB에 저장된 값을 화면에 출력
		nameField.value=id;//사용자id
		colorField.value=color;
		fontSizeField.value=size;
		//화면에 반영(최상위속성명.하위속성명=저장할값)
		body.style.background=color;
		body.style.fontSize=size+"px";//단위설정(html5)
	}
	//4.처음 로그인시 반영할 초기화 설정해주는 함수(=생성자역할)=>componentWillMount(){}와 기능이 같다
	$('#login').click(function(){ //function init(){
		//1.로컬스트러지객체명.setItem("키명",저장할값)<->~.getItem("불러올 키명")(DB의 값)
		var userStr=storage.getItem(nameField.value) //계정명
		if(userStr){//계정명이 존재한다면
			//저장된 문자열->객체로 다시 변환시켜서 화면에 반영
			//형식) JSON.parse(문자열)===>객체로 변환
			var userObj=JSON.parse(userStr)
			updateUserInfo(userObj.name,userObj.color,userObj.size)//객체명.키명
		}else{//저장된 값이 없다면 초기값 설정
			updateUserInfo("",defaultBackground,defaultFontSize)//계정없고,흰색,15px
		}
	})//	
})





