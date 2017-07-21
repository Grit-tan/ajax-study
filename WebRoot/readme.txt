ajax:
	* 同步交互和异步交互：
		* 同步交互：客户端发送请求——>等待服务器端处理——>接收响应，这个过程客户端不能做任何其他事情，这种模式叫做同步交互
		* 异步交互：客户端发送请求——>等待服务器端处理——>接收响应，这个过程客户端不用等待结果，可以做其他事情，这种模式叫做异步交互
		
	* ajax的定义：允许客户端与服务器进行通信，而无须刷新整个页面的技术叫做ajax。
	
	* 对比传统web模式与ajax模式的区别：
		* 传统web模式：客户端与服务器通信，交互的是整个页面
		* ajax模式：客户端与服务器通信，交互的是数据层面的
		
	* ajax的工作原理：在客户端与服务器进行通信的时候，客户端的请求首先发送给"ajax引擎"，再由"ajax引擎"发送到服务器端
	
	* XMLHttpRequest对象：是使用ajax技术的关键
	
	* 实现ajax的步骤：
		* 创建XMLHttpRequest对象
			* 见附件"获取xmlhttpQequest对象.txt"
		* 注册监听
			* 利用XMLHttpRequest对象的onreadystatechange属性来监听服务器的通信状态：
			* 服务器的通信状态具体由XMLHttpRequest对象的readyState属性来获取
				* readyState 属性表示Ajax请求的当前状态。它的值用数字代表。
					0 代表未初始化。 还没有调用 open 方法
					1 代表正在加载。 open 方法已被调用，但 send 方法还没有被调用
					2 代表已加载完毕。send 已被调用。请求已经开始
					3 代表交互中。服务器正在发送响应
					4 代表完成。响应发送完毕
			* 再利用XMLHttpRequest对象的另一个属性status，来获取访问服务器端是否正确
				* 常用状态码及其含义：
					404 没找到页面(not found)
					403 禁止访问(forbidden)
					500 内部服务器出错(internal service error)
					200 一切正常(ok)
					304 没有被修改(not modified)(服务器返回304状态，表示源文件没有被修改 )
			
			* 接收服务器的响应数据：
				* 文本格式：利用XMLHttpRequest对象的responseText属性来接收；
				* xml格式：利用XMLHttpRequest对象的responseXML属性来接收；
				* json格式：利用XMLHttpRequest对象的responseText属性来接收，再利用eval()函数进行转换。
					* 利用"{}"开始和结尾的，相当于map集合
					* 利用"[]"开始和结尾的，相当于数组
					
		* 与服务器建立连接
			* 利用XMLHttpRequest对象的open(method,url,asynch)方法
				* method：请求类型，"GET"或者"POST"
				* url：请求路径
				* asynch：是否异步加载，true是异步加载
				
		* 如果请求类型时"POST"方式的话，需要设置请求首部信息
			* 利用XMLHttpRequest对象的setRequestHeader()方法
				* xhr.setRequestHeader("Content-type","application/x-www-form-urlencode")
				
		* 向服务器发送请求数据
			* 利用XMLHttpRequest对象的send()
				* 如果是"GET"请求类型的话，send()方法向服务器发送请求数据，服务器接收不到
				* 如果是"POST"请求类型的话，send()方法向服务器发送请求数据，服务器可以接收
		
		
		
		* 服务、服务器、中间件、servlet：
			* 服务：发布后的工程
			* 服务器：硬件承载容器，实际上就是电脑硬件
			* 中间件：tomcat、weblogic[oracle]、webshpere[IBM]
			* servlet：服务上，具体处理相关内容的文件
			
			
			
				
			
			
			