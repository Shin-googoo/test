<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="com.data.*,java.util.*" %>
<%
   //Angular요청(JSON표기법 형태)->요청을 수락(JSONP 서비스)
   response.setHeader("Access-Control-Allow-Origin","*");//key,value
   //1.객체생성
   PersonCollection collection=PersonCollection.getInstance();
   ArrayList<Person> list=collection.getList();//테이블에 저장된 데이터
   //[{"id":"홍길동","name":"홍길동","age":23},,,] ->app.component.html
   //String->+->StringBuffer->String전환
   StringBuffer buffer=new StringBuffer();//String buffer="";문자열 결합+=(메모리 낭비)
   
   buffer.append("[");
   	  for(int i=0;i<list.size();i++){
   		  Person p=list.get(i);// *ngFor="let p of list"
   				  String mesg="{";
   				  mesg+="\"id\":\""+p.getId()+"\",";
   				  mesg+="\"name\":\""+p.getName()+"\",";
   				  mesg+="\"age\":\""+p.getAge()+"\"";
   				  mesg+="}";
   				  buffer.append(mesg);//4->0,1,2,3
   				  //인덱스번호가 맨 마지막이 아니라면(중간이라면) ,를 붙여달라
   				  if(i!=list.size()-1) buffer.append(",");//append()=>"+"
   	  }
   buffer.append("]");
   System.out.println(buffer.toString());//결합된 문자열을 반환받는경우->~.toString()
   //앵귤러서버에게 데이터를 전송
   out.print(buffer.toString().trim());//공백을 제거한 상태에서 앵귤러에게 데이터를 전송
   
%>



