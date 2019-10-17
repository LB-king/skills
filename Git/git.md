#### 配置git

```powershell
git config --global user.name 'your name'
git config --global user.email 'your email'
git config user.name #查看用户
git config user.email #查看邮箱
```

#### 远程clone仓库

- 生成SSH公钥

  ```powershell
  ssh-keygen -t rsa -C 'XXXX@qq.com'
  ```

- 找到公钥配置仓库权限

  ```tex
  C:\Users\username\.ssh\id_rsa.pub
  ```

#### 关联远程仓库

1. clone的方式

   ```shell
   git clone git@github.com:xxx/demo.git
   ```

   这种方式可以直接使用`git fetch` ,` git pull`

2. 本地文件夹关联远程仓库

   - ##### 远程仓库有文件的

     ```powershell
     #git初始化
     git init
     #设置remote的地址
     git remote add origin '仓库地址' 
     #将当前分支设置为远程仓库的master分支
     git branch --set-upstream-to=origin/master master
     git fetch
     #如果不设置master分支，则需要git pull origin master
     git pull
     git add .
     git commit -m 'message'
     git push
     ```

   - ##### 空白项目的关联

     ```shell
     #git初始化
     git init
     #设置remote地址
     git remote add 地址
     #将全部文件加入git版本管理 .的意思是将当前文件夹下的全部文件放到版本管理中
     git add .
     #提交文件 使用-m 编写注释
     git commit -m "注释"
     #推送到远程分支
     git push
     ```
#### 撤销操作

- 没有git add的情况 回到最近一次git commit的情况

  ```shell
  git checkout -- readme.txt
  ```

- 已经git add(还没有commit)的情况 回到最近一次git add的情况

  ```shell
  git reset HEAD readme.txt
  git checkout readme.txt
  ```

- 已经commit的情况

  ```shell
  git reset --soft HEAD^
  git reset HEAD readme.txt
  git checkout readme.txt
  ```

  

#### 合并分支

```shell
git branch
git branch -b fenzhi #创建一个分支
git checkout dev
git merge fenzhi
git push origin dev #将fenzhi合并到dev
```

#### 乱码问题

```shell
git config --global gui.encoding utf-8
```

