<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
   response.setHeader("Access-Control-Allow-Origin","*");//key,value
   response.setHeader("Access-Control-Allow-Credentials","true");
   
   String name=request.getParameter("name");
   System.out.println("name=>"+name);
  
   out.print("jsp에서 보낸 문자열="+name);
%>

