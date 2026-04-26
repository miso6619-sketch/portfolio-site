import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "../styles/about.css";

function AboutPage() {
  const navigate = useNavigate();

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
                <p className="abt-text">
                  여기에 자소서 형식의 소개 내용을 넣으면 돼.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;