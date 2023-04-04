<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>암호화,복호화 출력</title>
</head>
<jsp:useBean id="enc" class="encrypt.LocalEncrypter" />
<%
    request.setCharacterEncoding("utf-8");//한글처리
    String str=request.getParameter("code");//웹상에서 입력받은 문자열
    String encryptocode=null;//암호화된 문자열
    if(str!=null){
    	encryptocode=enc.returnEncryptCode(str);
    }
%>
<h3>입력받은 코드값:<%=encryptocode %></h3>
<hr />
<%
    String decryptcode=enc.returnDecryptCode(encryptocode);//암호화된 byte[]->String
%>
<h3>복호화된 문자열을 출력:<%=decryptcode %></h3>
<body>

</body>
</html>