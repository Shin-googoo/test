/*
 * 서블릿을 만들 수 있는 조건
 * 
 *   servlet-api.jar
 * 1.import javax.servlet.*;//서블릿 클래스
 *    import javax.servlet.http.*;//웹상에서의 접속에 관련된 정보
 *    
 * 2.반드시 public class로 작성해야 한다.=>외부에서의 접근이 가능하다.(누구나 접속이 가능하다)
 * 3.반드시 HttpServlet클래스를 상속받아야 된다.=>상속=>doGet(),doPost() 기능때문에
 *    get방식(사이트 접속)->doGet()자동으로 호출
 *    post방식으로 요청->doPost() 자동으로 호출
 * 
 */

import java.io.IOException;//입출력에 예외처리 클래스
import java.io.PrintWriter;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;//서블릿의 초기환경설정할때 필요
import javax.servlet.ServletException;//서블릿의 오류발생시 처리해주는 예외처리클래스
import javax.servlet.annotation.WebServlet;//웹상에서 어떻게 접근하는 방법
import javax.servlet.http.HttpServlet;//상속을 받을 서블릿클래스
import javax.servlet.http.HttpServletRequest;//요청을 받아서 처리해주는 객체(request)
import javax.servlet.http.HttpServletResponse;//응답을 받아서 처리해주는 객체(response)

/**
 * Servlet implementation class HelloTest
 */
@WebServlet("/HelloTest")
public class HelloTest extends HttpServlet {
	
	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		System.out.println("서블릿이 실행시 제일먼저 호출되는 메서드(init)");
		System.out.println("생성자와 같은 역할(서블릿의 초기값을 설정)");
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("소스코드를 변경해서 다시 새로고침해서 확인(reload)");
		System.out.println("서블릿이 종료할때(메모리해제할때 사용");
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 * 요청을 받아서 처리해주는 메서드의 조건(request(요청),response(전송)객체가 필요하다)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("웹상에서 get방식으로 접속할때마다 자동으로 호출하는 메서드");
		//1.어떤형태의 문서를 보내줄지 결정
		response.setContentType("text/html;charset=utf-8");//html+한글처리
		//2.PrintWriter out=new PrintWriter();
		PrintWriter out=response.getWriter();//전송해주는 객체
		out.println("<html><head></head>");
		out.println("<body>");
		//3.외부에서 접속했을때 어떻게 보여줄까?
		out.println("<h2>Hello Servlet 테스트</h2>");
		//추가
		out.println("<table border=1>");
		for(int i=2;i<=9;i++) {//행(단)
			out.println("<tr>");
			for(int j=1;j<10;j++) {
				out.println("<td>");
				out.println(i+"*"+j+"="+(i*j));
				out.println("</td>");
			}
			out.println("</tr>");
		}
		out.println("</table>");
		out.println("</body></html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
         System.out.println("웹상에서 post방식으로 접속할때마다 자동으로 호출");
	}

}
