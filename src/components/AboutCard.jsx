import React from 'react';

export default function AboutCard() {
  return (
    <div>
      <div class="about__me">
        <div class="about__flip">
          <div class="about__front">
            <p class="about__title">ID CARD</p>
            <hr class="about__hr" />
            <div class="about__frontBox">
              <div class="info__box">
                <div class="me__img"></div>
                <div class="me__info">
                  <p class="me__info__name about__small">정채빈</p>
                  <p class="me__info__nameEng">Jeong Chae-Been</p>
                </div>
              </div>
              <div class="me__record">
                <div class="myEmail me__margin">
                  <p class="myEmail__title record__mark">EMAIL</p>
                  <p class="about__small">chaevivin@gmail.com</p>
                </div>
                <div class="myGithub me__margin">
                  <p class="myGithub__title record__mark">GITHUB</p>
                  <a href="https://github.com/chaevivin" target="blank">
                    <p class="about__small">https://github.com/chaevivin</p>
                  </a>
                </div>
                <div class="myBlog me__margin">
                  <p class="myBlog__title record__mark">BLOG</p>
                  <a href="https://velog.io/@chaevivi" target="blank">
                    <p class="about__small">https://velog.io/@chaevivi</p>
                  </a>
                </div>
                <div class="school me__margin">
                  <p class="school__title record__mark">SCHOOL</p>
                  <img src="img/school_logo.png" alt="" class="school__logo" />
                  <div class="school__description">
                    <p class="school__name about__small">
                      한국외국어대학교 글로벌캠퍼스 컴퓨터공학과
                    </p>
                    <p class="school__nameEng">
                      Hankuk University of foreign studies Global campus
                      Computer Science
                    </p>
                    <p class="school__period about__micro">
                      2020/03 ~ 2023/02 (졸업예정)
                    </p>
                  </div>
                </div>
                <div class="certification">
                  <p class="certification__title record__mark">
                    CERTIFICATION & AWARDS
                  </p>
                  <img src="img/toeic_img.png" alt="" class="toeic__logo" />
                  <div class="toeic__description">
                    <p class="toeic__score about__small">Toeic score : 845</p>
                    <p class="toeic__period about__micro">2021/11/21</p>
                  </div>
                  <img src="img/school_logo.png" alt="" class="school__logo" />
                  <div class="awards__description">
                    <p class="awards__host about__small">
                      2022 HUFS 오픈소스 협업 HackaLearn
                    </p>
                    <p class="awards__name about__micro">
                      'UX가 가장 뛰어난 애플리케이션' 수상
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about__back">
            <div class="about__backBox">
              <div class="skill__frontEnd">
                <p class="skill__fe__title">🛠️ Front-end</p>
                <p class="skill__fe__skillSet">
                  HTML | CSS | JavaScript | React
                </p>
                <div class="skill__fe__content">
                  <p>
                    ▪️ <b>웹표준, HTML5, CSS3</b>를 이용하여 사이트를 구현할 수
                    있습니다.
                  </p>
                  <p>
                    ▪️ CSS Media Query를 이용하여 <b>반응형 웹</b>을 만들 수
                    있습니다.
                  </p>
                  <p>
                    ▪️ <b>Mobile First</b>로 웹사이트를 구현한 경험이 있습니다.
                  </p>
                  <p>▪️ JavaScript에서 <b>DOM 조작</b>을 할 수 있습니다.</p>
                  <p>▪️ <b>Axios를 사용하여 백엔드와 통신</b>할 수 있습니다.</p>
                  <p>
                    ▪️ React로 <b>SPA (Single Page Application)</b> 를 개발한
                    경험이 있습니다.
                  </p>
                  <p>
                    ▪️ React에서 useEffect, useState 등
                    <b>React Hook을 사용</b>할 수 있습니다.
                  </p>
                </div>
              </div>
              <div class="skill__cooperation">
                <p class="skill__coo__title">🤝 Cooperation</p>
                <p class="skill__coo__skillSet">
                  Git | Github | Slack | Discord | Figma
                </p>
                <div class="skill__coo__content">
                  <p>
                    ▪️ Github에서 <b>pull request</b>를 보낼 수 있고 다른 사람의
                    코드를 <b>Fetch하고 merge</b>를 할 수 있습니다.
                  </p>
                  <p>▪️ Git을 사용하여 <b>버전 관리</b>를 할 수 있습니다.</p>
                  <p>
                    ▪️ <b>Git commit 메시지 규칙</b>을 지켜 commit 메시지를
                    작성할 수 있습니다.
                  </p>
                  <p>
                    ▪️ Slack과 Discord로 <b>다른 개발자와 소통하고 협업</b>한
                    경험이 있습니다.
                  </p>
                  <p>
                    ▪️ Figma로 <b>기획자, 디자이너와 소통하고 협업</b>한 경험이
                    있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

