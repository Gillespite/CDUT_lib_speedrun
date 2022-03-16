# CDUT_lib_speedrun
成都理工大学图书馆自动预约脚本v2.0

每61分钟预约一次图书馆(因为60分钟自动取消预约）

### 运行环境
1.nodejs
2.node-fetch

### ~~使用方法(旧)~~
~~1. 用chrome打开预约地址 进入开发模式的network抓包 点预约时对新出现的js文件 右键 点复制为nodejsfetch~~
~~2. 复制到people1内 覆盖原来的 并把body的timestamp改为“now” 如果不清楚就看看本来是什么样的 按照那个格式改就好(多人就自己按照模版写people2 people3)~~
~~3. 在linux主机终端输入 nohup node test.js >/dev/null 2>&1 &~~
~~4. 如果想每日运行 就加到bashrc里或者添加定时任务~~

### 使用方法(新)
1. 图书馆公众号->个人中心->入馆预约->长按识别二维码->右上角三个点->复制链接
2. 复制到的链接为http://mlib.cdut.cn/yy/WxYy2.aspx?openId=一串字符&timestamp=1647427780
3. 把那一串字符放到js文件里的openIdList里面,可以放多个人的
4. 如果想每日运行 就加到bashrc里或者添加定时任务
