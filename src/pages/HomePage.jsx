import { useNavigate } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import { homeItems } from "../js/home";
import headImg from "../assets/images/home/head.png";
import headBubbleImg from "../assets/images/home/meBubbleImg.png";
import "../styles/home.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="page-wrap home">
      <section className="page-frame">
        <div className="inner home-inner">
          <SideMenu />

          <button
            type="button"
            className="home-head"
            onClick={() => navigate("/about")}
            aria-label="소개 페이지로 이동"
          >
            <div className="home-head-bubble">
              <img
                src={headBubbleImg}
                alt=""
                className="home-head-bubble-img"
              />
            </div>

            <img
              src={headImg}
              alt="소개 페이지로 이동"
              className="home-head-img"
            />
          </button>

          <p className="home-guide-text">
            아이콘을 클릭해서 작업물을 둘러보세요
          </p>

          <div className="home-icon-list">
            {homeItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`home-icon-item home-icon-item-${item.id}`}
                onClick={() => navigate(item.path)}
                aria-label={item.title}
              >
                <div className="home-bubble">
                  <img
                    src={item.bubbleImg}
                    alt=""
                    className="home-bubble-img"
                  />
                </div>

                <span className="home-icon-visual">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="home-icon-img"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;