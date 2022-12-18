# ssh每隔一段时间不操作，便会自动断开连接

## 原因：
Linux安全设置问题：如果 60s 内没有任何数据，将会自动断开 SSH 连接。

## 解决方法：
使用 `vim /etc/ssh/sshd_config` 编辑如下两行：
```
# 客户端每隔多少秒向服务发送一个心跳数据
ClientAliveInterval 30
# 客户端多少秒没有相应，服务器自动断掉连接
ClientAliveCountMax 1800
```

## 重启sshd服务
```
service sshd restart
```

## 本文引用
https://blog.csdn.net/qq_28296925/article/details/83828828