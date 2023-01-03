<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="hewon.MemberDAO"
    %>
<!DOCTYPE html>
<%
response.setHeader("Cache-Control","no-cache");
response.setHeader("Pragma","no-cache");
response.setDateHeader("Expires",0);
%>
<% 
	//script.js(idCheck())-> IdCheck.jsp?mem_id='nup'
	String mem_id=request.getParameter("mem_id");
	System.out.println("IdCheck.jsp의 mem_id=>"+mem_id); //null

	MemberDAO memMgr=new MemberDAO();
	boolean check=memMgr.checkId(mem_id);
	System.out.println("IdCheck.jsp의 ckeck=>"+check); //true
%>
<html>
<head>
<meta charset="UTF-8">
<title>중복ID 체크 </title>
</head>
<body bgcolor="#ffffcc">
<br>
<center>
<b><%=mem_id %></b>
<%
	if(check){ //이미 존재하는 아이디라면 
		out.println("는 이미 존재하는 아이디입니다.<p>");
	}else {//존재하는 아이디가 아니라면 
		out.println("는 사용가능한 아이디입니다.<p>");
	}
%>
<!-- 자바스크립트에서 자기 자신의 창을 가리키는 예약어 (self) -->
<a href="#" onclick="self.close()">닫기</a>
</center>
</body>
</html>