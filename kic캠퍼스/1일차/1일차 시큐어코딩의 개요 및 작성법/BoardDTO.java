package lys.board;

import java.sql.Timestamp;//날짜와 시간을 설정할때 사용하는 클래스

public class BoardDTO {

	private int num;//게시물번호
	//--눈에 보이는 상태(입력)
	//                    작성자     글제목   이메일   글내용    암호(->글쓰기->본인 =>글수정,글삭제할때)
	private String writer,subject,email,content,passwd;
	//직접 입력X
	private Timestamp reg_date;//작성날짜->sysdate<->now()(Mysql의 내장함수)
	private int readcount;//조회수->default->0을 부여
	private String ip;//작성자의 ip
	//답변형
	private int ref;//글 그룹번호(=게시물 번호)
	private int re_step;//답변글의 순서를 지정(=같은 그룹일때의 답변글 순서)
	private int re_level;//답변글의 답변에 대한 깊이(=depth)
	//----------------------------------------------------------
	
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = convert(writer);
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		subject=convert(subject);
		this.subject = subject;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = convert(email);
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = convert(content);
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = convert(passwd);
	}
	public Timestamp getReg_date() {
		return reg_date;
	}
	public void setReg_date(Timestamp reg_date) {
		this.reg_date = reg_date;
	}
	public int getReadcount() {
		return readcount;
	}
	public void setReadcount(int readcount) {
		this.readcount = readcount;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public int getRef() {
		return ref;
	}
	public void setRef(int ref) {
		this.ref = ref;
	}
	public int getRe_step() {
		return re_step;
	}
	public void setRe_step(int re_step) {
		this.re_step = re_step;
	}
	public int getRe_level() {
		return re_level;
	}
	public void setRe_level(int re_level) {
		this.re_level = re_level;
	}
	//이 클래스에서만 사용하기위해서 접근지정자 private <,>,(,)=>변경메서드
	private static String convert(String name) {
		if(name!=null){
	    	//2.입력받은 문자열중에서 자바스크립트 구문을 실행시킬수 있는 특수기호를 입력X(<,>)
	    	//문자열메서드->replaceAll(1.변경전문자열,2.변경후 문자열)
	    	
	    	name=name.replaceAll("<","&lt");
	    	name=name.replaceAll(">","&gt");
	    	//추가 eval(" " or ' ')
	    	name=name.replaceAll("\\(","&#40");
	    	name=name.replaceAll("\\)","&#41");
	    	//"test"  'test'
	    	name=name.replaceAll("\"","&quot");
	    	name=name.replaceAll("\'","&apos");
	    }else{ //name==null
	    	return null; //입력을 하지 않았다면 더 이상 실행X
	    }
		return name;
	}
	
}









