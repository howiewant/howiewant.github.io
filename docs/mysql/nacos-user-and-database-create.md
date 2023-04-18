# Nacos 数据库及账号创建

:::tip 文档
https://dev.mysql.com/doc/refman/5.7/en/
:::

## 数据库创建
```sql
create database nacos;
```
## 用户创建
```sql
create user 'nacos'@'localhost' identified by 'nacos';
```
## 用户授权
```sql
grant all on nacos.* to 'nacos'@'localhost';
```
## 刷新
```sql
flush privileges;
```

