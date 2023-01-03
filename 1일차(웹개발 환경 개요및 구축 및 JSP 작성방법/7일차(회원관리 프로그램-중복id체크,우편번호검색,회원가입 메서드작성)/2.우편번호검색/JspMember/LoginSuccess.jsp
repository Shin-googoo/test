<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
//로그인 했는지 안했는지를 체크 -> include 지시어를 이용해서 파일로 불러오기 
//session.setAttribute("idKey", mem_id) LoginProc.jsp거침?
	String mem_id=(String)session.getAttribute("idKey");
	System.out.println("LoginSuccess.jsp의 mem_id=>"+mem_id);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>인증성공 페이지(LoginSuccess.jsp)</title>
</head>
<body>
<%
	//Login.jsp->LoginProc.jsp->LoginSuccess.jsp 
	if(mem_id!=null){//인증된 사람이라면 
	}
%>
<b><%=mem_id %></b>님 환영합니다.<P>
당신은 제한된 기능을 사용할 수가 있습니다.<p>
<a href="Logout.jsp">로그아웃</a>
<% } else { %>
<script>
	alert("로그인 먼저 해주세요!");
</script>
<% } %>
</body>
</html>