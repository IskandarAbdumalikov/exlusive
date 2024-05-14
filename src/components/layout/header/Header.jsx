import React, { useEffect, useState } from "react";
import "./header.scss";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [closeNavList, setCloseNavList] = useState(false);
  const [module, setModule] = useState(false);

  const handleOpneNavList = () => {
    setCloseNavList(true);
    document.body.style.overflow = "auto";
  };

  const handleCloseNavList = () => {
    setCloseNavList(false);
    setModule(false);
  };
  let isLogin = localStorage.getItem("x-auth-token");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  {
    closeNavList
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  return (
    <header className={shrink ? " show__header-shrink" : ""}>
      <div className="header__top">
        <div className="container df h">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className="shop__now-link" href="/pages/login.html">
              Shop now
            </a>
          </p>
          <select name="" id="language__select">
            <option value="english">English</option>
            <option value="uzbek">Uzbek</option>
            <option value="russian">Russian</option>
          </select>
        </div>
      </div>
      <div className="container">
        <nav className="header__nav df">
          <div
            onClick={handleCloseNavList}
            className={
              closeNavList || module
                ? "nav__overlay show__nav-overlay"
                : "nav__overlay"
            }
          ></div>
          <div className="header__nav__logo">
            <NavLink to={"/"}>Exclusive</NavLink>
          </div>
          <ul
            className={
              closeNavList
                ? "header__nav__right__list nav__list show__nav-list"
                : "header__nav__right__list nav__list"
            }
          >
            <li className="header__nav__right__list__item">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="header__nav__right__list__item">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li className="header__nav__right__list__item">
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li className="header__nav__right__list__item">
              <NavLink to={isLogin ? "/admin" : "/login"}>
                {isLogin ? "Admin" : "Log in"}
              </NavLink>
            </li>
            <h1 className="nav__list-closer" onClick={handleCloseNavList}>
              X
            </h1>
          </ul>
          <div className="header__nav__right__btns df">
            <form className="header__form">
              <input
                className="search__input"
                placeholder="What are you looking for"
                type="text"
              />
              <img src="/images/search.svg" alt="" />
            </form>
            <img src="/images/korzina.svg" alt="" />
            <FaBars onClick={handleOpneNavList} className="nav__bar" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
