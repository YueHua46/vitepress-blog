
# ubuntu修改终端语言环境（无桌面版）

## 修改中文
### 检查是否安装了中文语言包
```
locale -a
```
如果没有zh_CN.utf8，则安装

### 安装中文语言包
```
sudo apt-get install language-pack-zh-hans
```
然后添加中文支持
```
locale-gen zh_CN.UTF-8
```

### 修改locale文件配置
```
vim /etc/default/locale
```
修改配置文件为：
```
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh:en_US:en"
LC_NUMERIC="zh_CN.UTF-8"
LC_TIME="zh_CN.UTF-8"
LC_MONETARY="zh_CN.UTF-8"
LC_PAPER="zh_CN.UTF-8"
LC_IDENTIFICATION="zh_CN.UTF-8"
LC_NAME="zh_CN.UTF-8"
LC_ADDRESS="zh_CN.UTF-8"
LC_TELEPHONE="zh_CN.UTF-8"
LC_MEASUREMENT="zh_CN.UTF-8"
LC_ALL=zh_CN.UTF-8
```
### 重启
```
reboot
```

## 修改回英文

### 如果没有安装英文则安装：
```
sudo apt-get install language-pack-en
```
然后添加英文支持
```
locale-gen en_US.UTF-8
```
最后修改配置文件
```
vim /etc/default/locale
```
```
LANG=en_US.UTF-8
LANGUAGE="en_US:en"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_ALL=en_US.UTF-8
```
### 重启
```
reboot
```

## 本文引用
https://blog.csdn.net/BobYuan888/article/details/88662779