<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.sql.Timestamp,pja.board.*"%>
<%
	request.setCharacterEncoding("utf-8");
	//BoardDTO => Stter Method (5개) + hdden (4개)
	//BoardDAO => insertArticle() 호출
%>
<jsp:useBean id="article" class="pja.board.BoardDTO" scope="page"/>
<jsp:setProperty name="article" property="*"/>
<%
	//readcount(0)->default 9개에서 readcount는 자동으로 반영, 날짜,원격ip주소
	Timestamp temp=new Timestamp(System.currentTimeMillis()); //타임스템프에 컴퓨터 시간 넣기
	article.setReg_date(temp); //날짜는 액션태그로 호출불가-> 오늘날짜 계산해서 수동으로 저장	
	article.setIp(request.getRemoteAddr());//원격 ip주소 저장
	BoardDAO dbPro=new BoardDAO();
	dbPro.insertArticle(article); //article에 있는 10가지 항목이 들어감
	response.sendRedirect("list.jsp"); //입력한 후 다시 DB접속 -> 새로고침
%>