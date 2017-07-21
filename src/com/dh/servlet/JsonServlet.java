package com.dh.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.dh.bean.Province;

@SuppressWarnings("serial")
public class JsonServlet extends HttpServlet {

	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		//这个是手动书写的json格式，不合适于开发时从数据库中获取到的数据格式。
		//String json = "[{'province':'吉林省'},{'province':'辽宁省'},{'province':'山东省'}]";
		//out.println(json);
		//针对以上问题，引用了第三方包json-lib-2.3-jdk15.jar来解决
		Province p1= new Province(1,"吉林省");
		Province p2= new Province(2,"辽宁省");
		Province p3= new Province(3,"山东省");
		List<Province> list = new ArrayList<Province>();
		list.add(p1);
		list.add(p2);
		list.add(p3);
		//转换
		JSONArray json = JSONArray.fromObject(list);
		System.out.println(json.toString());
		
		out.println(json.toString());
		
		
		
	}

}
