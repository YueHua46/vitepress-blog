# Windows PowerShell设置命令别名alias

## 非永久别名

### 获取所有alias别名

> get-alias

### 修改指定别名

> set-alias aliasName command

### 新建指定别名

> new-alias aliasName command


例新建一个pnpm别名：

```bash
new-alias p pnpm
```

### 删除指定别名

> remove-item alias:aliasName

## 永久别名

以上方式都是创建非永久别名（关闭session后将失效），要想创建永久别名，需要写入`windows powershell profile`文件中。

### 列出profile文件位置（如若不存在则需创建）

> $profile

#### 如若不存在profile文件，则创建

> New-Item -Type file -Force $profile

### 在获取到profile文件位置后，写入alias命令到该文件内

[![pp9sVVf.png](https://s1.ax1x.com/2023/02/27/pp9sVVf.png)](https://imgse.com/i/pp9sVVf)

保存后即可永久性的定义该别名，因系统每次启动都会优先执行该文件内容