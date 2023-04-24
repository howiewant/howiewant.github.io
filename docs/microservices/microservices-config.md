---
sidebar_position: 1
title: 微服务-配置
---
大多数应用程序需要基于运行环境进行配置。必须可以从应用程序外部修改配置数据，这样应用程序本身就不需要重新打包。  
配置数据可以来自不同的位置和不同的格式（例如系统属性、系统环境变量、.properties、.xml、数据源）。我们将这些配置位置称为 ConfigSources。如果在多个 ConfigSources 中定义了相同的属性，我们将应用一个策略来指定将有效使用其中一个值。    
在某些情况下，某些数据源可能会动态变化。更改后的值应送入客户端，而无需重新启动应用程序。这一要求对于在云环境中运行的微服务尤为重要。  

## SpringCloud Config Server
## SpringCloud Alibaba Nacos
## Kubernetes ConfigMap