import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";

import "../styles/about.css";

function AboutPage() {
  const navigate = useNavigate();

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Figma",
    "Photoshop",
    "After Effects",
    "Premiere Pro",
  ];

  const strengths = [
    "섬세함",
    "AI활용능력",
    "꼼꼼함",
    "소통능력",
    "디자인감각",
    "책임감",
    "문제해결력",
    "성실함",
  ];

  return (
    <main className="page-wrap abt-page-wrap">
      <section
        className="page-frame abt-page-frame"
        onClick={() => navigate("/")}
      >
        <div className="inner abt-page-inner">
          <div className="abt-header">
            <h1 className="abt-title">소개</h1>

            <div
              className="abt-header-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <SideMenu />
            </div>
          </div>

          <div
            className="sub-inner abt-sub-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="abt-scroll-area">
              <div className="abt-body">
                <div className="abt-left">


                  <div className="abt-left">

                    <div className="abt-profile-img-box">
                    </div>
                    
                    <div className="abt-intro-img-box">
                    </div>

                    
                  </div>
                </div>

                <div className="abt-right">
                  <section className="abt-section">
                    <h2 className="abt-section-title">프로필</h2>

                    <dl className="abt-info-list">
                      <div className="abt-info-row">
                        <dt>이름</dt>
                        <dd>000</dd>
                      </div>

                      <div className="abt-info-row">
                        <dt>생년월일</dt>
                        <dd>0000</dd>
                      </div>

                      <div className="abt-info-row">
                        <dt>연락처</dt>
                        <dd>0000</dd>
                      </div>

                      <div className="abt-info-row">
                        <dt>이메일</dt>
                        <dd>0000</dd>
                      </div>
                    </dl>
                  </section>

                  <section className="abt-section">
                    <h2 className="abt-section-title">이력</h2>

                    <div className="abt-edu-box">

                      <div className="abt-edu-item">
                        <strong>2022.12.26 - 2025.03.01</strong>
                        <span>0000</span>
                      </div>

                      <div className="abt-edu-item">
                        <strong>2025.05.26-</strong>
                        <span>0000</span>
                      </div>

                      <div className="abt-edu-item">
                        <strong>2025.11.03 - 2026.04.22</strong>
                        <span>
                          생성형 AI를 활용한 영상 웹퍼블리셔&amp;프론트앤드 개발자 양성
                        </span>
                      </div>

                    </div>
                  </section>

                  <section className="abt-section">
                    <h2 className="abt-section-title">스킬</h2>

                    <ul className="abt-skill-list">
                      {skills.map((skill) => (
                        <li className="abt-skill-item" key={skill}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="abt-section">
                    <h2 className="abt-section-title">장점</h2>

                    <ul className="abt-strength-list">
                      {strengths.map((strength) => (
                        <li className="abt-strength-item" key={strength}>
                          #{strength}
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;