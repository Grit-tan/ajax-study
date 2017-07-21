package com.dh.bean;

public class Province {
	private int id;
	private String province;
	
	
	public Province(int id, String province) {
		super();
		this.id = id;
		this.province = province;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	
}
