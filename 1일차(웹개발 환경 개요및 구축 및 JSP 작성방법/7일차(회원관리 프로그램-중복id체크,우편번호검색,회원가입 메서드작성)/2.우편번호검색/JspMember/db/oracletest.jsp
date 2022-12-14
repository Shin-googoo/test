<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>오라클 DB접속 확인</title>
</head>
<body>
<%
	//현재 접속해서 들어와 있는 상태=> 커넥션객체를 얻어온 상태 
	 Connection con=null;
     //형식) jdbc:oracle:thin:@상대방의 접속ip주소:접속포트번호:SID
     //String url="jdbc:oracle:thin:@localhost:1521:orcl";//접속 오라클의 위치
     String url="jdbc:oracle:thin:@localhost:1521:xe";
     Statement stmt=null;//create table                sql문장 
     PreparedStatement pstmt=null;//insert into    sql문장
     Statement stmt2=null;//select ~ 					 sql문장
     ResultSet rs=null;//select 검색결과를 표형태로 
     String sql="";//sql구문을 저장
     
     try {
     	//1.접속할 드라이버를 메모리에 올리기(상위패키지.하위패키지...클래스명)
   	  Class.forName("oracle.jdbc.driver.OracleDriver");
   	  //2.접속하기위해서 인증 ->1.접속경로 2.계정명 3.암호
   	  con=DriverManager.getConnection(url,"scott","tiger");
   	  System.out.println("접속 con=>"+con);
   	  //3.테이블을 생성->create table->stmt
   	  stmt=con.createStatement();
   	  sql="create table MyTest33(name varchar2(20),age number)";
   	  int create=stmt.executeUpdate(sql);
   	  System.out.println("테이블 성공유무(create)=>"+create); //0
   	  
   	  //4.insert 
   	  //sql="insert into Mytest values(?,?)";
   	  pstmt=con.prepareStatement("insert into Mytest33 values(?,?)"); //?는 입력값 
   	  //형식)pstmt객체명.setString(or setInt,setDouble,,,(?의 순서,입력할값)
   	  //pstmt.setString(1,request.getParameter("name"));
   	  pstmt.setString(1,"hong"); //pstmt.setString(1,tf1.getText())
   	  pstmt.setInt(2, 23);
   	  //pstmt.setInt(2,Integer.parseInt(request.getParameter("age")))
   	  int insert=pstmt.executeUpdate();
   	  System.out.println("데이터가 입력성공유무(insert)="+insert);
   	  //5.select->필드별로 출력해서 결과 보기
   	  stmt2=con.createStatement();
   	  String sql2="select * from MyTest33";//* ->테이블의 만들어진 필드순서대로
   	  rs=stmt2.executeQuery(sql2);
   	  %>
   	  <table border="1" cellspacing="0" cellpadding="0">
   	  <tr bgcolor="pink">
   	  	<th>name</th><th>age</th>
   	  </tr>
   	  <%
   	  while(rs.next()) {//이동시킬 레코드가 계속 존재하는한
   		  %>
   		  <tr><!-- 데이터를 계속 불러올 수 있다면 <tr>생성 -->
   			  <td><%=rs.getString("name") %></td>
   		 	  <td><%=rs.getInt(2) %></td>
   		  </tr>
   	  <% }
   	   rs.close();//con->stmt->pstmt->stmt2->rs
   	   stmt2.close();pstmt.close();stmt.close();con.close();
   	  //6.메모리 해제->에러유발과 상관없이 반드시 처리하고 프로그램 종료
     }catch(Exception e) { //SQLException(SQL구문실행오류)
     	System.out.println("DB접속에 실패했거나 SQL구문이 잘못됨=>"+e);
     }
	%>
	</table>
</body>
</html>