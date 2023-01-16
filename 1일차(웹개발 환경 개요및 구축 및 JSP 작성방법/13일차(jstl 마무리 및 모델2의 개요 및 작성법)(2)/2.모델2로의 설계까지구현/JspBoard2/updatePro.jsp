<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="bdPro" class="pja.board.BoardDAO" />
<jsp:useBean id="article" class="pja.board.BoardDTO" />
<jsp:setProperty name="article" property="*" />
<%
	int num = Integer.parseInt(request.getParameter("num"));
	String pageNum = request.getParameter("pageNum");
	boolean check = bdPro.updateArticle(article); 
	
	System.out.println("updatePro.jsp의 회원수정유무(check)=>" + check);
%>
<%
if (check) {
%>
<script>
alert("성공적으로 수정되었습니다.");
//글이 수정되면 수정된 글 상세페이지로 이동
location.href="content.jsp?num=<%=num%>&pageNum=<%=pageNum%>";
</script>
<%-- 
<metta http-equiv="Refresh" content="0;url=list.jsp?pageNum=<%=pageNum%>"> 
			http-equiv="Refresh" --->새로고침 새로 이동하는 페이지로 새로고침하라
			content="0초(즉시 이동);url=이동할 페이지명=전달할매개변수명=전달할값" 
--%>
<%
} else {
%>
<script>
	alert("비밀번호가 맞지 않습니다! \n 비밀번호를 확인해주세요!");
	history.back();
</script>
<%}%>