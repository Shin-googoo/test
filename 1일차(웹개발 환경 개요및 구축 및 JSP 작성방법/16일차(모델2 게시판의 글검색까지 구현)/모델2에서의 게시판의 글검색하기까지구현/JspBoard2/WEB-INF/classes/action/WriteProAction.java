package action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//추가
import lys.board.*;//BoardDAO,BoardDTO 필요
import java.sql.Timestamp;//추가할 부분(시간)

// /writePro.do
public class WriteProAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		// TODO Auto-generated method stub
		//한글처리
		     request.setCharacterEncoding("utf-8");
		     BoardDTO article=new BoardDTO();
		     
		     article.setNum(Integer.parseInt(request.getParameter("num")));
		     article.setWriter(request.getParameter("writer"));
		     article.setEmail(request.getParameter("email"));
		     article.setSubject(request.getParameter("subject"));
		     article.setPasswd(request.getParameter("passwd"));
		     
		    article.setReg_date(new Timestamp(System.currentTimeMillis()));//오늘 날짜 수동저장
		    article.setRef(Integer.parseInt(request.getParameter("ref")));
		    article.setRe_step(Integer.parseInt(request.getParameter("re_step")));
		    article.setRe_level(Integer.parseInt(request.getParameter("re_level")));
		    
		    article.setContent(request.getParameter("content"));//글내용
		    article.setIp(request.getRemoteAddr());//원격 ip주소 저장
		    
		    BoardDAO dbPro=new BoardDAO();
		    dbPro.insertArticle(article);
		    //response.sendRedirect("http://localhost:8090/JspBoard2/list.do"); 반환값이 없다면
		return "/writePro.jsp";
	}
}
