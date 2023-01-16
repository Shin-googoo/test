<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="pja.board.*, java.util.*,java.text.SimpleDateFormat"%>
<!DOCTYPE html>
<%!
	int pageSize=10; //numPerPage 페이지당 보여주는 게시물 수(=레코드 수)(default:10)
	int blockSize=5; //pagePerBlock 블럭 당 보여주는 페이지 수(default:10)
	//작성날짜=>format을 바꾸고 싶다. 년월일 시분초 =>SimpleDateFormat
	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm");
%>
<%
//게시판을 처음 실행하면 무조건 1페이지부터 출력->왜? 가장 최근의 글이 나오게 설정해줬기 때문 
	String pageNum=request.getParameter("pageNum");
	if(pageNum==null){//처음에 1페이지는 내가 누를 수 없기 때문에 parameter값이 null
		pageNum="1";//무조건 default로 1페이지 설정
	}
	//nowPage(현재페이지(클릭해서 보고 있는 페이지))
	int currentPage = Integer.parseInt(pageNum); //if문 안에 넣으면 null인 경우에만 돌아가기 때문에 빼놓기
	//					(1-1)*10+1=1 레코드 번호가 1부터 시작, (2-1)*10+1=11, (3-1)*10+1=21 
	int startRow = (currentPage - 1) * pageSize + 1; //시작 레코드 번호	
	int endRow = currentPage * pageSize;//1*10=10, 2*10=20, 3*10=30

	int count = 0; //총 레코드 수
	int number = 0;//beginPerPage 페이지별로 시작하는 맨 처음에 나오는 게시물 번호

	List articleList = null;//화면에 출력할 레코드를 저장할 변수

	BoardDAO dbPro = new BoardDAO(); //메서드를 출력하기 위함
	count = dbPro.getArticleCount();//select count(*) from board;
	System.out.println("현재 레코드 수(count)=>" + count); //37행에 표현식으로 출력
	//무조건 레코드를 담을 수 있는게 아님 -> 0개면 못 담음 -> 1개라도 있으면 담아서 출력
	if (count > 0) {//최소 만족조건 1 -> 1개라도 레코드가 있으면 담아서 출력해라
		articleList = dbPro.getArticles(startRow, pageSize); //endRow(x)쓰면 안됨. 첫페이지는 10개-> 두번째 페이지 20개씩 보여버림 
		System.out.println("list.jsp의 articleList=>" + articleList);
	}
	//		1페이지	100-(1-1)*10=100,99,98,,,,
	//		2페이지	100-(2-1)*10=90,89,88,,,,
	number = count - (currentPage - 1) * pageSize;
	System.out.println("페이지별 number=>" + number);
%>
<html>
<head>
<title>게시판</title>
<link href="style.css" rel="stylesheet" type="text/css">
</head>
<body bgcolor="#e0ffff">
<center><b>글목록(전체 글:<%=count%>)</b>
<table width="700">
<tr>
    <td align="right" bgcolor="#b0e0e6">
    <a href="writeForm.jsp">글쓰기</a>
    </td>
</tr> 
</table>
<!-- 데이터의 유무 따라 -->
<%
	if(count==0){/*레코드 결과가 0이라면?  */
%>
<table border="1" width="700" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td align="center">게시판에 저장된 글이 없습니다.</td>
	</tr>
</table>
<%}else {%><!-- 레코드 결과가 1개라도 있다면? -->
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
    <%
    	for(int i=0;i<articleList.size();i++){
    		BoardDTO article=(BoardDTO)articleList.get(i); //Vector의 경우 articleList.elementAt(i);
    %>
   <tr height="30"><!-- 하나씩 감소시키면서 출력하는 게시물 번호 -->
    <td align="center"  width="50" ><%=number--%></td>
    <td  width="250" >
    <!-- 답변글인 경우 먼저 답변 이미지를 부착시키는 코드(회원 리스트면 if~else부분 지우면 됨)--> 
	 <%
	 	int wid=0;//공백을 계산하기 위한 변수
	 	if(article.getRe_level()>0){//1 답변글이라면
	 		wid=7*(article.getRe_level());//level이 1이면 7px만큼 안쪽에 공백
	 %>
		  <img src="images/level.gif" width="<%=wid%>" height="16">
		  <img src="images/re.gif">
	  <%}else {%>
	  		<img src="images/level.gif" width="<%=wid%>" height="16"><!--일관성 있게-->
	  <%}%> <!-- 게시판의 기본원칙=>num(게시물번호),pageNum(페이지번호)가 하나의 세트 / 
	  					파라메터 넘기는 건 사이에 공백있으면 NumberFormatExcpetion에러유발-->
   	 <a href="content.jsp?num=<%=article.getNum()%>&pageNum=<%=currentPage%>">
           <%=article.getSubject()%></a> 
           <% if(article.getReadcount()>=20){%>
         <img src="images/hot.gif" border="0"  height="16">
         <%}%>
         </td>
    <td align="center"  width="100"> 
    <a href="mailto:<%=article.getEmail()%>"><%=article.getWriter()%></a></td><!-- 작성자 -->
    <td align="center"  width="150"><%=sdf.format(article.getReg_date())%></td><!-- 작성날짜 -->
    <td align="center"  width="50"><%=article.getReadcount()%></td><!-- 조회수 -->
    <td align="center" width="100" ><%=article.getIp()%></td><!-- 작성자IP -->
  </tr>
  	<%}//for문%>
</table>
<%}//else%>
<!-- 페이징처리(계산) -->
<%
	if(count>0){//레코드가 1개 이상이라면
		//1. 총 페이지 수 구하기 
		//122(레코드수)/10(한 페이지에 보여줄 레코드)=12.2+1.0(자동형변환)=13.2=pageCount 자료형이 int라서 13,(122%10)=1
		int pageCount=count/pageSize+(count%pageSize==0?0:1);
		//2. 시작페이지
		int startPage=0;
		if(currentPage%blockSize!=0){//p1~p9,p11~19,p21~29 //blockSize:블럭당 보여주는 페이지 수
			startPage=currentPage/blockSize*blockSize+1;
		}else{//10/10=0, 10의배수(10,20,30,40,,,)
							//((10/10)-1)*10+1=1
			startPage=((currentPage/blockSize)-1)*blockSize+1;
		}
		//종료페이지
		int endPage=startPage+blockSize-1;//1+10-1=10, stratPage가 11이면 11+10-1=20
		System.out.println("startPage=>"+startPage+", endPage=>"+endPage);
		//블럭별로 구분해서 링크 걸어서 줄력
		//		11				10
		if(endPage>pageCount) endPage=pageCount; 
		//총테이블수=페이지수 마지막페이지=총페이지수 같아야 처리가 됨. 
		//그래서 홍테이블수가 다르면 pageCount를 넣어서 값을 맞춰줘야 한다.
		
		//1)이전블럭(11>10) startPage10-10=0
			if(startPage>blockSize){%>
				<a href="list.jsp?pageNum=<%=startPage-blockSize%>">[이전]</a>
			<% }
		//2)현재블럭(1,2,3,[4],~10)
			for(int i=startPage;i<=endPage;i++){%>
				<a href="list.jsp?pageNum=<%=i%>">[<%=i%>]</a>
			<%}%>
		<!-- 3)미래블럭 => 이전블락이랑 비슷-->
			<%//1~14 < 15
			if(endPage<pageCount){%>
			<a href="list.jsp?pageNum=<%=startPage+blockSize%>">[다음]</a>
		<%
		}//다음블럭
	}//if(count>0
%>
</center>
</body>
</html>