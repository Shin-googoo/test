package spring2;

public class MessageBeanImplDI implements MessageBeanDI {

	//DI를 이용해서 객체를 가져오는 방법->저장(멤버변수)
	private String name1,name2;//생성자를 통해서 저장(constructor injection)
	private String greeting;//Setter Method (Setter Injection)
	
	//1.<constructor-arg>태그를 통해서 값을 임의로 지정해서 값을 전달
	public MessageBeanImplDI(String name1, String name2) {
		this.name1 = name1;//this.name1="대한민국";
		this.name2 = name2;//this.name2="서울";
		System.out.println("MessageBeanImplDI 생성자 호출됨!");
	}
    //2.<property>태그를 이용해서 호출->임의값을 전달
	public void setGreeting(String greeting) {
		this.greeting = greeting;//this.greeting="안녕";
		System.out.println("setGreeting() 호출됨!");
	}

	@Override
	public void sayHello() {
		// TODO Auto-generated method stub
        String message=greeting+name1+","+name2+"!";
        System.out.println("message=>"+message);
	}

}
