package action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//추가
import lys.board.*;//BoardDAO,BoardDTO 필요
import java.sql.Timestamp;//추가할 부분(시간)

// /writePro.do
public class UpdateProAction implements CommandAction {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		// TODO Auto-generated method stub
		//한글처리
		     request.setCharacterEncoding("utf-8");
		     //추가(수정된 게시물로 이동시키기위해서 필요)
		     String pageNum=request.getParameter("pageNum");
		     System.out.println("UpdateProAction에서의 pageNum=>"+pageNum);//0
		     //--------------------------------------------------------
		     BoardDTO article=new BoardDTO();
		     
		     article.setNum(Integer.parseInt(request.getParameter("num")));
		     article.setWriter(request.getParameter("writer"));
		     article.setEmail(request.getParameter("email"));
		     article.setSubject(request.getParameter("subject"));
		     article.setContent(request.getParameter("content"));//글내용
		     article.setPasswd(request.getParameter("passwd"));
		     
		    BoardDAO dbPro=new BoardDAO();
		    int check=dbPro.updateArticle(article);
		   
		    //2개의 공유값이 필요
		    request.setAttribute("pageNum", pageNum);//수정할 페이지로 이동
		    request.setAttribute("check", check);//데이터 수정성공유무
		    
		return "/updatePro.jsp";
	}
}
