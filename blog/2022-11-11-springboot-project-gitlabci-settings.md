---
slug: spring-boot-project-gitlabci
title: SpringBoot GitlabCI流水线设置
tags: ['spring-boot','gitlab-ci']
---
## 🚀 Gitlab FLow
![GitlabFLow](https://picbed.howiewant.top/GitlabFLow.png)


<!-- truncate -->
## 👣 Step
### 提交代码到MASTER分支
  - 触发check job, 使用sonar进行代码的质量检查
```yaml
sonarqube-check:
  stage: check
  image: maven:3.8.6-jdk-11
  variables:
    SONAR_USER_HOME: "$CI_PROJECT_DIR/.sonar"
    GIT_DEPTH: "0"
    MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  cache:
    key: "$CI_JOB_NAME"
    paths:
      - .sonar/cache
      - .m2/repository
  script:
    - cat "$MAVEN_SETTINGS" > /root/.m2/settings.xml
    - mvn verify sonar:sonar -Dsonar.projectKey=snailmap
  allow_failure: true
  only:
    - master
```
### 提交PR从Master合并代码到Pre Production(预发布 | 测试)
```yaml
build-job:
  stage: build
  image: maven:3.8.6-jdk-11
  variables:
    MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  cache:
    key: "$CI_JOB_NAME"
    paths:
      - .m2/repository
  only:
    - pre-production
    - production
  script:
    - cat "$MAVEN_SETTINGS" > /root/.m2/settings.xml
    - mvn clean package -DskipTests=true
  artifacts:
    paths:
      - target/*.jar
  retry: 2

.deploy:
  stage: deploy
  image: kroniak/ssh-client
  before_script: 
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - cat "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa


pre-production-deploy-job:
  extends: .deploy
  script:
    - ssh $PRE_PRODUCTION_HOST "cp /DataDisk/jar/snail-map/snail-map.jar{,.bak}"
    - scp target/*.jar $PRE_PRODUCTION_HOST:/DataDisk/jar/snail-map/snail-map.jar
    - echo "$LINDIAOTONG_PASSWD" | ssh -tt $PRE_PRODUCTION_HOST "sudo systemctl restart snailmap"
  only:
    - pre-production
```
### 提交PR从Pre Production到Production
- 类同Pre Production所执行的job，仅变量有些许不同

## 😄 Complete Code 
```.yaml
stages:
  - check
  - build
  - deploy

sonarqube-check:
  stage: check
  image: maven:3.8.6-jdk-11
  variables:
    SONAR_USER_HOME: "$CI_PROJECT_DIR/.sonar"
    GIT_DEPTH: "0"
    MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  cache:
    key: "$CI_JOB_NAME"
    paths:
      - .sonar/cache
      - .m2/repository
  script:
    - cat "$MAVEN_SETTINGS" > /root/.m2/settings.xml
    - mvn verify sonar:sonar -Dsonar.projectKey=snailmap
  allow_failure: true
  only:
    - master


build-job:
  stage: build
  image: maven:3.8.6-jdk-11
  variables:
    MAVEN_OPTS: "-Dmaven.repo.local=$CI_PROJECT_DIR/.m2/repository"
  cache:
    key: "$CI_JOB_NAME"
    paths:
      - .m2/repository
  only:
    - pre-production
    - production
  script:
    - cat "$MAVEN_SETTINGS" > /root/.m2/settings.xml
    - mvn clean package -DskipTests=true
  artifacts:
    paths:
      - target/*.jar
  retry: 2

.deploy:
  stage: deploy
  image: kroniak/ssh-client
  before_script: 
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - cat "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
    - chmod 600 ~/.ssh/id_rsa


pre-production-deploy-job:
  extends: .deploy
  script:
    - ssh $PRE_PRODUCTION_HOST "cp /DataDisk/jar/snail-map/snail-map.jar{,.bak}"
    - scp target/*.jar $PRE_PRODUCTION_HOST:/DataDisk/jar/snail-map/snail-map.jar
    - echo "$LINDIAOTONG_PASSWD" | ssh -tt $PRE_PRODUCTION_HOST "sudo systemctl restart snailmap"
  only:
    - pre-production

production-deploy-job:
  extends: .deploy
  script:
    - ssh $PRODUCTION_HOST "cp /DataDisk/jar/snail-map/snail-map.jar{,.bak}"
    - scp target/*.jar $PRODUCTION_HOST:/DataDisk/jar/snail-map/snail-map.jar
    - echo "$LINWUTONG_PASSWD" | ssh -tt $PRE_PRODUCTION_HOST "sudo systemctl restart snailmap"
  only:
    - production
```