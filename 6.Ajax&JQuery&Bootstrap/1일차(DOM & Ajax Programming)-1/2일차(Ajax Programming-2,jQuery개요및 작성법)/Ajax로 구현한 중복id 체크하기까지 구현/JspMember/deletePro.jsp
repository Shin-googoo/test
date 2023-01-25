<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="hewon.MemberDAO" %>
<!DOCTYPE html>      
<%
      //추가 deletePro.jsp?mem_id='nup'&passwd='1234'
      String mem_id=request.getParameter("mem_id");//입력X->hidden
      String passwd=request.getParameter("passwd");//입력 O
      
      System.out.println("deletePro.jsp의 mem_id=>"+mem_id+",passwd=>"+passwd);
      
      MemberDAO memMgr=new MemberDAO();
      int check=memMgr.memberDelete(mem_id,passwd);
      System.out.println("deletePro.jsp의 회원삭제유무(check=>)"+check);
%>
   <%
        if(check==1){//회원삭제에 성공했다면
        	session.invalidate();//세션연결해제
    %>
      <script>
           alert('<%=mem_id%>님 성공적으로 탈퇴처리 되었습니다.');
           location.href="Login.jsp";//mem_id=null->id,passwd인증창
      </script>  	
   <% }else {%>
        <script>
          alert("비밀번호가 틀립니다.\n 다시 한번 확인하시기 바랍니다.");
          history.back();//history.go(-1)
       </script>
   <% } %>











