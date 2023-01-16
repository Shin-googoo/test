package pja.board;

import java.sql.Timestamp;//날짜와 시간을 설정할 때 사용하는 클래스 - 어디서? DB에서
public class BoardDTO {
	private int num;//입력x)게시물 번호
							//입력o)작성자,글제목,이메일,글내용,암호(글쓰기->본인인증->글수정,글삭제)
	private String writer,subject,email,content,passwd;
	//직접 입력X
	private Timestamp reg_date;//작성날짜=> 오라클에서는 sysdate<->now()(Mysql) 
	private int readcount;//조회수=> 아무도 선택하지 않으면 0이기 때문에 default 0으로 설정
	private String ip;//작성자 ip
	//--------------여기까지 쓰면 공지사항 or 자유게시판-----------------
	//답변형 게시판
	private int ref;//글 그룹번호(=게시물번호와 비슷)
	private int re_step;//답변글의 순서를 지정(=같은 그룹의 답변글 순서)
	private int re_level;//답변글의 답변에 대한 깊이(=depth)
	//파일첨부->String fileName;
	
	//Setter, Getter Method
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
		this.writer = writer;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
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
	
}
