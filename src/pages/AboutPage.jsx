import SideMenu from "../components/SideMenu";
import "../styles/about.css";

function AboutPage() {
  return (
    <main className="page-wrap">
      <section className="page-frame">
        <div className="inner">
          <SideMenu />

          <h1 className="abt-title">소개</h1>

          <div className="sub-inner">
            <div className="abt-body">
              <p className="abt-text">여기에 자소서 형식의 소개 내용을 넣으면 돼.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;