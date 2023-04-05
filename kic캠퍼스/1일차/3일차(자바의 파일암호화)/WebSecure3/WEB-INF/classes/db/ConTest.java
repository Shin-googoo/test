package db;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ConTest
 */
@WebServlet("/ConTest")
public class ConTest extends HttpServlet {
	
	//id,passwd,file
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			                  throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out=response.getWriter();
		//입력받아서 처리
		String id=request.getParameter("id");
		String pwd="";
		String decrypt=request.getParameter("decrypt");//암호화할 파일명
		//Properties파일에서 불러올 키값을 변수 선언
		String _driver,_url,_user,_password;
		
		if(pwd==null || "".equals(pwd)) {
		try {
				//C:\webtest\11.secure\test
		String location="C:/webtest/11.secure/test/dboracle.properties";
		String location2="C:/webtest/11.secure/test/"+decrypt;//임의로 만들어준다.
		System.out.println("location2->"+location2);
		
		//1)DB파일 설정 파일->암호화시켜서 암호화 파일 생성
		Crypt.encryptFile(location, location2); //원본파일명, 생성할 암호화파일명
		
		//2.원본 파일 지우기
		 //File f=new File(location);
		 //f.delete();//원본파일을 삭제
		 //3.복호화 시키기위해서 암호화된 파일 불러오기
		//C:\webtest\4.jsp\sou\WebSecure2\WebContent\back
		Crypt.decryptFile(location2, 
				"C:/webtest/sou/WebSecure3/src/main/webapp/back/jdbc22.properties");//암호화된 파일명,복원파일명
		//복원된 파일->Properties객체를 생성->메모리에 올려서 각 키를 꺼내기
		Properties props=new Properties();
    	FileInputStream in=
    			new FileInputStream("C:/webtest/sou/WebSecure3/src/main/webapp/back/jdbc22.properties");
        props.load(in);//메모리에 로드
        in.close();
        //
        _driver=props.getProperty("jdbc.drivers");
        //시스템에 적용
        if(_driver!=null) System.setProperty("jdbc.drivers", _driver);
        _url=props.getProperty("jdbc.url");
        _user=props.getProperty("jdbc.username");
        _password=props.getProperty("jdbc.password");
        System.out.println("_driver=>"+(_driver)+",_url=>"+(_url));
        System.out.println("_user=>"+(_user)+",_password=>"+(_password));
		//----------------------------------------------------------------------
        //DB연결 테스트
        Connection con=DBConnect(_url,_user,_password);
        if(con!=null) {
        	out.println("DB접속에 성공했습니다.=>"+con);
        }
        //----------------------------------------------------------------------
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	} //doPost()
	
	public static Connection DBConnect(String _url,String _user,String _password){
		Connection conn=null;
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn=DriverManager.getConnection(_url,_user,_password);
			System.out.println("conn="+conn);
		}catch(Exception e){
			System.out.println("DB연결실패="+e);
		}
		return conn;
	}
}