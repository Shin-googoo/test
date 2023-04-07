package spring2;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class HelloApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
      
		Resource resource=new ClassPathResource("/spring2/initContext.xml");
		//2.빈즈공장을 불러와서 객체를 얻어오기
		BeanFactory factory=new XmlBeanFactory(resource);//xml파일의 정보->메모리에 저장
		//3.factory에서 getBean("불러올 객체를 가져올 id값");
		//자바소스코드도 줄이고 소스가 변경돼도 최소한의 소스코드가 변경이 될수 있도록 인터페이스 사용.
		MessageBeanDI bean=(MessageBeanDI)factory.getBean("mBean");
		bean.sayHello();
		
	}
}
