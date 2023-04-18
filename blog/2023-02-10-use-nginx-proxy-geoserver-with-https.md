---
slug: use-nginx-proxy-geoserver-with-https
title: 使用nginx代理geoserver通过https访问
tags: ['geoserver', 'nginx']
---

## Nginx 配置
```nginx
server {
    listen 443 ssl;
    server_name localhost;
    ssl_certificate path/to/privatekey;
    ssl_certificate_key path/to/publickey;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location /geoserver {
        proxy_pass http://127.0.0.1:8088;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Geoserver配置
nginx添加的X-Forwarded系列请求头，还需要geoserver服务器支持
### Tomcat服务器
server.xml 
```xml
<service>
    <Engine>
        <Host>
            <!-- 加入以下配置-->
            <Valve className="org.apache.catalina.valves.RemoteIpValve" />
        </Host>
    </Engine>
</service>
```
### Jetty服务器
jetty.xml
```xml
<New id="httpConfig" class="org.eclipse.jetty.server.HttpConfiguration">
    <Call name="addCustomizer">
        <Arg><New class="org.eclipse.jetty.server.ForwardedRequestCustomizer"/></Arg>
    </Call>
</New>
```