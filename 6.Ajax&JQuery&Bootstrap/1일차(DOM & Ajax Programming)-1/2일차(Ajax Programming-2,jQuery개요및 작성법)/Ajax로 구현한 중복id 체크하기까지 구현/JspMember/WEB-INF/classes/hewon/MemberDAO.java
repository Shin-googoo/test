package hewon;

//웹상에서 호출할 메서드를 작성->DB연결
import java.sql.*;//DB
import java.util.*;//자료구조->Vector,ArrayList,,,

public class MemberDAO {  //DBConnectionMgr ->has a 관계
	
	//1.멤버변수에 연결할 클래스의 객체를 선언
	private DBConnectionMgr pool=null;//getConnection,freeConnection()

	//2.공통으로 접속할 경우 필요로하는 멤버변수
	private Connection con=null;
	private PreparedStatement pstmt=null;//sql실행
	private ResultSet rs=null;//select
	private String sql="";//실행시킬 SQL구문 저장
	
	//2.생성자를 통해서 객체를 얻어오는 구문 작성
	public MemberDAO() {
		try {
			pool=DBConnectionMgr.getInstance();//정적메서드 제공
			System.out.println("pool=>"+pool);
		}catch(Exception e) {
			System.out.println("DB연결 실패=>"+e);//e.toString()
		}
	}//생성자
	
	//1)요구분석에 따른 메서드를 작성->회원로그인
	//1.회원로그인 ->id,passwd
	public boolean loginCheck(String id,String passwd) {
		//1.DB연결
		boolean check=false;
		//2.SQL처리
		try {
			con=pool.getConnection();//만들어진 Connection반환
			System.out.println("con=>"+con);
			sql="select id,passwd from member where id=? and passwd=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, id);
			pstmt.setString(2, passwd);
			rs=pstmt.executeQuery();
			check=rs.next();//데이터가 존재=>true or 없으면 ->false
		}catch(Exception e) {
			System.out.println("loginCheck() 실행 에러유발=>"+e);
		}finally {
			//3.메모리해제
			pool.freeConnection(con, pstmt, rs);//con.close(),pstmt.close(),rs.close()
		}
		return check;
	}
	
	//2.중복id를 체크해주는 메서드
	public boolean checkId(String id) {
		boolean check=false;//초기값
		try {
			con=pool.getConnection();//만들어진 객체를 받아옴
			sql="select id from member where id=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1,id);
			rs=pstmt.executeQuery();
			check=rs.next();//데이터존재 true or 없으면 false
			System.out.println("checkId메서드의 check=>"+check);
		}catch(Exception e) {
			System.out.println("checkId() 실행오류=>"+e);//e.toString()
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return check;
	}
	//3.우편번호->ZipCheck.jsp
	public ArrayList<ZipcodeDTO> zipcodeRead(String area3){
		//레코드 한개이상 담을 변수(객체)선언
		   ArrayList<ZipcodeDTO> zipList=new ArrayList();//필드별로 저장된 DTO 여러개 저장
		   
		   try {
			   con=pool.getConnection();
			   //select * from zipcode where area3 like '미아2동%'
			   sql="select * from zipcode where area3 like '"+area3+"%'";
			   pstmt=con.prepareStatement(sql);
			   rs=pstmt.executeQuery();
			   //검색된 레코드의 값을 필드별로 담는 소스코드->찾은 레코드가 한개 if(rs.next())
			   //                                                                       한개이상->while(rs.next())
			   while(rs.next()) {
				   ZipcodeDTO tempZipcode=new ZipcodeDTO();
				   tempZipcode.setZipcode(rs.getString("zipcode"));//"142-813"
				   tempZipcode.setArea1(rs.getString("area1"));//"서울"
				   tempZipcode.setArea2(rs.getString("area2"));
				   tempZipcode.setArea3(rs.getString("area3"));
				   tempZipcode.setArea4(rs.getString("area4"));
				   //ArrayList에 담는 구문을 담는 구문
				   zipList.add(tempZipcode);//zipList.size()=>14개
			   }
		   }catch(Exception e) {
			   System.out.println("zipcodeRead()에러 유발=>"+e);
		   }finally {
			   pool.freeConnection(con, pstmt, rs);
		   }
		   return zipList;
	}
	
	//4.회원가입->insert into member values(?,?,?,,,)
	public boolean memberInsert(MemberDTO mem) {
		boolean check=false;//회원가입 성공유무
		//rs
		try {
			con=pool.getConnection();
			//--트랜잭션->오라클은 필수
			con.setAutoCommit(false);//default->con.setAutoCommit(true)
			//----------------------------
			sql="insert into member values(?,?,?,?,?,?,?,?)";
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, mem.getMem_id());//(1,'test')
			pstmt.setString(2, mem.getMem_passwd());
			pstmt.setString(3, mem.getMem_name());
			pstmt.setString(4, mem.getMem_email());
			pstmt.setString(5, mem.getMem_phone());
			pstmt.setString(6, mem.getMem_zipcode());
			pstmt.setString(7, mem.getMem_address());
			pstmt.setString(8, mem.getMem_job());
			
			int insert=pstmt.executeUpdate();//반환 1 (성공), 0 (실패)
			System.out.println("insert(데이터 입력유무)=>"+insert);
			con.commit();//실질적으로 메모리상의 insert->테이블에 반영
			if(insert > 0) { //if(insert==1)
				check=true;//데이터 성공확인
			}
		}catch(Exception e) {
			System.out.println("memberInsert() 에러유발=>"+e);
		}finally {
			pool.freeConnection(con,pstmt);
		}
		return check;
	}
	
	//5.회원수정->특정 회원 찾기->nup,kkk,test,,,
	//select * from member where id='nup';
	public MemberDTO getMember(String mem_id) {
		MemberDTO mem=null;//id값에 해당되는 레코드 한개를 저장
		
		try {
			con=pool.getConnection();
			sql="select * from member where id=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, mem_id);
			rs=pstmt.executeQuery();
			//찾은 레코드가 한개라면 if(rs.next()) ->한개이상->while(rs.next())
		    if(rs.next()) {
		    	mem=new MemberDTO();
		    	//찾은 필드값->Setter Method에 저장 ->웹에 출력->Getter Method호출
		    	mem.setMem_id(rs.getString("id"));
		    	mem.setMem_passwd(rs.getString("passwd"));
		    	mem.setMem_name(rs.getString("name"));
		    	mem.setMem_phone(rs.getString("phone"));
		    	mem.setMem_zipcode(rs.getString("zipcode"));
		    	mem.setMem_address(rs.getString("address"));
		    	mem.setMem_email(rs.getString("e_mail"));
		    	mem.setMem_job(rs.getString("job"));
		    }
		}catch(Exception e) {
			System.out.println("getMember()메서드 에러유발=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
	  return mem;
	}
	//6.찾은 데이터를 수정
	public boolean memberUpdate(MemberDTO mem) {
		boolean check=false;//회원수정 성공유무
		//rs
		try {
			con=pool.getConnection();
			//--트랜잭션->오라클은 필수
			con.setAutoCommit(false);//default->con.setAutoCommit(true)
			//----------------------------
			sql="update member set passwd=?,name=?,e_mail=?,phone=?,"
					+"zipcode=?, address=?, job=?  where id=?";
			
			pstmt=con.prepareStatement(sql);
			
			pstmt.setString(1, mem.getMem_passwd());
			pstmt.setString(2, mem.getMem_name());
			pstmt.setString(3, mem.getMem_email());
			pstmt.setString(4, mem.getMem_phone());
			pstmt.setString(5, mem.getMem_zipcode());
			pstmt.setString(6, mem.getMem_address());
			pstmt.setString(7, mem.getMem_job());
			pstmt.setString(8, mem.getMem_id());//(1,'test')
			
			int update=pstmt.executeUpdate();//반환 1 (성공), 0 (실패)
			System.out.println("update(데이터 수정유무)=>"+update);
			con.commit();//실질적으로 메모리상의 insert->테이블에 반영
			if(update==1) { 
				check=true;//수정성공
			}
		}catch(Exception e) {
			System.out.println("memberUpdate() 에러유발=>"+e);
		}finally {
			pool.freeConnection(con,pstmt);
		}
		return check;
	}
	
	//7.회원탈퇴 =>본인=>암호입력<----계정에 저장된 암호비교=>탈퇴
	public int memberDelete(String id,String passwd) { //1.입력X  2.입력 O
		String dbpasswd="";//DB상에서 찾은 암호를 저장
		int x=-1;//회원탈퇴 유무
		
		try {
			con=pool.getConnection();
			con.setAutoCommit(false);//트랜잭션처리
			//1.id값에 해당하는 암호를 먼저 찾기
			pstmt=con.prepareStatement("select passwd from member where id=?");
			pstmt.setString(1, id);
			rs=pstmt.executeQuery();
			//암호가 존재한다면
			if(rs.next()) {
				dbpasswd=rs.getString("passwd");
				System.out.println("dbpasswd=>"+dbpasswd);
				//dbpasswd(DB상에 저장된 암호)==passwd(웹상에서 입력한 값)
				if(dbpasswd.equals(passwd)) {
					pstmt=con.prepareStatement("delete from member where id=?");
					pstmt.setString(1, id);
					int delete=pstmt.executeUpdate();
					System.out.println("delete(회원탈퇴 성공유무)=>"+delete);
					con.commit();
					x=1;//회원탈퇴성공
				}else {
					x=0;//회원탈퇴 실패->암호가 틀려서
				}
			}else {
				x=-1;//암호가 존재하지 않은 경우
			}
		}catch(Exception e) {
			System.out.println("memberDelete() 오류=>"+e);
		}finally {
	        pool.freeConnection(con, pstmt, rs);
		}
		return x;
	}
	//8.회원리스트->총 레코드수->범위를 지정->담을 메서드(10개)
	//1.페이징 처리를 위한 전체레코드수를 구해와야 한다.=>데이터를 출력
	//select count(*) from member; =>반환값 O ,where 조건식X ->매개변수가 X
		public int getMemberCount() {  //getMemberCount()
			int x=0;//총 레코드갯수를 저장
			
			try {
				con=pool.getConnection();
				System.out.println("con=>"+con);//디버깅코드
				sql="select count(*) from member"; //select count(*) from member;
				pstmt=con.prepareStatement(sql);
				rs=pstmt.executeQuery();
				if(rs.next()) {//보여주는 결과가 있다면
					x=rs.getInt(1);  //변수명=rs.get자료형(필드명 또는 인덱스번호)=>필드명X을 사용할 수 없는 경우에 사용
				}
			}catch(Exception e) {
				System.out.println("getMemberCount() 메서드 에러유발"+e);
			}finally {
				pool.freeConnection(con,pstmt,rs);
			}
			return x;
		}

		//2.글목록보기에 대한 메서드구현->레코드가 한개이상->한 페이지당 10개씩 끊어서 보여준다.
		//1) 레코드의 시작번호   2) 불러올 레코드의 갯수
		public List getMemberArticles(int start,int end) {
			
			List articleList=null;//ArrayList articleList=null;
			
			try {
				con=pool.getConnection();
			    /*
			     *회원id을 오름차순으로 각필드별로 정렬하라
			     */
				sql="select * from member order by id limit ?,?";//1,10
				pstmt=con.prepareStatement(sql);
				pstmt.setInt(1, start-1);//mysql은 레코드순번이 내부적으로 0부터 시작
				pstmt.setInt(2, end);
				rs=pstmt.executeQuery();
				//글목록보기
				if(rs.next()) {//레코드가 최소 만족 1개이상 존재한다면
					articleList=new ArrayList(end);//10=>end갯수만큼 데이터를 담을 공간을 생성하라
					do {
						MemberDTO mem=new MemberDTO();//MemberDTO~
						mem.setMem_id(rs.getString("id"));
						mem.setMem_passwd(rs.getString("passwd"));
						mem.setMem_name(rs.getString("name"));
						mem.setMem_phone(rs.getString("phone"));
						mem.setMem_zipcode(rs.getString("zipcode"));
						mem.setMem_address(rs.getString("address"));
						mem.setMem_email(rs.getString("e_mail"));
						mem.setMem_job(rs.getString("job"));
						//추가
						articleList.add(mem);
					}while(rs.next());
				}
			}catch(Exception e) {
				System.out.println("getMemberArticles() 메서드 에러유발"+e);
			}finally {
				pool.freeConnection(con,pstmt,rs);
			}
			return articleList;
		}
}





