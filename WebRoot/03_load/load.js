window.onload = function(){
	document.getElementById("ok").onclick = function(){
		var xmlHttp = ajaxFunction();
		xmlHttp.onreadystatechange = function(){
		 	//alert(xmlHttp.readyState);
			//alert(xmlHttp.status);
			if(xmlHttp.readyState==1){
				if(xmlHttp.status==200||xmlHttp.status==304){
					alert(xmlHttp.readyState);
					document.getElementById("divcheck").innerHTML = "<img src='./image/loading33.gif'/>正在连接";
					alert("xxx");
				}
			}else if(xmlHttp.readyState==2){
				if(xmlHttp.status==200||xmlHttp.status==304){
					document.getElementById("divcheck").innerHTML = "<img src='./image/loading33.gif'/>正在加载";
					alert("xxx");
				}
			}else if(xmlHttp.readyState==3){
				if(xmlHttp.status==200||xmlHttp.status==304){
					document.getElementById("divcheck").innerHTML = "<img src='./image/loading33.gif'/>正在处理";
					alert("xxx");
				}
			}else if(xmlHttp.readyState==4){
				if(xmlHttp.status==200||xmlHttp.status==304){
					document.getElementById("divcheck").innerHTML = "显示视频页面";
				};
			}else{
				document.getElementById("divcheck").innerHTML = "视频加载失败！";
				
			}
		 };
		xmlHttp.open("POST","../testServlet",true);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlHttp.send(null);
		
		
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