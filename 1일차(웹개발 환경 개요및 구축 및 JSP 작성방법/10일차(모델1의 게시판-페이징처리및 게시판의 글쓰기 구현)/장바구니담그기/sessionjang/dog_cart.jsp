<%@page contentType="Text/html; charset=EUC_KR"
import="java.util.*,dog.DogBean,java.text.DecimalFormat"
%>
<%
//���� get���� post���� �Ǻ�
Vector dogVector=null;
if(request.getMethod().equalsIgnoreCase("GET")){
	dogVector = (Vector)session.getAttribute("dogList");
}else{
	//�������ͷ� �Ѿ���� ������ ������ �޴´�.
	//��ٱ��Ͽ� ���� �������̸�, ����, ����....
	String dogName = request.getParameter("dogName");
	int dogCount = Integer.parseInt(request.getParameter("dogCount"));
	double dogPrice = Double.parseDouble(request.getParameter("dogPrice"));
	//check����
	//System.out.println(dogName + "|" + dogCount + "|" + dogPrice);

	//���� ���Ͱ� ���ǿ� ���õ� �ڵ�
	//ObjectŸ������ ����ȯ�ؼ� �޴´�. �콬 ���̺��� �ޱ� ������
	dogVector = (Vector)session.getAttribute("dogList");
	//���� ó������ �������� ��� �����
	//���Ͱ� �η� ���������� ��������
	if(dogVector == null){
		dogVector=new Vector(1,1);//���ͻ���
	}else{
		for(int check=0;check<dogVector.size();check++){
			if((((DogBean)dogVector.elementAt(check)).getName()).equals(dogName)){
				dogCount+=((DogBean)dogVector.elementAt(check)).getCount();
				dogVector.removeElementAt(check);
			//DogBean temp=(DogBean)dogVector.elementAt(check);
			//if((temp.getName()).equals(dogName)){
			//	dogCount+=temp.getCount();
			//	dogVector.removeElementAt(check);
			}
		}
	}


	//���Ϳ� ������ ���

	dogVector.addElement(new DogBean(dogName,dogCount,dogPrice));


	//���ǿ� ���� ���
	session.setAttribute("dogList",dogVector);
}
%>

<HTML>
<HEAD>
<TITLE>��ٱ��� ����...</TITLE>
<style type=text/css>
a:link {color:#FFFFFF}
a:visited {color:#FFFFFF}
a:hover {color:#00FF00}
a.m1 {font-size : 9pt; text-decoration : underline; COLOR: #0000FF}
a.m1:visited {font-size : 9pt; text-decoration : underline; COLOR: #0000FF}
a.m1:active {font-size : 9pt; text-decoration : underline; COLOR: #0000FF}
a.m1:hover {font-size : 9pt; text-decoration : underline; COLOR: #FF3300}
a.m2 {font-size : 10pt; text-decoration : none}
a.m2:visited {font-size : 10pt; text-decoration : none}
a.m2:active {font-size : 10pt; text-decoration : none}
a.m2:hover {font-size : 10pt; text-decoration : none}
.menu {color: #ffffff; font-size: 11pt; font-weight: bold; }
.t1 {font-size : 9pt; line-HEIGHT:140%;}
.t2 {font-size : 10pt;}
.TXTFLD {FONT-SIZE:9pt; COLOR:#000000; BORDER:1x SOLID #000000}
.TXTFLD1 {FONT-SIZE:9pt; COLOR:#000000; BORDER:0 SOLID #000000}
</style>
</HEAD>
<BODY>
<table width=80% border=0 cellspacing=0 cellpadding=0 align=center>
<tr valign=middle bgcolor=#556b2f>
<td height=25 align=center class=menu>::::: ���� ��ٱ��� :::::</td>
</td>
</tr>
</table>
<br>
<table align=center border=1 width=80% cellspacing=0 bordercolordark=#FFFFFF bordercolorlight=#4682b4>
<tr>
<td width=290 height=25 bgcolor=#4682b4 align=center class=t1><font color=#FFFFFF>������ �̸�</font></td>
<td width=112 height=25 bgcolor=#4682b4 align=center  class=t1><font color=#FFFFFF>�� ��</font></td>
<td width=166 height=25 bgcolor=#4682b4 align=center class=t1><font color=#FFFFFF>�� ��</font></td>
<td width=50 height=25 bgcolor=#4682b4 align=center class=t1><font color=#FFFFFF>�� ��</font></td>
</tr>

<%
DecimalFormat d=new DecimalFormat("##,###.##");
double total=0;
//���Ϳ� ��� ������ŭ ���ڵ带 �ݺ��Ѵ�.
for(int i=0;i<dogVector.size();i++){
	DogBean dog=(DogBean)dogVector.elementAt(i);
	total += (dog.getCount()*dog.getPrice());
	%>

<tr>
<td width=290 height=26 align=center class=t1><%=dog.getName()%></td>
<td width=112 height=26 align=center  class=t1><%=dog.getCount()%></td>
<td width=166 height=26 align=center class=t1><%=(dog.getCount()*dog.getPrice())%></td>
<td width=50 height=26 align=center class=t1><a href=delete_dog.jsp?dogName=<%=dog.getName()%>  class=m1>����</a></td>
</tr>
	<%
}
%>
<tr>
<td width=640 colspan=4 height=26 class=t1>
<p align=right><font color=#FF0000>�� �ݾ� : <%=d.format(total)%>��</font></p></td>
</tr>
</table>
<p align=center><a href=BuyServlet class=m1>���� ��������</a>&nbsp;&nbsp;<a href=delete_dog.jsp class=m1>��ٱ��� ����</a>&nbsp;&nbsp;<a href=kim_shop.html class=m1>��� �����ϱ�</a></p>
</BODY>
</HTML>
