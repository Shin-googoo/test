package hewon;

//웹상에서 호출할 메서드를 작성->DB연결된 후 호출(->has a 관계 )
import java.sql.*; //DB연결 
import java.util.*; //vector,ArrayList~ 

public class MemberDAO {

	//1. 멤버변수에 연결할 클래스의 객체를 선언 
	private DBConnectionMgr pool=null; 
	//getConnection()=>Connection필요,freeConnection
	
	//1.1) 공통으로 접속할 경우 필요로하는 멤버변수
	private Connection con=null;
	private PreparedStatement pstmt=null; //sql 실행목적
	private ResultSet rs=null; //select
	private String sql=""; //실행시킬 SQL구문 저장목적 
	
	//2.생성자를 통해서 자동으로 객체를 얻어올 수 있도록 연결
	public MemberDAO() {
		try {
			pool=DBConnectionMgr.getInstance();
			System.out.println("pool=>"+pool);
		}catch(Exception e) {
			System.out.println("DB연결실패=>"+e); //e.toString()
		}
	}
	
	//3.요구분석에 따른 웹상에서 호출할 메서드를 작성 
	//1)회원로그인->id,passwd 
	//반환값 => int(1 or 0),boolean(true or false)=> 메모리 적게 사용 
	//SQL구문 
	//select id,passwd from member where id='nup' and passwd='1234';
	//select구문=>반환값O where조건식-> 매개변수 O 
	public boolean loginCheck(String id,String passwd) {
		//1. DB연결 
		boolean check=false; 
		//2. SQL구문 
		try {
			con=pool.getConnection(); //이미 만들어진 Connection 반환 
			System.out.println("con=>"+con);
			sql="select id,passwd from member where id='?' and passwd=?";
			pstmt=con.prepareStatement(sql); //실행시킬 sql구문 
			pstmt.setString(1, id);
			pstmt.setString(2, passwd);
			rs=pstmt.executeQuery();
			//rs.next()-> 데이터가 존재 true or 없으면 false 
			check=rs.next();
			
		}catch(Exception e) {
			System.out.println("loginCheck() 실행에러유발=>"+e);
		}finally {//3.메모리해제 
			pool.freeConnection(con, pstmt, rs);
		}
		return check; //LoginProc.jsp에서 받아서 페이지 이동할때 사용 
	}
	
	//2)중복 id를 체크해주는 기능 
	//select id from member where id='kkk'
	public boolean checkId(String id) {
		boolean check=false; //지역변수
		try {
			con=pool.getConnection();
		sql="select id from member where id=?"; //sql구문 먼저확인
		pstmt=con.prepareStatement(sql);
		pstmt.setString(1,id); //index~ 에러유발 
		rs=pstmt.executeQuery(); //select구문을 호출할때 사용하는 메서드 
		check=rs.next(); //데이터가 존재하면 true or 없으면 false 
		}catch(Exception e) {
			System.out.println("checkId() 실행오류=>"+e);
		}finally {//메모리 해제 
			pool.freeConnection(con, pstmt, rs);
		}
		return check; //IdCheck.jsp에게 반환(전달해주는 역할)
	}
	
	//3)우편번호를 검색 -> 직접 테이블생성-> 입력=> 찾는 방법 or OpenAPI
	//ZipCodeDAO(X)
	//select * from zipcode where area3 like '%미아2동%';
	public ArrayList<ZipcodeDTO> zipcodeRead(String area3){
		//레코드 한개이상 담을 변수(객체) 선언 
		ArrayList<ZipcodeDTO>zipList=new ArrayList(); //미리생성 
		try {
			con=pool.getConnection();
			//sql="select * from zipcode where area3 like '%미아2동%'";
			sql="select * from zipcode where area3 like '"+area3+"%'";
			pstmt=con.prepareStatement(sql); //NullPointerException
			rs=pstmt.executeQuery();
			//검색된 레코드의 값을 필드별로 담는 소스코드를 작성 
			//찾은 레코드가 한개 if(rs.next()) 한개이상(while(rs.next())
			System.out.println("검색된 sql구문 확인=>"+sql);
			
			while(rs.next()) {
				//저장된 데이터를 getter메서드로 불러오게 쉽게하기 위해서 
				ZipcodeDTO tempZipcode=new ZipcodeDTO();
				tempZipcode.setZipcode(rs.getString("zipcode"));
				tempZipcode.setArea1(rs.getString("area1"));//<-> getArea1()
				tempZipcode.setArea2(rs.getString("area2"));
				tempZipcode.setArea3(rs.getString("area3"));
				tempZipcode.setArea4(rs.getString("area4"));
				//ArrayList에 담는 구문을 작성 꼭 할것.
				zipList.add(tempZipcode); //ZipCheck.jsp(null) 없으면 
				////////////////////////////
			}
		}catch(Exception e) {
			System.out.println("zipcodeRead() 실행오류=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return zipList; //ZipCheck.jsp에서 메서드의 반환값-> for문 
	}
	
	//4) 회원 가입
	
	//5) 회원 수정 -> 특정 회원 찾기 
	
	//6) 찾은 회원을 수정 
	
	//7) 회원 탈퇴 
	
	//8) 회원리스트-> 과제(게시판의 글목록보기)=> 관리자 
	
	
}
