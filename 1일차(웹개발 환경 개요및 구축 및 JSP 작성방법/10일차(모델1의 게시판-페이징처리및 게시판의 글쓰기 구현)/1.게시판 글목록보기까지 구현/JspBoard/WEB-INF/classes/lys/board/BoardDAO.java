package lys.board;
//DBConnectionMgr(DB접속,관리),BoardDTO(매개변수,반환형,데이터를 담는 역할)

import java.sql.*;//DB사용
import java.util.*;//ArrayList,List을 사용

public class BoardDAO { //MemberDAO

	private DBConnectionMgr pool=null;//1.연결객체선언
	//공통
	private Connection con=null;
	private PreparedStatement pstmt=null;
	private ResultSet rs=null;//select
	private String sql="";//실행시킬 SQL구문 저장
	
	//2.생성자를 통해서 연결=>의존관계
	public BoardDAO() {
		try {
			pool=DBConnectionMgr.getInstance();
		}catch(Exception e) {
			System.out.println("DB접속 오류=>"+e);
		}
	}//생성자
	
	//1.페이징 처리를 위한 전체레코드수를 구해와야 한다.
	//select count(*) from board;    select count(*) from member
	public int getArticleCount() { //getMemberCount() ->MemberDAO에서 작성
		int x=0;//총레코드갯수를 저장
		try {
			con=pool.getConnection();
			System.out.println("con=>"+con);
			sql="select count(*) from board";
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			if(rs.next()) {//보여주는 결과가 있다면
				x=rs.getInt(1);//변수명=rs.get자료형(필드명 또는 인덱스번호)=>필드명X(그룹함수)
			}
		}catch(Exception e) {
			System.out.println("getArticleCount() 에러유발=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return x;
	}
	//2.글목록보기에 대한 메서드구현->레코드 한개이상->한 페이지당 10개씩 끊어서 보여준다.
	//1)레코드의 시작번호  2) 불러올 레코드의 갯수
	public List getArticles(int start,int end) {//getMemberList(int start,int end){
		
		List articleList=null;//ArrayList articleList=null;//(O)
		
		try {
			con=pool.getConnection();
			/*
			 * 그룹번호가 가장 최신의 글을 중심으로 정렬하되,만약에 level이 같은 경우에는
			 * step값으로 오름차순을 통해서  몇번째 레코드번호를 기준해서 몇개까지 정렬할것인가를
			 * 지정해주는 SQL구문
			 */
			sql="select * from board order by ref desc,re_step limit ?,?";
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, start-1);//mysql은 레코드순번이 내부적으로 0부터 시작
			pstmt.setInt(2, end);//불러와서 담을 갯수
			rs=pstmt.executeQuery();
			if(rs.next()) {//보여주는 결과가 있다면
				articleList=new ArrayList(end);//10=>end갯수만큼 데이터를 담을 공간을 만들어라
				do {
				  BoardDTO article=new BoardDTO();//MemberDTO=>필드별로 담을것.
				  article.setNum(rs.getInt("num"));
				  article.setWriter(rs.getString("writer"));
				  article.setEmail(rs.getString("email"));
				  article.setSubject(rs.getString("subject"));
				  article.setPasswd(rs.getString("passwd"));
				  
				  article.setReg_date(rs.getTimestamp("reg_date"));//오늘날짜->코딩
				  article.setReadcount(rs.getInt("readcount"));//조회수 default->0
				  article.setRef(rs.getInt("ref"));//그룹번호->신규글과 답변글을 묶어주는 역할
				  article.setRe_step(rs.getInt("re_step"));//답변글이 나오는 순서
				  article.setRe_level(rs.getInt("re_level"));//들여쓰기(답변의 깊이)
				  
				  article.setContent(rs.getString("content"));//글내용
				  article.setIp(rs.getString("ip"));//글쓴이의 ip주소->request.getRemoteAddr()
				  //추가
				  articleList.add(article);//생략하면 데이터가 저장X->for문 에러유발
				}while(rs.next());
			}
		}catch(Exception e) {
			System.out.println("getArticleCount() 에러유발=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return articleList;
	}
	
	
	
	
	
	
}
