<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	int num=Integer.parseInt(request.getParameter("num"));
	String pageNum=request.getParameter("pageNum");
	String passwd=request.getParameter("passwd");
	System.out.println("deletePro.jsp의 num=>" + num 
			+ ", pageNum=>" + pageNum + ", passwd=>" + passwd);
%>
<jsp:useBean id="bdPro" class="pja.board.BoardDAO" />
<%

int check = bdPro.deleteArticle(num, passwd); 
if (check==1) {//글삭제 성공
%>
<script>
	alert("성공적으로 삭제되었습니다.");
</script>
<meta http-equiv="Refresh" content="0;url=list.jsp?pageNum=<%=pageNum%>">
<%
} else {
%>
<script>
	alert("비밀번호가 맞지 않습니다! \n 비밀번호를 확인해주세요!");
	history.back();
</script>
<%}%>