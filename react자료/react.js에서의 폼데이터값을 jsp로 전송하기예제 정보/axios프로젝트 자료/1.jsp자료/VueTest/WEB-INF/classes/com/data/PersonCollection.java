package com.data;

import java.util.ArrayList;
import java.util.HashMap;

public class PersonCollection {

	private static ArrayList<Person> list;
	private static PersonCollection instance;

	private PersonCollection() {
		//�������̺��� �����ͼ� Person�� �������μ��� �־��ָ� �ȴ�.
	    list = new ArrayList<>();
	    list.add(new Person("1", "ȫ�浿", 20));
	    list.add(new Person("2", "�̼���", 30));
	    list.add(new Person("3", "������", 40));
	    list.add(new Person("4", "������", 50));
	    
	}

	public static PersonCollection getInstance() {
		if (instance == null) {
			instance = new PersonCollection();//�⺻���� ����������� list����
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
