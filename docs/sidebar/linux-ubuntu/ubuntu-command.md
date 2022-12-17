# Linux Ubuntu发行版中的一些基本命令记录

## 优雅的查看进程树
```bash
pstree -p
```
查看经过筛选的进程树
```bash
pstree -p | grep [process name]
```

## 给进程发送信号（中断或其他信号）
### 中断信号
```bash
kill -STOP [pid]
```

## 查看哪些进程在监听端口
```bash
netstat -lntp
```
::: tip
默认是检查 TCP 端口; 添加参数 -u 则检查 UDP 端口
:::
或使用这种方式查看
```bash
lsof -iTCP -sTCP:LISTEN -P -n
```

## 创建常用命令的快捷形式
使用 alias 来创建常用命令的快捷形式。例如： 
```bash
alias ll='ls -Ail'
```
创建了一个新的命令别名 ll

### 使其长期生效
可以把别名、shell 选项和常用函数保存在 ~/.bashrc，这可以使它长期生效，而不会因重登之类的而失去效果
输入：`vim ~/.bashrc`，然后在其末尾编辑别名即可
```bash
...

alias ll='ls -Ail'
```
然后输入：`source ~/.bashrc`，来更新配置

## 交互式的grep利器
percol 是终端中的 交互式 grep 工具
![An image](https://camo.githubusercontent.com/54e241bdce3f31ac70c7fde27137c2d2a67820fe3db70c799d142336e8b4528d/687474703a2f2f6d6f6f7a2e6769746875622e696f2f706572636f6c2f706572636f6c5f6f766572766965772e676966)

install
```bash
sudo apt install percol
```
例如，指定重定向
```bash
ps aux | percol
```
当你通过交互式的grep筛选出结果后，并回车即可将结果输出到标准输出

## 查看服务器资源占用情况
```
htop
```

## 查找文件夹或文件
### 在当前目录下查找一个文件夹或文件
```
find . -iname 'something'
```
### 在所有路径下查找
需要先安装：`sudo apt install locate`
```
locate something
```
没有效果可以敲一遍：`sudo updatedb`来更新索引
::: warning
但注意到 updatedb 可能没有对最近新建的文件建立索引，所以你可能无法定位到这些未被索引的文件
:::
