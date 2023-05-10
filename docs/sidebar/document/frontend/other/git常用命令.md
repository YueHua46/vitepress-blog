# Git常用命令记录

## 仓库相关

### 指定远程仓库地址并命名

```
git remote add <name> <url>
```

### 显示当前推送的远程仓库地址列表

```
git remote -v
```

## 分支操作相关

### 查看当前分支列表（包括本地和远程）

```
git branch -a
```

### 创建一个新分支

```
git branch newBranchName
```

### 以当前分支的数据为基础，新建一个分支

```
git checkout -b newBranchName
// newBranchName为新建的分支名
```

### 前往指定分支

```
git checkout branchName
// branchName为前往分支的分支名
```

### 推送当前分支到远程仓库并命名远程分支的分支名

```
git push -u origin newBranchName
// newBranchName为新建的远程仓库的分支名
```

### 默认推送当前分支

```
git push
```

### 将当前分支与目标分支合并

```
git merge targetBranchName
```

删除本地分支

```
git branch -d branchName
```

## 版本回退相关

获取所有commit提交id

```
git log
```

不保留任何更改，回退到指定commit版本

```
git reset --hard commit提交id
```

