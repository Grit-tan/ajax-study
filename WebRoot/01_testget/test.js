//当页面加载完毕之后，执行的方法
window.onload = function(){
	var btn = document.getElementById("ok");
	btn.onclick = function(){
		/**
		 *1.创建XMLHttpRequest对象
		 */
		var xmlHttp = ajaxFunction();
		
		/**
		 * 2.服务器向浏览器响应请求
		 *  * readyState 属性表示Ajax请求的当前状态。它的值用数字代表。
				0 代表未初始化。 还没有调用 open 方法
				1 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
				2 代表已加载完毕。send 已被调用。请求已经开始
				3 代表交互中。服务器正在发送响应
				4 代表完成。响应发送完毕
			常用状态码及其含义：
				404 没找到页面(not found)
				403 禁止访问(forbidden)
				500 内部服务器出错(internal service error)
				200 一切正常(ok)
				304 没有被修改(not modified)(服务器返回304状态，表示源文件没有被修改 )
		 */	
		xmlHttp.onreadystatechange = function(){
		 	alert(xmlHttp.readyState);
			//alert(xmlHttp.status);
			if(xmlHttp.readyState==4){
				if(xmlHttp.status==200||xmlHttp.status==304){
					var data = xmlHttp.responseText;//对应于servlet的out.println("get server connection success!!!!!");
					alert(data);
				}
			}
		 };
		
		/**
		 *3.浏览器和服务器建立连接
		 *   xmlHttp.open(method,url,asynch);
		 *   *method:请求方式get/post
		 *   *url:请求路径
		 *   *asynch:
		 *   通过时间的方法使得每次的请求路径不一样，防止请求的是缓存数据
		 *    xmlHttp.open("GET","../testServlet?timestamp="+new Date().getTime()+"&c=5",true);
		 */
		xmlHttp.open("GET","../testServlet?c=5",true);
		
		
		/**
		 * 4.浏览器和服务器发送请求
		 * send()方法，如果浏览器请求的方式为get方法，则服务器无法接收到它发送的数据
		 */
		xmlHttp.send("a=6&b=9");
		
		
	};
};

function ajaxFunction(){
	   var xmlHttp;
	   try{ // Firefox, Opera 8.0+, Safari
	        xmlHttp=new XMLHttpRequest();
	    }
	    catch (e){
		   try{// Internet Explorer
		         xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		      }
		    catch (e){
		      try{
		         xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		      }
		      catch (e){}
		      }
	    }

		return xmlHttp;
};