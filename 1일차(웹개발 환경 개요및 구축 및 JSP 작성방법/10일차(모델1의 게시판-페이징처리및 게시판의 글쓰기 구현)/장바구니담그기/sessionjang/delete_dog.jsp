<%@ page contentType="text/html;charset=EUC_KR"
        import ="java.util.*,dog.DogBean"
%>

<% 
//���� dog_cart.jsp�� �������� ������ų ���� ���� �Ķ���� ����
//
String dogName=request.getParameter("dogName");
if(dogName==null)//��ٱ��� ���� ���
{
//��ٱ��� ����(������ ����)
session.invalidate();//������ ��� ���� �޼ҵ�-->������ �����ϴ� �ڵ� �߰��� ����.
response.sendRedirect("kim_shop.html");
}
else //Ư�� ������ ������ ���
{
  Vector dogVector=(Vector)session.getAttribute("dogList");

//������ų �׸��� ���Ϳ��� ã��...
for(int i=0;i<dogVector.size();i++)
{
  DogBean dog=(DogBean)dogVector.elementAt(i);
   if(dogName.equals(dog.getName()))//�������� �̸��� ���� ���
	{    
      dogVector.removeElementAt(i);//������ ���� ���Ž�Ų��.
  break;//ù��°���� ������ �׸��� ���� ��찡 �ֱ⿡...break...���Ѽ� �������´�.
	}
  }
   session.setAttribute("dogList",dogVector);
   response.sendRedirect("dog_cart.jsp");//���߿� �ٲܿ�����...
}

%>
