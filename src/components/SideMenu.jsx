import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HiBars3, HiXMark, HiChevronDown, HiHome } from "react-icons/hi2";
import { navItems } from "../js/menu";
import "../styles/menu.css";

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenu("");
  };

  const toggleMenu = (title) => {
    setOpenMenu((prev) => (prev === title ? "" : title));
  };

  const moveToSection = (path, sectionId) => {
    closeMenu();

    if (location.pathname === path) {
      const target = document.getElementById(sectionId);

      if (target) {
        window.history.replaceState(null, "", `${path}#${sectionId}`);
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(`${path}#${sectionId}`);
  };

  const clickMainMenu = (item) => {
    const hasChildren = item.children && item.children.length > 0;

    if (!hasChildren) {
      closeMenu();
      navigate(item.path);
      return;
    }

    toggleMenu(item.title);
  };

  const goHome = () => {
    closeMenu();
    window.location.href = import.meta.env.BASE_URL;
  };

  return (
    <>
      <div className="menu-button-wrap">
        <button
          type="button"
          className="home-trigger"
          onClick={goHome}
          aria-label="홈으로 이동"
        >
          <HiHome />
        </button>

        <button
          type="button"
          className="menu-trigger"
          onClick={() => setMenuOpen(true)}
          aria-label="메뉴 열기"
        >
          <HiBars3 />
        </button>
      </div>

      <div
        className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />

      <aside className={`side-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="side-menu-top">
          <h2 className="side-menu-title">Menu</h2>

          <button
            type="button"
            className="side-menu-close"
            onClick={closeMenu}
            aria-label="메뉴 닫기"
          >
            <HiXMark />
          </button>
        </div>

        <nav className="side-menu-nav">
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openMenu === item.title;

            return (
              <div className="side-menu-group" key={item.title}>
                <button
                  type="button"
                  className={`side-menu-main ${isOpen ? "active" : ""}`}
                  onClick={() => clickMainMenu(item)}
                >
                  <span className="side-menu-main-text">{item.title}</span>

                  {hasChildren && (
                    <span className={`side-menu-arrow ${isOpen ? "is-open" : ""}`}>
                      <HiChevronDown />
                    </span>
                  )}
                </button>

                {hasChildren && (
                  <div className={`side-sub-menu ${isOpen ? "is-open" : ""}`}>
                    {item.children.map((child) => (
                      <button
                        key={child.sectionId}
                        type="button"
                        className="side-sub-menu-btn"
                        onClick={() => moveToSection(item.path, child.sectionId)}
                      >
                        <span className="side-sub-menu-dot"></span>
                        <span>{child.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default SideMenu;