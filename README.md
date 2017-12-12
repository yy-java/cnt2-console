[console]: https://github.com/yy-java/cnt2-console
[gosdk]: https://github.com/yy-java/cnt2-gosdk
[javasdk]: https://github.com/yy-java/cnt2-javasdk
[etcd]: https://github.com/coreos/etcd
[etcd-cluster-install]: https://github.com/coreos/etcd/blob/master/Documentation/op-guide/clustering.md
[go-install]: https://golang.org/dl/

# cnt2-console

   cnt2-console是cnt2的管理后台

## 管理后台预览

![structure](https://github.com/yy-java/cnt2/blob/master/statics/app.png?raw=true)
![structure](https://github.com/yy-java/cnt2/blob/master/statics/profiles.png?raw=true)
![structure](https://github.com/yy-java/cnt2/blob/master/statics/profile.png?raw=true)
![structure](https://github.com/yy-java/cnt2/blob/master/statics/history.png?raw=true)
![structure](https://github.com/yy-java/cnt2/blob/master/statics/publish.png?raw=true)


## 开始

### 启动Console

	使用ES6 + vue.js + iview实现，通过ajax与httpserver交互。属于一个静态项目，output/文件夹即是整个项目内容，可以使用apache,tomcat,nginx来部署。

	```
		注意：打开output/assets/js/index-{random}.js文件，找到"http://cnt2-api.yourcompany.com"和"http://cnt2-api-test.yourcompany.com"处，修改为你的httpserver测试环境地址和正式环境地址，httpserver默认端口号是8081!
	```
	
 
 


 

