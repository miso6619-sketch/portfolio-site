import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { videoSections, videoSectionLinks } from "../js/video";
import "../styles/video.css";

function VideoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    }
  }, [location]);

  return (
    <main className="page-wrap video-page-wrap">
      <section
        className="page-frame video-page-frame"
        onClick={() => navigate("/")}
      >
        <div className="inner video-page-inner">
          <div className="vid-header">
            <h1 className="vid-title">영상편집</h1>

            <div
              className="vid-header-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <SideMenu />
            </div>
          </div>

          <div
            className="sub-inner video-sub-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-scroll-area">
              <div className="vid-body">
                <section className="vid-section" id="web-video">
                  <div className="vid-section-top">
                    <h2>웹 사이트 영상</h2>

                    <div className="vid-top-links">
                      <a
                        className="vid-notion-top"
                        href={videoSectionLinks.web.notionUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        노션 보러가기
                      </a>

                      <a
                        className="vid-site01"
                        href={videoSectionLinks.web.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        사이트 보러가기
                      </a>
                    </div>
                  </div>

                  <p>산타 사이트의 동화적인 무드와 페이지별 콘셉트를 시각적으로 전달하기 위해 제작한 헤더 영상 작업입니다.</p>

                  <div className="vid-list">
                    {videoSections.web.map((item) => (
                      <div className="vid-card" key={item.id}>
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.desc}
                            className="vid-player vid-gif"
                          />
                        ) : (
                          <video controls className="vid-player">
                            <source src={item.src} type="video/mp4" />
                          </video>
                        )}

                        <h3 className="vid-card-title">{item.title}</h3>
                        <p className="vid-card-text">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="vid-section" id="concept-video">
                  <div className="vid-section-top">
                    <h2>콘셉트 영상</h2>

                    <div className="vid-top-links">
                      <a
                        className="vid-notion-top"
                        href={videoSectionLinks.concept.notionUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        노션 보러가기
                      </a>
                    </div>
                  </div>

                  <p>Premiere Pro와 Photoshop을 활용해 제작한 Y2K 드레스업 게임 콘셉트 영상으로, Object Selection Tool로 이미지 요소를 누끼 처리한 뒤 투명 배경 PNG로 제작해 폴더폰 UI, 레트로 게임 화면, 콜라주 이미지를 자연스럽게 구성했습니다.</p>

                  <div className="vid-list">
                    {videoSections.concept.map((item) => (
                      <div className="vid-card" key={item.id}>
                        <video controls className="vid-player">
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <h3 className="vid-card-title">{item.title}</h3>
                        <p className="vid-card-text">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="vid-section" id="campaign-video">
                  <div className="vid-section-top">
                    <h2>캠페인 사이트 영상</h2>

                    <div className="vid-top-links">
                      <a
                        className="vid-notion-top"
                        href={videoSectionLinks.campaign.notionUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        노션 보러가기
                      </a>

                      <a
                        className="vid-site01"
                        href={videoSectionLinks.campaign.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        사이트 보러가기
                      </a>
                    </div>
                  </div>

                  <p>After Effects를 활용해 제작한 딥페이크 개인정보보호 캠페인 영상으로, 사이트의 어두운 블루 톤에 맞춰 딥페이크의 위험성을 먼저 보여준 뒤 예방법으로 이어지는 흐름으로 구성했습니다.</p>

                  <div className="vid-list">
                    {videoSections.campaign.map((item) => (
                      <div className="vid-card" key={item.id}>
                        <video controls className="vid-player">
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <h3 className="vid-card-title">{item.title}</h3>
                        <p className="vid-card-text">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="vid-section" id="class-video">
                  <div className="vid-section-top">
                    <h2>클래스워크</h2>
                  </div>

                  <p>수업 중 제작한 영상 작업</p>

                  <div className="vid-list">
                    {videoSections.classwork.map((item) => (
                      <div className="vid-card" key={item.id}>
                        <video controls className="vid-player">
                          <source src={item.src} type="video/mp4" />
                        </video>

                        <div className="vid-card-head">
                          <h3 className="vid-card-title">{item.title}</h3>

                          {item.notionUrl && (
                            <a
                              className="vid-card-notion"
                              href={item.notionUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              노션 보러가기
                            </a>
                          )}
                        </div>

                        <p className="vid-card-text">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VideoPage;