<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<%
   //Object->Integer->int
  // int currentPage=(Integer)request.getAttribute("currentPage");
  // int count=(Integer)request.getAttribute("count");//${count}
%>
<html>
<head>
<title>게시판</title>
<link href="style.css" rel="stylesheet" type="text/css">
</head>
<body bgcolor="#e0ffff">
<center><b>글목록(전체 글:${count})</b>
<table width="700">
<tr>
    <td align="right" bgcolor="#b0e0e6">
    <a href="/JspBoard3/writeForm.do">글쓰기</a>
    </td>
</tr> 
</table>
<!-- 데이터의 유무 따라 -->
<c:if test="${count==0}">
<table border="1" width="700" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">게시판에 저장된 글이 없습니다.</td>
	</tr>
</table>
</c:if>
<c:if test="${count > 0}">
<!-- 회원별(회원번호,이름,주소,전화번호 등) -->
<table border="1" width="700" cellpadding="0" cellspacing="0" align="center"> 
    <tr height="30" bgcolor="#b0e0e6"> 
      <td align="center"  width="50"  >번 호</td> 
      <td align="center"  width="250" >제   목</td> 
      <td align="center"  width="100" >작성자</td>
      <td align="center"  width="150" >작성일</td> 
      <td align="center"  width="50" >조 회</td> 
      <td align="center"  width="100" >IP</td>    
    </tr>
    <!-- 실질적으로 데이터를 출력시켜주는 부분 -->
    <c:forEach var="article" items="${articleList}">
    
   <tr height="30"><!-- 하나씩 감소시키면서 출력하는 게시물 번호 -->
    <td align="center"  width="50" >
       <c:out value="${number}" />
       <c:set var="number" value="${number-1}" />
    </td>
    <td  width="250" >
    <!-- 답변글인 경우 먼저 답변 이미지를 부착시키는 코드(회원 리스트면 if~else부분 지우면 됨)--> 
	   <c:if test="${article.re_level > 0}">
		  <img src="images/level.gif" width="${7*article.re_level}" height="16">
		  <img src="images/re.gif">
	  </c:if>
	  <c:if test="${article.re_level == 0}">
	  		<img src="images/level.gif" width="${7*article.re_level}" height="16"><!--일관성 있게-->
	  </c:if> 
   	 <a href="/JspBoard3/content.do?num=${article.num}&pageNum=${currentPage}">
           ${article.subject}</a> 
           <c:if test="${article.readcount>=20}">
              <img src="images/hot.gif" border="0"  height="16">
           </c:if>
         </td>
    <td align="center"  width="100"> 
    <a href="mailto:${article.email}">${article.writer}</a></td><!-- 작성자 -->
    <td align="center"  width="150">${article.reg_date}</td><!-- 작성날짜 -->
    <td align="center"  width="50">${article.readcount}</td><!-- 조회수 -->
    <td align="center" width="100" >${article.ip}</td><!-- 작성자IP -->
  </tr>
  	</c:forEach>
</table>
</c:if>
<!-- 페이징처리(계산) -->
<c:if test="${count > 0}">
	<c:set var="pageCount"
	          value="${count/pageSize+(count%pageSize==0?0:1)}" />
	<c:set var="startPage"
	          value="${currentPage-((currentPage-1)%blockSize)}" />
	<c:set var="endPage" value="${startPage+blockSize-1}" />
	<c:if test="${endPage>pageCount}">
		<c:set var="endPage" value="${endPage=pageCount}" />
	</c:if>
    <c:if test="${startPage>blockSize}">
       <a href="/JspBoard3/list.do?pageNum=${startPage-blockSize}">[이전]</a>
    </c:if>
    <c:forEach var="i" begin="${startPage}" end="${endPage}">
         <a href="/JspBoard3/list.do?pageNum=${i}">[${i}]</a>
    </c:forEach>
    <c:if test="${endPage<pageCount}">
      <a href="/JspBoard3/list.do?pageNum=${startPage+blockSize}">[다음]</a>
    </c:if>
</c:if>
</center>
</body>
</html>