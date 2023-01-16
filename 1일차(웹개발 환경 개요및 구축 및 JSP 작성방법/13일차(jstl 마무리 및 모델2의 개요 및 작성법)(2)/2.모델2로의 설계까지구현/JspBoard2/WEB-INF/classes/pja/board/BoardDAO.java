package pja.board;

//DBConnectionMgr(DB접속,관리),
//BoardDTO(매개변수,반환형으로 사용 or 데이터를 담는 역할로 사용)
import java.sql.*;
import java.util.*;//ArrayList, List사용
public class BoardDAO {
	//1.연결할 클래스 객체선언
	private DBConnectionMgr pool=null;
	//공통
	private Connection con=null;
	private PreparedStatement pstmt=null;
	private ResultSet rs=null;//select는 반환값이 있기 때문에 그 반환값을 담기 위함
	private String sql=""; //실행시킬 sql구문 저장용
	
	//2. 생성자를 통해서 서로 연결
	public BoardDAO() {
		try {
			pool=DBConnectionMgr.getInstance(); //DB연결얻어오기
		}catch(Exception e) {
			System.out.println("DB접속 오류=>"+e);
		}
	}//생성자
	
	//페이징처리 : 전체 레코드 수를 구해서 화면에 뿌려는 것
	//1. 페이징처리를 하기 위해서는 전체 레코드 수를 반드시 구해와야한다. 
	//=>레코드를 전부 한 페이지에 보여줄 수 없기 때문에 적절히(ex. 한 페이지당 10개씩) 끊어서 보여주는 기법
	//select count(*) from board; 반환형O 매개변수X
	public int getArticleCount() {//회원리스트getMemberCount()->MemberDAO
		int x=0;
		try {
			con=pool.getConnection();
			System.out.println("con=>"+con);//DBConnectionMgr
			sql="select count(*) from board";//select count(*) from member;
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			if(rs.next()) {//보여주는 결과가 있다면
				x=rs.getInt(1);//변수명=rs.get자료형(필드명 또는 인덱스명) 
										//--> count(*)은 필드명이 아니기 때문에 index 번호로 불러와야 함.
			}
		}catch(Exception e) {
			System.out.println("getArticleCount() 에러발생=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return x;
	}
	//2. 글 목록보기에 대한 메서드 구현=>레코드 한 개 이상은 끊어서 보여준다=>한페이지당10개씩
	//---> 잘라서 보여주는 메서드가 필요함.  n번째부터 ~ n번째까지 보여 범위 지정을 위해 매개변수 start, end필요
	//public List getMemberList(int start,int end) -> int start 레코드 시작번호, int end불러올 레코드의 갯수(10씩 보여주고 싶어? int end=10) end기준으로 생각
	public List getArticles(int start,int end) {
		List articleList=null; //ArrayList<BoardDTO> articleList=null (o)
		try {
			con=pool.getConnection();
			/*
			 * 그룹번호가 가장 최신의 글을 중심으로 정렬하되, 만약에 
			 * level값이 같은 경우 step값이 오름차순을 통해서
			 * 몇 번째 레코드 번호를 기준해서 몇 개까지 정렬할 것인가를 지정해주는 sql구문
			 */
			sql="select * from board order by ref desc,re_step limit ?,?";//?,? => A and B //그룹번호=게시물번호역할도 하기 떄문에 가능
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, start-1);//mysql은 레코드 번호 순번이 내부적으로 0부터 시작하기 때문에
			pstmt.setInt(2, end); //몇 개까지 불러와서 담을 건가? default(10)
			rs=pstmt.executeQuery();
			//기존에 데이터가 있으면 누적해서 쌓아 올려야한다.
			if(rs.next()) {//화면에 보여줄 데이터가 있으면
				articleList=new ArrayList(end); //end갯수만큼 공간을 생성해라
				do {
					BoardDTO article=new BoardDTO(); //회원리스트면 MemberDTO
					article=makeArticleFromResult();
					//필드별로 setter메서드를 통해 각각 넣어준다. like 분리수거
					/*
					article.setNum(rs.getInt("num"));//게시물번호
					article.setWriter(rs.getString("writer"));//작성자
					article.setEmail(rs.getString("email"));//이메일
					article.setSubject(rs.getString("subject"));//제목
					article.setPasswd(rs.getString("passwd"));//암호
					
					article.setReg_date(rs.getTimestamp("reg_date"));//작성날짜는 자동으로 계산해서 넣어준다.
					article.setNum(rs.getInt("num"));//게시물번호
					article.setReadcount(rs.getInt("readcount")); //default 0
					article.setRef(rs.getInt("ref"));//그룹번호
					article.setRe_step(rs.getInt("re_step"));//답변달리는 순서(y축)
					article.setRe_level(rs.getInt("re_level"));//답변의 깊이, 들여쓰기(x축) 숫자가 커지면 답변이 많이 달렸다는 뜻
					
					article.setContent(rs.getString("content"));//글 내용
					article.setIp(rs.getString("ip"));//글쓴이의 ip주소
					*/
					//추가
					articleList.add(article);//생략하면 데이터 저장X => for문X(Null)
				}while(	rs.next());//더 있으면 계속
			}
		}catch(Exception e) {
			System.out.println("getArticles() 에러발생=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return articleList; //list.jsp에서 반환 -> for문 테이블에 출력
	}
	
	//게시판에 글쓰기 및 답변 글쓰기 -> 메서드 하나로 통합
	//insert into board values(?,,,); --> insert into는 원래 반환값이 없어서 void
	public void insertArticle(BoardDTO article) {//(회원가입의 MemberDTO mem과 같다)
		//1. 넘어온 article이 신규글인지 답변글인지 확인하는 절차가 필요->
		int num=article.getNum(); //0이면 신규글, 0이 아니면 답변글 -->구분용도
		int ref=article.getRef();
		int re_step=article.getRe_step(); //답변글 순서
		int re_level=article.getRe_level(); //답변글 depth
		
		//num과 number의 차이? num은 신규글인지 답변글인지 구분하는 용도, number는 데이터 저장용도
		int number=0; //데이터를 저장하기 위한 게시물 번호
		System.out.println("insertArticle()의 내부 number=>"+num); //디버깅
		System.out.println("ref=>"+ref+", re_step=>"+re_step+", re_level=>"+re_level);//디버깅
		
		try {
			con=pool.getConnection();
			sql="select max(num) from board"; //지금까지 가지고 있는 게시물 번호의 최대값을 구함
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			if(rs.next()) {//데이터가 들어있는 경우(게시물O)
				number=rs.getInt(1)+1; //최댓값+1, max는 필드명이 아니기 때문에 인덱스 번호로 지정할 수 있음. 
			}else {//데이터가 들어있지 않은 경우(게시물X)=>0=>게시물 번호를 넣어줘야함(신규)
				number=1;
			}
			//답변글이라면 update(공간 만들고)->insert(끼어들기)
			if(num!=0) {//게시글 번호가 0이 아니면 답변글
				sql="update board set re_step=re_step+1 where ref=? and re_step=?"; //상대가 만약2라면 2+1 시키고 내가 2번 차지
				pstmt=con.prepareStatement(sql);
				pstmt.setInt(1, ref);
				pstmt.setInt(2, re_step);
				int update=pstmt.executeUpdate();
				System.out.println("댓글 수정 유무(update)=>"+update);//반환값 1성공 or 0실패
				//답변글 step값이 증가하면 level값도 반드시 증가한다. 둘이 세트! 
				re_step=re_step+1;
				re_level=re_level+1;
			}else {//신규글이라면 num=0
				ref=number; //그룹번호가 게시물 번호 역할을 한다.
				re_step=0;
				re_level=0; 
			}
			//12개 =>num,reg_date,readcount(생략)->default
			//작성날짜=> 오라클은 system, MySQL은 now() 
			sql="insert into board(writer,email,subject,passwd,reg_date,";
			sql+="ref,re_step,re_level,content,ip) values(?,?,?,?,?,?,?,?,?,?)"; //기존에 있는 sql에 누적해서 
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, article.getWriter());//웹에서 이미 저장된 상태
			pstmt.setString(2, article.getEmail());
			pstmt.setString(3, article.getSubject());
			pstmt.setString(4, article.getPasswd());
			pstmt.setTimestamp(5, article.getReg_date()); 
			//5번째에 해당하는 pstmt.setTimestamp(5, article.getReg_date()); 를 안쓰고 싶으면?
			//5번째 value에 ? 대신 now() 쓸 수 있다. values(?,?,?,?,now(),?,?,?,?,?)";
			//-------------article.getRef()를 쓰면 안되는 이유? ---------------------------
			//ref, re_step, re_level은 내가 직접 입력하는 값이 아닌 계산된 값을 넣어야 한다. 
			// 변경된 값을 반영해야 하는데 getRef()해버리면 계산된 값이 안 들어간다.
			pstmt.setInt(6, ref); 
			pstmt.setInt(7, re_step);//0 -> 0을 직접 넣을 수 없는 이유? 이 메서드가 신규글 전용이 아니라서
			pstmt.setInt(8, re_level);//0
			//---------------------------------------------------------------------------
			pstmt.setString(9, article.getContent());
			pstmt.setString(10, article.getIp());//request.getRemoteAddr(); 간접으로 입력받음
			int insert=pstmt.executeUpdate();
			System.out.println("insertArticle() 에러발생=>"+insert);
		}catch(Exception e) {
			System.out.println("insertArticle() 에러발생=>"+e);
		}finally{
			pool.freeConnection(con, pstmt, rs); //보통 insert면 rs가 없지만 sql구문을 여러개 넣을거라서 필요
		}
	}
	
	//글 상세보기
	//contnet.jsp?num=3&pageNum=1
	//형식) 해당 게시물 넘버로 게시물 검색 select * from board where num=3;
	//형식2) 게시물의 조회수 변경 update board set readcount=readcount+1 where num=3;
	//조회수 수정 -> 조회수 수정된 게시물 검색해서 화면에 출력, 검색한 다음에 수정하면 새로고침해야되서 수정 후 검색하는 게 나음
	public BoardDTO getArticle(int num) {
		BoardDTO article=null; //ArrayList<BoardDTO> article=null; (제너릭)
		try {
			con=pool.getConnection();
			sql="update board set readcount=readcount+1 where num=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, num);
			int update=pstmt.executeUpdate();
			System.out.println("조회수 증가유무(update)=>"+update);
			sql="select * from board where num=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs=pstmt.executeQuery();
			if(rs.next()) {
				article=makeArticleFromResult();
				/*
				article=new BoardDTO();
				
				article.setNum(rs.getInt("num"));//게시물번호
				article.setWriter(rs.getString("writer"));//작성자
				article.setEmail(rs.getString("email"));//이메일
				article.setSubject(rs.getString("subject"));//제목
				article.setPasswd(rs.getString("passwd"));//암호
				
				article.setReg_date(rs.getTimestamp("reg_date"));//작성날짜는 자동으로 계산해서 넣어준다.
				article.setNum(rs.getInt("num"));//게시물번호
				article.setReadcount(rs.getInt("readcount")); //default 0
				article.setRef(rs.getInt("ref"));//그룹번호
				article.setRe_step(rs.getInt("re_step"));//답변달리는 순서(y축)
				article.setRe_level(rs.getInt("re_level"));//답변의 깊이, 들여쓰기(x축) 숫자가 커지면 답변이 많이 달렸다는 뜻
				
				article.setContent(rs.getString("content"));//글 내용
				article.setIp(rs.getString("ip"));//글쓴이의 ip주소
				*/
			}
		}catch(Exception e) {
			System.out.println("getArticle() 에러발생=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return article;
	}
	//------중복된 레코드 한 개를 담을 수 있는 메서드를 따로 만들어서 처리--------
	//접근 지정자는 private =>왜? 외부에서 호출목적X  내부에서 호출목적O
	private BoardDTO makeArticleFromResult() throws Exception {//getter method
		BoardDTO article=new BoardDTO();

		article.setNum(rs.getInt("num"));//게시물번호
		article.setWriter(rs.getString("writer"));//작성자
		article.setEmail(rs.getString("email"));//이메일
		article.setSubject(rs.getString("subject"));//제목
		article.setPasswd(rs.getString("passwd"));//암호
		
		article.setReg_date(rs.getTimestamp("reg_date"));//작성날짜는 자동으로 계산해서 넣어준다.
		article.setNum(rs.getInt("num"));//게시물번호
		article.setReadcount(rs.getInt("readcount")); //default 0
		article.setRef(rs.getInt("ref"));//그룹번호
		article.setRe_step(rs.getInt("re_step"));//답변달리는 순서(y축)
		article.setRe_level(rs.getInt("re_level"));//답변의 깊이, 들여쓰기(x축) 숫자가 커지면 답변이 많이 달렸다는 뜻
		
		article.setContent(rs.getString("content"));//글 내용
		article.setIp(rs.getString("ip"));//글쓴이의 ip주소
		
		return article;
	}
	
	//----------------------------------------------------------------------
	//글 수정하기
	//1) 수정할 데이터를 찾을 메서드 = select * from member where num=? => 글상세보기랑 거의 같음=>조회수 증가부분만 삭제시켜주면 사용가능
	public BoardDTO updateGetArticle(int num) {
		BoardDTO article=null; //ArrayList<BoardDTO> article=null; (제너릭)
		try {
			con=pool.getConnection();
			//조회수 증가 시키는 코드를 삭제
			sql="select * from board where num=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs=pstmt.executeQuery();
			if(rs.next()) {
				article=makeArticleFromResult();
			}
		}catch(Exception e) {
			System.out.println("updateGetArticle() 에러발생=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return article;
	}
	
	// 2) 수정할 메서드 작성=>본인인증확인절차=>회원탈퇴(암호를 비교=>탈퇴)
	// update board set writer=?,subject=?,email=?,content=?,passwd=? where num=?";
	public boolean updateArticle(BoardDTO article) {
		boolean check = false;
		String dbpasswd = ""; //db에서 저장한 글의 암호를 저장
		try {
			con = pool.getConnection();
			sql = "select passwd from board where num=?"; //게시물 번호는 파라메터 값으로 넘어온다.
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, article.getNum()); //num은 article에 들어있기 때문에 getter메서드를 부른다.
			rs = pstmt.executeQuery();
			if (rs.next()) {//찾는 암호가 존재한다면?
				dbpasswd = rs.getString("passwd");
				System.out.println("dbpasswd=>" + dbpasswd);
				if (dbpasswd.equals(article.getPasswd())) {//db상의 암호와 input box에 입력된 암호가 같다면?
					sql = "update board set writer=?,subject=?,email=?,content=?,passwd=? where num=?";
					pstmt = con.prepareStatement(sql);
					pstmt.setString(1, article.getWriter());
					pstmt.setString(2, article.getSubject());
					pstmt.setString(3, article.getEmail());
					pstmt.setString(4, article.getContent());
					pstmt.setString(5, article.getPasswd());
					pstmt.setInt(6, article.getNum());
					int update = pstmt.executeUpdate();
					System.out.println("글 수정 성공유무(update)=>" + update);
					if (update == 1)
						check = true;
				} else {
					System.out.println("입력된 암호=>" + article.getPasswd());
					System.out.println("DB상의 암호와 입력한 암호가 다릅니다.");
				}
			}
		} catch (Exception e) {
			System.out.println("updateArticle() 에러발생=>" + e);
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return check;
	}
	
	//글 삭제=>암호 비교=>delete from board where num=?
	public int deleteArticle(int num, String passwd) {
		String dbpasswd="";
		int x=-1; //게시물의 삭제성공유무
		try {
			con = pool.getConnection();
			sql = "select passwd from board where num=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, num);
			rs = pstmt.executeQuery();
			if (rs.next()) {//찾는 암호가 존재한다면?
				dbpasswd = rs.getString("passwd");
				System.out.println("dbpasswd=>" + dbpasswd);
				if (dbpasswd.equals(passwd)) {//dbpasswd=passwd
					sql = "delete from board where num=?";
					pstmt = con.prepareStatement(sql);
					pstmt.setInt(1, num);
					int delete = pstmt.executeUpdate();
					System.out.println("글 삭제 성공유무(delete)=>" + delete);
					x=1;//삭제 성공
				} else {//dbpasswd≠passwd
					System.out.println("입력된 암호=>" + passwd);
					x=0;//암호가 틀린 경우
				}
			}
		}catch(Exception e) {
			System.out.println("deleteArticle() 에러발생=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return x;
	}
	
}
