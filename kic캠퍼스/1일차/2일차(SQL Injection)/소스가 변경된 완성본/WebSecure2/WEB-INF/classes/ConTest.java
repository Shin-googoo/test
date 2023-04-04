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
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		
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

