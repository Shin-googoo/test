package com.data;

import java.util.ArrayList;
import java.util.HashMap;

public class PersonCollection {

	private static ArrayList<Person> list;
	private static PersonCollection instance;

	private PersonCollection() {
		//실제테이블에서 가져와서 Person의 생성자인수에 넣어주면 된다.
	    list = new ArrayList<>();
	    list.add(new Person("1", "홍길동", 20));
	    list.add(new Person("2", "이순신", 30));
	    list.add(new Person("3", "유관순", 40));
	    list.add(new Person("4", "강감찬", 50));
	    
	}

	public static PersonCollection getInstance() {
		if (instance == null) {
			instance = new PersonCollection();//기본적인 데이터저장된 list존재
		}
		return instance;
	}

	public static ArrayList<Person> getList() {
		return list;
	}

	public static void setList(ArrayList<Person> list) {
		PersonCollection.list = list;
	}
}
