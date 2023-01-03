<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="hewon.MemberDAO"%>
<jsp:useBean id="memMgr" class="hewon.MemberDAO" />
<%
	//id,passwd를 받아서 loginCheck()호출-> true-> LoginSuccess.jsp
	String mem_id=request.getParameter("mem_id");
	String mem_passwd=request.getParameter("mem_passwd");
	System.out.println("mem_id=>"+mem_id+
								",mem_passwd=>"+mem_passwd);
	//->member-> MemberDAO객체필요-> loginCheck()호출 
	//MemberDAO memMgr=new MemberDAO();
	boolean check=memMgr.loginCheck(mem_id, mem_passwd);
	System.out.println("LoginProc.jsp의 ckeck=>"+check);
%>
<%
//check-> LoginSuccess.jsp(인증화),LogError.jsp(에러메세지)
if(check) {
	session.setAttribute("idKey", mem_id); //키명, 저장할 값(계정id)
	//response.sendRedirect("LoginSuccess.jsp"); //단순이동 공유X 
	response.sendRedirect("Login.jsp"); //after 
}else { //check=false (id 없음 )
	response.sendRedirect("LogError.jsp");
}




%>