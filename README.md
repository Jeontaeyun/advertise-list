# [토이 프로젝트] 뷰와 LESS를 이용한 광고 리스트

## 01. 프로젝트 개요

### (01) 프로젝트 아키텍쳐

- 프레임워크 : Vue.js
- CSS 전처리기 : LESS
- CSS 프레임워크 : 부트스트랩
- HTTP 통신 : Axios

### (02) 프로젝트 목적 

선언형 점진적 웹 뷰 프레임워크 Vue.js와 LESS를 이용하여 게시글 리스트를 불러오는 프로젝트. 해당 프로젝트를 통해서 Vue.js와 LESS에 대해 알아보고 프로젝트 환경 설정 및 간단한 화면을 구성해보기 위한 프로젝트입니다. 해당 프로젝트를 통해 다음과 같은 목적을 달성할 것 입니다.

- Vue.js 프레임워크의 사용법 학습

- LESS와 Vue.js의 연결과 프로젝트 환경 설정법 학습

- LESS의 사용법 학습

## 02. 프로젝트 이론

### (01) Vue.js 프로젝트 생성 및 LESS 연동 방법

#### Vue 프로젝트 생성

vue-cli를 이용하면 쉽게 vue 프로젝트와 웹팩 환경을 설정할 수 있다. vue-cli를 설치 후 init 명령어를 통해 프로젝트를 생성할 수 있다.

```bash
$npm i vue vue-cli

$vue init webpack-simple
```

구분                        | 설명
---------------------------| --------------------------------------------------------------------
vue init webpack           | 고급 웹팩 기능을 활용한 프로젝트 구성방식. 테스팅, 문법 검사 등을 지원
vue init webpack-simple    | 웹팩 최소 기능을 활용한 프로젝트 구성 방식. 빠른 화면 프로토타이핑 용
vue init browserify        | 고급 브라우저파이 기능을 활용한 프로젝트 구성 방식. 테스팅, 문법 검사 등을 지원
vue init browserify-simple | 브라우저파이 최소 기능을 활용한 프로젝트 구성 방식. 빠른 화면 프로토타이핑 용
vue init simple            | 최소 뷰 기능만 들어간 HTML 파일 1개 생성 
vue init pwa               | 웹팩 기반의 프로그레시브 웹 앱(PWA) 기능을 지원하는 뷰 프로젝트

또한, 웹팩에서 뷰의 싱글 파일 컴포넌트 체계를 사용하기 위해서는 .vue 파일을 읽어줄 수 있는 뷰 로더 기능을 추가해야 한다. 웹팩은 자바스크립트 모듈만 인식할 수 있기 때문에 뷰 로더가 .vue 파일을 일단 자바스클립트 모듈로 변환합니다.

또한 필요에 따라 웹팩의 추가 플러그인을 이용하면 웹팩으로 변환된 자바스크립트 모듈을 CSS나 HTML 파일로 분리할 수 있습니다.

> **싱글 파일 컴포넌트 체계**
>
> 애플리케이션의 규모가 커서 기능별로 관리를 해야 할 경우에는 <components/기능/컴포넌트.vue>와 같은 형식으로 관리하는 것이 좋습니다.

#### 웹팩과 LESS 연동

Vue 프로젝트에 LESS를 연동해주기 위해서 less 와 less-loader를 설치한 후 웹팩 설정에 넣어서 웹팩 환경의 Vue 프로젝트에서 LESS를 사용할 수 있도록 해줍니다.

[ less와 less-loader 설치 ]

```bash
$npm i less less-loader
```

[ webpack.config.js 설정 ]

```javascript

module.exports = {
    module: {
		rules: [
            ...
            {
                	test: /\.less$/,
				use: [ 'vue-style-loader', 'css-loader', 'less-loader' ]
            }
        ]
    }
}

```

## 03. 프로젝트 고찰