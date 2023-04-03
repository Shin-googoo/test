<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사용자로부터 값을 입력</title>
</head>
<body>
 <h1>Reflected XSS</h1>
 <form method="post" action="test.jsp">
   이름:<input type="text" name="name">
   <input type="submit" value="보내기">
 </form>
</body>
</html>






