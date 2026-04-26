import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { webProjects } from "../js/web";
import "../styles/web.css";

function WebPage() {
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
    <main className="page-wrap web-page-wrap">
      <section
        className="page-frame web-page-frame"
        onClick={() => navigate("/")}
      >
        <div className="inner web-page-inner">
          <div className="web-header">
            <h1 className="web-title">웹페이지</h1>

            <div
              className="web-header-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <SideMenu />
            </div>
          </div>

          <div
            className="sub-inner web-sub-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="web-scroll-area">
              <div className="web-body">
                {webProjects.map((project) => (
                  <section
                    className="web-section"
                    id={project.id}
                    key={project.id}
                  >
                    <div className="web-section-top">
                      <h2>{project.title}</h2>

                      <div className="web-top-links">
                        <a
                          className="web-notion-top"
                          href={project.notionUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          노션 보러가기
                        </a>

                        <a
                          className="web-site01"
                          href={project.siteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          사이트 보러가기
                        </a>
                      </div>
                    </div>

                    <p>{project.desc}</p>

                    <div className="web-thumb">
                      <div className="web-thumb-scroll">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="web-thumb-img"
                        />
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebPage;