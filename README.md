<div align="center">
    <h1>React로 수정중</h1>
    <br>
    <img src="https://user-images.githubusercontent.com/83055813/215501680-3cfe536a-0809-47aa-adf4-9ced73c0c4a4.gif" />
    <p> Update ver.</p>
    <br>
    <img src="https://user-images.githubusercontent.com/83055813/155542548-a56683dc-a2b2-4d51-ace6-dc8b87f18fa3.gif" alt="How it works"/>
    <p>Old ver.</p>

<br>

<h3>Welcome to my first portfolio site 🖐</h3>

<hr/>

🔗 https://chaevivin.github.io/Portfolio/

</div>

<br>
<br>

<h2>1. Tech stacks</h2>
<p>I used these stacks for this site.</p>
<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>&nbsp <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>&nbsp <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
</p>

<br>

<h2>2. Function</h2>
<p>How it works?</p>

<br>

(1) Navigation bar

- 개인 로고와 메뉴로 구성
- 개인 로고
- 메뉴
    1. 각 메뉴 버튼에 마우스를 올리면 (hover) 해당 배경색이 진하게 바뀜
    2. 각 메뉴 버튼을 클릭하면 배경선이 생기고 해당 섹션으로 이동
    3. 처음에는 메뉴바가 투명, 스크롤링 됐을 때 색이 생기고 위에 고정 (sticky)
    4. 섹션이 이동될 때마다 해당 버튼 활성화

<br>

(2) Home (Main)
- 직접 디자인한 홈 배경
- 'contact me' 버튼
    버튼을 누르면 맨 밑 'Contact' 섹션으로 이동
- 스크롤링
    홈에서 스크롤링 시 컨텐트들이 점점 투명하게 바뀜

<br>

(3) About
- 나에 대한 간단한 소개 & 경력
- ~~원 안의 아이콘에 마우스를 올리면 (hover) 색 변경, 크기가 조금 커지면서 왼쪽으로 30도 기울어짐~~ 
- (update) ID Card에 마우스를 올리면 (hover) 카드가 뒤집히면서 뒷장의 내용이 보임
- (update) 앞장은 간단한 소개 및 이력, 뒷장은 사용할 수 있는 기술 스택 상세 나열

<br>


(4) ~~Skills~~
- ~~사용할 수 있는 스택들~~
- ~~Skills~~
    1. ~~스킬을 어느 정도 사용할 수 있는지에 따라 퍼센트로 표현~~
    2. ~~<div> 태그를 사용해서 퍼센트 표현~~
- (update) About 페이지에 기술 스택 상세 나열로 section 삭제

<br>

(5) My work
- 그 동안 했던 프로젝트들 정리 
- 프로젝트 분야 별로 세분화
    1. ~~All (전체)~~
    2. ~~Front-end (프론트엔드)~~
    3. ~~Back-end (백엔드)~~
    4. ~~Mobile (모바일)~~
    5. (update) 그룹 프로젝트와 개인 프로젝트로 분리
- 카테고리 버튼
    1. ~~버튼에 마우스를 올리면 (hover) 버튼 색 변경~~
    2. ~~버튼에 마우스를 올리면 (hover) 프로젝트를 한 갯수 표시 (위에서 아래로 이동)~~
    3. ~~버튼 클릭 시 분야 별로 했던 프로젝트들 표시~~
    4. (update) 카드 형식으로 사진과 프로젝트에 사용한 기술만 보여줌
- 프로젝트
    1. ~~프로젝트에 마우스를 올리면 (hover) 프로젝트 이름과 사용했던 스택들 표시~~
    2. ~~프로젝트 클릭 시 해당 프로젝트 github로 이동~~
    3. (update) 카드를 클릭하면 해당 프로젝트의 상세 설명을 보여주는 모달 창이 나옴
    4. (update) 모달 창에는 기여자, 사용한 스택들, 깃허브 주소, 블로그 주소, 프로젝트 설명, 프로젝트 담당 업무 기술

<br>

(6) ~~Testimonials~~
- ~~추천서 (임시)~~
- (update) section 삭제

<br>

(7) Contact
- 연락 방법
- 아이콘에 마우스를 올리면 (hover) 해당 아이콘 색 변경, 크기가 커짐
- 아이콘 클릭 시 개인 Github와 개인 블로그로 이동
- (update) 이력서 사이트 추가

<br>

(8) Arrow-up
- Home 섹션에서는 버튼이 숨겨짐
- Home 섹션에서 벗어난 이후부터 오른쪽 하단에 버튼 생성
- 버튼 클릭 시 맨 위(Home 섹션)로 이동

<br>

<h2>3. Issues</h2>
Issues that occurred while creating the project.

<br>

(1) Scrolling when tapping on the navbar menu
- Issue : 처음에는 해당 섹션의 selector들을 일일히 다 받아온 후에 해당 섹션의 좌표값을 받아와서 (window.pageYOffset, getBoundingClientRect().top 사용) 이동 (window.scrollTo() 사용)
- Solution : 해당 섹션의 selector을 받아온 후 scroll 기능을 수행할 수 있는 'scrollIntoView' 함수를 만듦.

<br>

(2) Projects filtering

- Issue : 카테고리 버튼에서 갯수를 표현한 부분을 클릭할 때 버튼이 작동하지 않음.
- Solution : 'dataset' 값을 받아오거나 parentNode의 필터 값을 받아옴.

<br>

(3) 'Contact' button error
- Issue : 'Home' 섹션에 있는 'Contact me' 버튼을 클릭했을 때 'Contact' 버튼 활성화 되지 않음.
- Solution : Javascript에서 'selectNavItem' 함수를 메뉴의 버튼을 클릭했을 때 작동할 수 있도록 했었는데, 'scrollIntoView' 함수 안에 구현.

<br>

<h2>4. What I learned.</h2>

<p>
    내가 만든 첫 포트폴리오 사이트라 의미가 깊다. 메인 색 선택, 배경화면 디자인부터 기능 구현까지 정성을 쏟지 않은 부분이 없다. 잘 구현되지 않는 부분, 어려운 부분도 많았지만 그 이슈들을 해결함으로써 뿌듯했고 스스로 성장했다는 것을 느꼈다. 다음에는 팀원들과 함께하는 팀 프로젝트를 꼭 해보고 싶다.
</p>

<br>
