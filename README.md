# fis3
###独立性小项目：例如h5活动，建议采用FIS，现通用FIS3。
###参考网址：http://fis.baidu.com/fis3/docs/beginning/install.html
###Fis3的优点除一般静态资源合并压缩外具备：资源定位、生成独立的项目(类似生成器)、规则覆盖、生成环境(用到规则覆盖)、强刷缓存(MD5时间戳)，图片合成雪碧图(前期写样式的时候规范化)。

安装：
*1.npm install -g fis3。如果长时间没反应建议用cnpm安装。fis3 –v检查是否安装完成。
*2.npm install。安装依赖包,本例子中使用less预处理，合并文件，如有别的需求自行安装。

运行：
1.这里我们分为开发环境(默认)与发布环境。cd 当前项目下
*开发环境：fis3 release -d 发布文件路径与名称；例fis3 release –d output
*发布环境：fis3 release prod –d发布文件路径与名称；例fis3 release prod –d F: output
	
2.一般我们生成的项目因为资源定位会改成绝对路径，本地访问无法正常工作。所以我们使用fis3内置的web server进行调试构建结果。具体执行命令如下
*a)fis3 server open    打开内置web server目录
*b)fis3 release        发布至web server根目录下。一般测试使用开发环境，所以media默认即可
*c)fis3 server start    启动server会自动打开浏览器
*d)fis3 release –wL    自动刷新及监听


注意事项：
*1.如果采用预处理例如less、sass在引用时直接以.less,.scss引入即可
*2.因为fis3有内置的web server，当后端接口没有开发好的时候我们可以创建json文件进行本地模拟接口或者node服务器提供动态模拟数据（启用	node创建http服务）。本例中运行node dynamic.js，启动服务
*3.修改的时候仍旧在原初始化文件，只是生成结果在内置服务器中供调试



本实例仅描述日常所用，有不对之处或补充之处望指摘！！
