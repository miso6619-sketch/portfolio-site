import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import "../styles/design.css";

function DesignPage() {
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
          <SideMenu />

          <h1 className="dsn-title">디자인</h1>

          <div className="sub-inner">
            <div className="dsn-body">
              <section className="dsn-section" id="design-01">
                <h2>작업 01</h2>
                <p>여기에 첫 번째 디자인 작업 내용을 넣으면 돼.</p>
              </section>

              <section className="dsn-section" id="design-02">
                <h2>작업 02</h2>
                <p>여기에 두 번째 디자인 작업 내용을 넣으면 돼.</p>
              </section>

              <section className="dsn-section" id="design-03">
                <h2>작업 03</h2>
                <p>여기에 세 번째 디자인 작업 내용을 넣으면 돼.</p>
              </section>

              <section className="dsn-section" id="design-04">
                <h2>작업 04</h2>
                <p>여기에 네 번째 디자인 작업 내용을 넣으면 돼.</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DesignPage;