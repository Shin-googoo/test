package com.data;

//Person���̺��� �ۼ�(DTO)
public class Person {
   
	private String id;//ȸ��id
	private String name;//ȸ����
	private int age;//����
	
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
