import React from 'react';

export default function AboutCard() {
  return (
    <div>
      <div className="about__me">
        <div className="about__flip">
          <div className="about__front">
            <p className="about__title">ID CARD</p>
            <hr className="about__hr" />
            <div className="about__frontBox">
              <div className="info__box">
                <div className="me__img"></div>
                <div className="me__info">
                  <p className="me__info__name about__small">정채빈</p>
                  <p className="me__info__nameEng">Jeong Chae-Been</p>
                </div>
              </div>
              <div className="me__record">
                <div className="myEmail me__margin">
                  <p className="myEmail__title record__mark">EMAIL</p>
                  <p className="about__small">chaevivin@gmail.com</p>
                </div>
                <div className="myGithub me__margin">
                  <p className="myGithub__title record__mark">GITHUB</p>
                  <a href="https://github.com/chaevivin" target="blank">
                    <p className="about__small">https://github.com/chaevivin</p>
                  </a>
                </div>
                <div className="myBlog me__margin">
                  <p className="myBlog__title record__mark">BLOG</p>
                  <a href="https://velog.io/@chaevivi" target="blank">
                    <p className="about__small">https://velog.io/@chaevivi</p>
                  </a>
                </div>
                <div className="school me__margin">
                  <p className="school__title record__mark">SCHOOL</p>
                  <img src="img/school_logo.png" alt="" className="school__logo" />
                  <div className="school__description">
                    <p className="school__name about__small">
                      한국외국어대학교 글로벌캠퍼스 컴퓨터공학과
                    </p>
                    <p className="school__nameEng">
                      Hankuk University of foreign studies Global campus
                      Computer Science
                    </p>
                    <p className="school__period about__micro">
                      2020/03 ~ 2023/02 (졸업예정)
                    </p>
                  </div>
                </div>
                <div className="certification">
                  <p className="certification__title record__mark">
                    CERTIFICATION & AWARDS
                  </p>
                  <img src="img/toeic_img.png" alt="" className="toeic__logo" />
                  <div className="toeic__description">
                    <p className="toeic__score about__small">Toeic score : 845</p>
                    <p className="toeic__period about__micro">2021/11/21</p>
                  </div>
                  <img src="img/school_logo.png" alt="" className="school__logo" />
                  <div className="awards__description">
                    <p className="awards__host about__small">
                      2022 HUFS 오픈소스 협업 HackaLearn
                    </p>
                    <p className="awards__name about__micro">
                      'UX가 가장 뛰어난 애플리케이션' 수상
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__back">
            <div className="about__backBox">
              <div className="skill__frontEnd">
                <p className="skill__fe__title">🛠️ Front-end</p>
                <p className="skill__fe__skillSet">
                  HTML | CSS | JavaScript | React
                </p>
                <div className="skill__fe__content">
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
              <div className="skill__cooperation">
                <p className="skill__coo__title">🤝 Cooperation</p>
                <p className="skill__coo__skillSet">
                  Git | Github | Slack | Discord | Figma
                </p>
                <div className="skill__coo__content">
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

