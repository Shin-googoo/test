<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>처리하는 페이지</title>
</head>
<body id="test">
<h1 id="t1">XSS DOM연습</h1>
<%
    request.setCharacterEncoding("utf-8");
    String name=request.getParameter("name");
    //1.null값을 체크하는 구문을 작성
    if(name!=null){
    	//2.입력받은 문자열중에서 자바스크립트 구문을 실행시킬수 있는 특수기호를 입력X(<,>)
    	//문자열메서드->replaceAll(1.변경전문자열,2.변경후 문자열)
    	
    	name=name.replaceAll("<","&lt");
    	name=name.replaceAll(">","&gt");
    	//추가 eval(" " or ' ')
    	name=name.replaceAll("\\(","&#40");
    	name=name.replaceAll("\\)","&#41");
    	//"test"  'test'
    	name=name.replaceAll("\"","&quot");
    	name=name.replaceAll("\'","&apos");
    	System.out.println("name=>"+name);
    }else{ //name==null
    	return; //입력을 하지 않았다면 더 이상 실행X
    }
%>
<script>
   eval(<%=name%>)
</script>
</body>
</html>







