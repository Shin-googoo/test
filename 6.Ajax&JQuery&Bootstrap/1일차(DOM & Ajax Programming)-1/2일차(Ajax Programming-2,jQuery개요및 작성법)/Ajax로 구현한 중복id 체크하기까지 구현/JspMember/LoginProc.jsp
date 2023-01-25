<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="hewon.MemberDAO" %>
    
<jsp:useBean id="memMgr" class="hewon.MemberDAO" />
<%
    String mem_id=request.getParameter("mem_id");
    String mem_passwd=request.getParameter("mem_passwd");
    System.out.println("mem_id=>"+mem_id+",mem_passwd=>"+mem_passwd);
    //->member->MemberDAO객체필요=>loginCheck()호출
    //MemberDAO memMgr=new MemberDAO();
    boolean check=memMgr.loginCheck(mem_id, mem_passwd);
%>
<%
   //check->LoginSuccess.jsp(인증화면) ,LogError.jsp(에러메세지)
   if(check){//if(check==true) 인증성공
	   session.setAttribute("idKey",mem_id);//키명,저장할값(id계정이름)
	   //response.sendRedirect("LoginSuccess.jsp"); before
	   response.sendRedirect("Login.jsp");//after
   }else{//id가 없다면
	   response.sendRedirect("LogError.jsp");//에러메세지 출력
   }
%>














