# vue2-nuxt-realworld-example-app

[![Build Status](https://travis-ci.com/gloriaJun/vue2-nuxt-realworld-example-app.svg?branch=master)](https://travis-ci.com/gloriaJun/vue2-nuxt-realworld-example-app)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c5321fe3a07f4774b9ce5c2af8c0a6f0)](https://app.codacy.com/app/pureainu/vue2-nuxt-realworld-example-app?utm_source=github.com&utm_medium=referral&utm_content=gloriaJun/vue2-nuxt-realworld-example-app&utm_campaign=Badge_Grade_Settings)
[![Coverage Status](https://coveralls.io/repos/github/gloriaJun/vue2-nuxt-realworld-example-app/badge.svg?branch=master)](https://coveralls.io/github/gloriaJun/vue2-nuxt-realworld-example-app?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/gloriaJun/vue2-nuxt-realworld-example-app.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/gloriaJun/vue2-nuxt-realworld-example-app/status.svg)](https://david-dm.org/gloriaJun/vue2-nuxt-realworld-example-app)
[![devDependencies Status](https://david-dm.org/gloriaJun/vue2-nuxt-realworld-example-app/dev-status.svg)](https://david-dm.org/gloriaJun/vue2-nuxt-realworld-example-app?type=dev)

**[Demo Page](https://gloriajun.github.io/vue2-nuxt-realworld-example-app)**

## Getting Start

### Install

```bash
yarn install # or npm run install
```

### Run

```bash
yarn dev # or npm run dev
```

## 연동한 도구들

### CI/CD

일부 도구 연동을 위해서는 CI 도구 연동이 필요

#### Travis CI

- https://travis-ci.com/gloriaJun/vue2-nuxt-realworld-example-app

### Dependencies

#### Greenkeeper

- CI 도구가 연동되어있어야함.
- https://account.greenkeeper.io/account/gloriaJun
- 라이브러리 버전이 업데이트된 경우, 해당 라이브러리의 버전을 업데이타한 후에 빌드 수행 후에 결과를 PR로 남겨준다. 
  - https://github.com/gloriaJun/vue2-nuxt-realworld-example-app/pull/5
  
#### David

- 현재 설치된 라이브러리들과 설치된 버전 그리고 업데이트 가능한 최신 버전을 리스트 형태로 출력해준다.
- 각 라이브러리들의 관게를 트리로 출력해준다.


### Code Quality

#### Codacy

- https://app.codacy.com/project/pureainu/vue2-nuxt-realworld-example-app/dashboard

### Code Coverage

#### Coveralls

- CI 도구가 연동되어있어야함.
- https://coveralls.io/github/gloriaJun/vue2-nuxt-realworld-example-app
- 설정 참고 : https://rants.broonix.ca/adding-coverage-reports

#### Codecov


### Slack

CI 도구에서 Slack으로 빌드 결과를 전달받기 위한 설정을 하였음.

```yml
notifications:
  email: false
  slack:
    rooms:
      - glriaroom:$SLACK_TOKEN#devops
    on_success: change # default : always
    on_failure: always # default : always
```
