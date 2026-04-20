import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "../styles/web.css";

function WebPage() {
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
          <div className="web-header">
            <h1 className="web-title">웹페이지</h1>
            <SideMenu />
          </div>

          <div className="sub-inner">
            <div className="web-body">
              <section className="web-section" id="web-project-01">
                <h2>프로젝트 01</h2>
                <p>여기에 첫 번째 웹 프로젝트 내용을 넣으면 돼.</p>
              </section>

              <section className="web-section" id="web-project-02">
                <h2>프로젝트 02</h2>
                <p>여기에 두 번째 웹 프로젝트 내용을 넣으면 돼.</p>
              </section>

              <section className="web-section" id="web-project-03">
                <h2>프로젝트 03</h2>
                <p>여기에 세 번째 웹 프로젝트 내용을 넣으면 돼.</p>
              </section>

              <section className="web-section" id="web-project-04">
                <h2>프로젝트 04</h2>
                <p>여기에 네 번째 웹 프로젝트 내용을 넣으면 돼.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebPage;