# Nginx autoindex 模块
http请求映射到服务器文件目录
:::tip 文档
https://nginx.org/en/docs/http/ngx_http_autoindex_module.html
:::

### autoindex 启用功能
```nginx
Syntax:     autoindex on | off;
Default:	autoindex off;
Context:	http, server, location
```

### autoindex_exact_size 展示精确大小
```nginx
Syntax:	    autoindex_exact_size on | off;
Default:	autoindex_exact_size on;
Context:	http, server, location
```

### autoindex_format 输出格式
```nginx
Syntax:	    autoindex_format html | xml | json | jsonp;
Default:	autoindex_format html;
Context:	http, server, location
```
xml 格式需要使用 [ngx_http_xslt_module](https://nginx.org/en/docs/http/ngx_http_xslt_module.html)

### autoindex_localtime 输出的时间格式
```nginx
Syntax:	    autoindex_localtime on | off;
Default:	autoindex_localtime off;
Context:	http, server, location
```
html输出时间格式是否根据当前系统时区格式化

### 使用示例
```nginx
location / {
    root /path/to/root;
    autoindex on;
    autoindex_exact_size off;
    charset utf-8; 
}
```