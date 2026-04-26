import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SideMenu from "../components/SideMenu";
import { designProjects } from "../js/design.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/design.css";

function DesignPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalProject, setModalProject] = useState(null);

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

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  const renderNormalThumb = (project) => {
    const thumbImage = project.images ? project.images[0] : null;

    return (
      <button
        type="button"
        className="dsn-thumb"
        onClick={() => openModal(project)}
      >
        <img
          src={thumbImage ? thumbImage.src : project.image}
          alt={thumbImage ? thumbImage.alt : project.imageAlt}
          className="dsn-thumb-img"
        />

        <span className="dsn-thumb-cover">
          <span>작업물 자세히 보기</span>
        </span>
      </button>
    );
  };

  const renderCompareThumb = (project) => {
    return (
      <button
        type="button"
        className="dsn-compare-thumb"
        onClick={() => openModal(project)}
      >
        <div className="dsn-compare-side">
          {project.compareImages.before.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="dsn-compare-img"
            />
          ))}
        </div>

        <span className="dsn-compare-arrow">→</span>

        <div className="dsn-compare-side">
          {project.compareImages.after.slice(0, 2).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="dsn-compare-img"
            />
          ))}
        </div>

        <span className="dsn-thumb-cover">
          <span>작업물 자세히 보기</span>
        </span>
      </button>
    );
  };

  const renderCompareModal = () => {
    return (
      <div className="dsn-modal-compare">
        <div className="dsn-modal-compare-side">
          <h3>원 사이트 디자인</h3>

          <div className="dsn-modal-compare-img-list">
            {modalProject.compareImages.before.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="dsn-modal-img"
              />
            ))}
          </div>
        </div>

        <span className="dsn-modal-arrow">→</span>

        <div className="dsn-modal-compare-side">
          <h3>리디자인 작업물</h3>

          <div className="dsn-modal-compare-img-list">
            {modalProject.compareImages.after.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="dsn-modal-img"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderMultiImageModal = () => {
    return (
      <div className="dsn-modal-img-list">
        {modalProject.images.map((image, index) => (
          <div className="dsn-modal-img-item" key={index}>
            {image.label && <h3>{image.label}</h3>}

            <img
              src={image.src}
              alt={image.alt}
              className="dsn-modal-img"
            />
          </div>
        ))}
      </div>
    );
  };

  const renderSingleImageModal = () => {
    return (
      <img
        src={modalProject.image}
        alt={modalProject.imageAlt}
        className="dsn-modal-img"
      />
    );
  };

  const renderModalContent = () => {
    if (modalProject.compareImages) {
      return renderCompareModal();
    }

    if (modalProject.images) {
      return renderMultiImageModal();
    }

    return renderSingleImageModal();
  };

  const renderPhotoshopContent = (project) => {
    if (project.compareImages) {
      return renderCompareThumb(project);
    }

    return renderNormalThumb(project);
  };

  const renderFigmaCard = (image, index) => {
    return (
      <div className="dsn-figma-static-item" key={index}>
        <div className="dsn-figma-slide">
          <div className="dsn-figma-img-scroll">
            <img src={image.src} alt={image.alt} />
          </div>

          {image.label && (
            <span className="dsn-figma-label">{image.label}</span>
          )}
        </div>
      </div>
    );
  };

  const renderMobileFigmaSwiper = (project, images) => {
    const isSwiper = images.length >= 4;
    const prevClass = `dsn-figma-prev-${project.id}-mobile`;
    const nextClass = `dsn-figma-next-${project.id}-mobile`;

    if (!isSwiper) {
      return (
        <div className="dsn-figma-content">
          <div className="dsn-figma-static-list">
            {images.map((image, index) => renderFigmaCard(image, index))}
          </div>
        </div>
      );
    }

    return (
      <div className="dsn-figma-content">
        <div className="dsn-figma-swiper-wrap">
          <button
            type="button"
            className={`dsn-figma-nav dsn-figma-prev ${prevClass}`}
            aria-label="이전 슬라이드"
          >
            <span>‹</span>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = `.${prevClass}`;
              swiper.params.navigation.nextEl = `.${nextClass}`;
            }}
            navigation={{
              prevEl: `.${prevClass}`,
              nextEl: `.${nextClass}`,
            }}
            pagination={{ clickable: true }}
            watchOverflow={true}
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              481: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 18,
              },
              769: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
              },
              1180: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 24,
              },
            }}
            className="dsn-figma-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide className="dsn-figma-swiper-item" key={index}>
                <div className="dsn-figma-slide">
                  <div className="dsn-figma-img-scroll">
                    <img src={image.src} alt={image.alt} />
                  </div>

                  {image.label && (
                    <span className="dsn-figma-label">{image.label}</span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className={`dsn-figma-nav dsn-figma-next ${nextClass}`}
            aria-label="다음 슬라이드"
          >
            <span>›</span>
          </button>
        </div>
      </div>
    );
  };

  const renderWebFigmaSwiper = (project, images) => {
    const prevClass = `dsn-figma-prev-${project.id}-web`;
    const nextClass = `dsn-figma-next-${project.id}-web`;

    return (
      <div className="dsn-figma-content dsn-figma-web-content">
        <div className="dsn-figma-swiper-wrap">
          <button
            type="button"
            className={`dsn-figma-nav dsn-figma-prev ${prevClass}`}
            aria-label="이전 웹 슬라이드"
          >
            <span>‹</span>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = `.${prevClass}`;
              swiper.params.navigation.nextEl = `.${nextClass}`;
            }}
            navigation={{
              prevEl: `.${prevClass}`,
              nextEl: `.${nextClass}`,
            }}
            pagination={{ clickable: true }}
            watchOverflow={true}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={24}
            className="dsn-figma-swiper dsn-figma-web-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide className="dsn-figma-web-swiper-item" key={index}>
                <div className="dsn-figma-web-slide">
                  <div className="dsn-figma-web-img-scroll">
                    <img src={image.src} alt={image.alt} />
                  </div>

                  {image.label && (
                    <span className="dsn-figma-label">{image.label}</span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className={`dsn-figma-nav dsn-figma-next ${nextClass}`}
            aria-label="다음 웹 슬라이드"
          >
            <span>›</span>
          </button>
        </div>
      </div>
    );
  };

  const renderFigmaContent = (project) => {
    const mobileImages = project.images || [];
    const webImages = project.webImages || [];

    if (webImages.length > 0) {
      return (
        <div className="dsn-figma-dual-content">
          <div className="dsn-figma-block">
            <h3 className="dsn-figma-block-title">웹 디자인</h3>
            {renderWebFigmaSwiper(project, webImages)}
          </div>

          <div className="dsn-figma-block">
            <h3 className="dsn-figma-block-title">모바일 디자인</h3>
            {renderMobileFigmaSwiper(project, mobileImages)}
          </div>
        </div>
      );
    }

    return renderMobileFigmaSwiper(project, mobileImages);
  };

  const renderProjectContent = (project) => {
    if (project.type === "photoshop" || project.viewType === "modal") {
      return renderPhotoshopContent(project);
    }

    if (project.type === "figma") {
      return renderFigmaContent(project);
    }

    return null;
  };

  const renderProjectLinks = (project) => {
    if (project.type === "figma") {
      return (
        <div className="dsn-top-links">
          <a
            className="dsn-notion"
            href={project.notionUrl}
            target="_blank"
            rel="noreferrer"
          >
            노션 보러가기
          </a>

          {project.siteUrl && (
            <a
              className="dsn-site"
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
            >
              사이트 보러가기
            </a>
          )}

          {project.uiImage && (
            <a
              className="dsn-ui"
              href={project.uiImage.src}
              target="_blank"
              rel="noreferrer"
            >
              UI 스타일 보러가기
            </a>
          )}

          {project.webProtoUrl && (
            <a
              className="dsn-proto"
              href={project.webProtoUrl}
              target="_blank"
              rel="noreferrer"
            >
              웹 프로토타입 보러가기
            </a>
          )}

          {project.mobileProtoUrl && (
            <a
              className="dsn-proto"
              href={project.mobileProtoUrl}
              target="_blank"
              rel="noreferrer"
            >
              모바일 프로토타입 보러가기
            </a>
          )}

          {!project.webProtoUrl && !project.mobileProtoUrl && project.protoUrl && (
            <a
              className="dsn-proto"
              href={project.protoUrl}
              target="_blank"
              rel="noreferrer"
            >
              프로토타입 보러가기
            </a>
          )}
        </div>
      );
    }

    return (
      <div className="dsn-top-links">
        <a
          className="dsn-notion"
          href={project.notionUrl}
          target="_blank"
          rel="noreferrer"
        >
          노션 보러가기
        </a>

        {project.siteUrl && (
          <a
            className="dsn-site"
            href={project.siteUrl}
            target="_blank"
            rel="noreferrer"
          >
            사이트 보러가기
          </a>
        )}
      </div>
    );
  };

  return (
    <main className="page-wrap dsn-page-wrap">
      <section
        className="page-frame dsn-page-frame"
        onClick={() => navigate("/")}
      >
        <div className="inner dsn-page-inner">
          <div className="dsn-header">
            <h1 className="dsn-title">디자인</h1>

            <div
              className="dsn-header-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <SideMenu />
            </div>
          </div>

          <div
            className="sub-inner dsn-sub-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="dsn-scroll-area">
              <div className="dsn-body">
                {designProjects.map((project) => (
                  <section
                    className={
                      project.type === "figma"
                        ? "dsn-section dsn-figma-section"
                        : "dsn-section"
                    }
                    id={project.id}
                    key={project.id}
                  >
                    <div className="dsn-section-top">
                      <div>
                        <span className="dsn-type-label">
                          {project.type === "figma" ? "Figma" : "Photoshop"}
                        </span>

                        <h2>{project.title}</h2>
                      </div>

                      {renderProjectLinks(project)}
                    </div>

                    <p>{project.desc}</p>

                    {renderProjectContent(project)}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalProject && (
        <div className="dsn-modal" onClick={closeModal}>
          <div className="dsn-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="dsn-modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="dsn-modal-img-wrap">{renderModalContent()}</div>
          </div>
        </div>
      )}
    </main>
  );
}

export default DesignPage;