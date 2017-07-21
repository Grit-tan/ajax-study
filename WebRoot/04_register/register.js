window.onload = function(){
	document.getElementById("checkusername").onclick = function(){
		var username = document.getElementById("username").value;
		var xmlHttp = ajaxFunction();
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState==4){
				if(xmlHttp.status==200||xmlHttp.status==304){
					var data = xmlHttp.responseText;
					 document.getElementById("divcheck").innerHTML=data; 
				};
			}
		 };
		xmlHttp.open("POST","../registerServlet?t="+new Date().getTime()+"",true);
		xmlHttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlHttp.send("username="+username);//必须得这样写，后台才能request获取到；
		
		
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