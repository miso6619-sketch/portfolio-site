import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { videoSections, videoSectionLinks } from "../js/video";
import "../styles/video.css";

function VideoPage() {
  const location = useLocation();

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
    <main className="page-wrap">
      <section className="page-frame">
        <div className="inner">
          <div className="vid-header">
            <h1 className="vid-title">영상편집</h1>
            <SideMenu />
          </div>

          <div className="sub-inner">
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

                <p>등산 정보를 제공하는 '산타' 사이트 헤더 영상 작업</p>

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

                <p>Y2K 감성 기반의 게임형 영상 작업</p>

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

                <p>개인정보보호, 딥페이크 관련 영상</p>

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
      </section>
    </main>
  );
}

export default VideoPage;