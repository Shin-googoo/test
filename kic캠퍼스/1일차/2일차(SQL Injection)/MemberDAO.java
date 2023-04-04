package hewon;
//���󿡼� ȣ��Ǵ� �޼��带 �������ִ� Ŭ����(���� DB�� �����ؾ� �ȴ�.)-�����Ͻ� ������
import java.sql.*;//DB����
import java.util.*;//Vector,ArrayList,HashMap,,,

public class MemberDAO {  //has a ����

	//1.DBConnectionMgr��ü �ʿ�
	private DBConnectionMgr pool=null; //1) ��������� ���� (has a ����)
	
	private Connection con=null;
	private PreparedStatement pstmt=null;//SQL���� �����Ҷ� �ʿ��� ��ü
	private ResultSet rs=null;//select ���� �Ҷ� �ʿ�
	private String sql="";//������ SQL���� ó���ϱ����ؼ� 
	
	//2.has a ����=>�����ڸ� ���ؼ� ��ü�� ���� or �޼��忡�� ��ü�� ����
	public MemberDAO() {
		try {
			pool=DBConnectionMgr.getInstance();
			System.out.println("pool=>"+pool);
		}catch(Exception e) {
			System.out.println("DB���� ����=>"+e);
		}
	}//������
	
	//3.���󿡼� ȣ��Ǵ� ���(ȸ������)
	//1)아이디 확인하는 메서드
	//select id,passwd from member where id='nup' and passwd='1234'
	// int (1 or 0) ,boolean (true or false)
	public  boolean   loginCheck(String id,String passwd) {
		//1.DB연결
		 boolean check=false;//계정존재유무
		//2.SQL구문
		try {
			con=pool.getConnection();
			System.out.println("con=>"+con);
			/* (1) 시큐어코딩을 적용시킨 예
			sql="select id,passwd from member where id=? and passwd=?";
			pstmt=con.prepareStatement(sql);
			pstmt.setString(1, id);//?
			pstmt.setString(2, passwd);
			rs=pstmt.executeQuery();*/
			//(2) 외부로부터 SQLInjection 공격을 당할 수 있다.
			sql="select id,passwd from member where  id='"+id+"'"+" and passwd='"+passwd+"'";
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			System.out.println("sql=>"+sql);
			check=rs.next();//
		}catch(Exception e) {
			System.out.println("loginCheck()������ ��������=>"+e);
		}finally {
		//3.DB���� ����
			pool.freeConnection(con, pstmt, rs);
		}
		return check;//LoginProc.jsp�� ��ȯ=>true->LoginSuccess.jsp
	}
	
	//2)�ߺ�id üũ���
	//select id from member where id='kkk';
		public boolean checkId(String id) {
	     boolean check=false;//�ߺ������� ��������
	     try {
	    	 con=pool.getConnection();
	    	 sql="select id from member where id=?";//sql����
	    	 pstmt=con.prepareStatement(sql);  //NullPointerException
	    	 pstmt.setString(1, id);//���󿡼� �Է¹��� �ߺ�id�� ->index��
	    	 rs=pstmt.executeQuery();
	    	 check=rs.next();//true(�ߺ����� ����), false(�ߺ� ���� ���⿡ ����� ����)
	     }catch(Exception e) {
	    	 System.out.println("checkId()�޼��� ȣ�� ����=>"+e);
	     }finally {
	    	pool.freeConnection(con, pstmt, rs);
	     }
	     return check; 
		}
	//3)�����ȣ �˻�(�ǽð� �˻�)->zipcodeRead
	//select zipcode from zipcode where area3 like  '%����3��%';->String or int,,,
	//select zipcode,area1 from zipcode where area3 like  '%����3��%';  
	//=>�ʵ尡 �Ѱ��̻��� ���� �ڷ���=>ZipcodeDTO
	//select * from zipcode where area3 like  '%����3��%'; ���ڵ尡 �Ѱ��̻�(Vector,ArrayList)
	public Vector<ZipcodeDTO> zipcodeRead(String area3){
		Vector<ZipcodeDTO> vecList=new Vector();
		
		try {
			con=pool.getConnection();
			//sql����
			//sql="select * from zipcode where area3 like  '%����3��%'";
			sql="select * from zipcode where area3 like  '"+area3+"%'";
			pstmt=con.prepareStatement(sql);
			rs=pstmt.executeQuery();
			//�˻��� ���ڵ尹����ŭ ã�� �����Ͱ� ������ ZipcodeDTO�� ��ƶ�
			while(rs.next()) {
				//ZipcodeDTO�� �ʵ庰�� ����=>rs.getString("�ʵ��")=>Setter�� �ʵ庰�� ����
				ZipcodeDTO tempZipcode=new ZipcodeDTO();
				tempZipcode.setZipcode(rs.getString("zipcode"));//�����ȣ
				tempZipcode.setArea1(rs.getString("area1"));
				tempZipcode.setArea2(rs.getString("area2"));
				tempZipcode.setArea3(rs.getString("area3"));
				tempZipcode.setArea4(rs.getString("area4"));
				//���Ϳ� �߰�
				vecList.add(tempZipcode);//������ ������ �� vector,ArrayList�� �߰�����
			}
		}catch(Exception e) {
			System.out.println("zipcodeRead() �����߻�=>"+e);
		}finally {
			pool.freeConnection(con, pstmt, rs);
		}
		return vecList;
	}
	
	//4)ȸ������
	
	//5)ȸ�������ϱ� ���� Ư�� ȸ�������� �˻�
	
	//6)ȸ������
	
	//7)ȸ��Ż��
	
	//8)������->ȸ������Ʈ�� ���=>����¡ ó��->�Խ����� ���ڿ� ����¡ó��
}









