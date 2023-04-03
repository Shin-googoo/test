

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class RedirectServlet
 */
@WebServlet("/RedirectServlet")
public class RedirectServlet extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String query=request.getQueryString();//전달받은 매개변수의 정보도 같이 출력
		System.out.println("query=>"+query);//url=http//www.naver.com
		/* (1)
		if(query.contains("url")) {
			String url=request.getParameter("url");
			response.sendRedirect(url);
		}
		*/
		//(2)개발자가 인정해주는 URL리스트목록을 만들어준다.(화이트리스트)<->블랙리스트(금지사이트)
		String allowURL[]= {"http://www.naver.com",
				                     "http://www.daum.net",
				                     "http://www.empas.com"};
		ArrayList arr=new ArrayList();
		for(int i=0;i<allowURL.length;i++) {
			arr.add(allowURL[i]);
		}
		//외부에서 넘어온값과 비교
		if(query.contains("url")) {
			String url=request.getParameter("url");
			//url에 대한 검증작업
			if(url!=null && url.indexOf("http://")!=-1) {//이동할 페이지가 있다면
				if(!arr.contains(url))//화이트리스트에 포함된 사이트주소가 아니라면
					throw new ServletException("불법사이트로 이동할 수가없습니다.");
				response.sendRedirect(url);
			}//if
		}//outer if
	}//doGet()
}





