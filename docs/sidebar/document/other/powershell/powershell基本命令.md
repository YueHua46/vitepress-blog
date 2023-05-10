# powershell command docs

## 查看所有powershell alias（命令别名）

能够获得所有powershell相关的alias，有助于简化操作

```powershell
gal
```

## 获取指定命令的帮助（同linux相同操作）

查看`mkdir`命令的详细帮助

```powershell
man mkdir
```

## 获得指定command的信息

使用`get-command`（alias为：`gcm`）能够获得指定command的commandType（为function或alias等），name则为其command的操作命令（function或alias有不同信息）信息

[![ppP9Uwd.png](https://s1.ax1x.com/2023/02/28/ppP9Uwd.png)](https://imgse.com/i/ppP9Uwd)

### 限制搜索命令的type

搜索`rd`命令，且只返回alias别名的command

```powershell
gcm rd -commandType Alias
```

## 模糊搜索指定command

模糊搜索mkdir命令

```powershell
help *mkd*
```

如果结果有多个，则显示一个列表，如若只有一个，则直接展示其help页

## 文件和文件夹CRUD

## 新建文件夹

```powershell
mkdir path
```

## 删除文件夹

删除当前目录下`node_modules`文件夹，包括其中所有files，`recurse`代表递归，`force`代表强制不询问

```powershell
rd 'node_modules' -recurse -force
```

## 新建文件

新建一个`hello.txt`文件：

```powershell
ni 'hello.txt'
```

如果存在，则强制覆盖

```powershell
ni 'hello.txt' -force
```

## 删除一个文件

删除一个`hello.txt`文件：

```powershell
rd 'hello.txt'
```

