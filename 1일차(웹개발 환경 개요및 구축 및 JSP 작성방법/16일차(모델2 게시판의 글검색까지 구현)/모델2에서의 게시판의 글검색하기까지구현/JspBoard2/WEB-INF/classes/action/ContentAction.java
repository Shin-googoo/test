package action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//추가
import lys.board.*;

// content.jsp에 바로 요청->메서드를 호출->처리결과->공유->jsp로 이동
// /content.do?num=3&pageNum=1
public class ContentAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		// TODO Auto-generated method stub
		//처리할 내용
		  //글상세보기=>게시판(상품의 정보를 자세히(SangDetail.jsp))
		  //list.jsp에서 링크,num,pageNum
		  int num=Integer.parseInt(request.getParameter("num"));//게시물번호
		  String pageNum=request.getParameter("pageNum");//페이지 번호
		  System.out.println("ContentAction의 pageNum=>"+pageNum+",num=>"+num);
		 
	
		  BoardDAO dbPro=new BoardDAO();//메서드 호출목적
		  BoardDTO article=dbPro.getArticle(num);//조회수 증가,레코드 한개
		  //링크문자열의 길이를 줄이기위해서
		  int ref=article.getRef();
		  int re_step=article.getRe_step();
		  int re_level=article.getRe_level();
		  System.out.println("content.do의 매개변수 확인");
		  System.out.println("ref=>"+ref+",re_step=>"+re_step+",re_level=>"+re_level);
		
		  //2.처리결과를 서버의 메모리에 저장->request->jsp에 ${키명}
		  request.setAttribute("num", num);//${num}
		  request.setAttribute("pageNum", pageNum);
		  request.setAttribute("article", article);//${article}->각각의 필드분리
		  
		return "/content.jsp";
	}

}
