package com.data;

//Person테이블을 작성(DTO)
public class Person {
   
	private String id;//회원id
	private String name;//회원명
	private int age;//나이
	
	public Person(String id, String name, int age) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
	}
	public Person() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
}
