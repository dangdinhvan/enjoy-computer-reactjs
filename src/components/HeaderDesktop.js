import logo from "../img/logo-favicon.png";
import logoSlim from "../img/logo-tablet-mobile.png";
import { useState, useEffect, useRef } from "react";
import { useRouteMatch, useHistory } from "react-router";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function HeaderDesktop({
  toggleMenuList,
  sendMenuScrollBtn,
  updateInputSearchValue,
  searchFunction,
  suggestionKeywords,
  inputSearchValueProp,
  searchFromSuggestion,
}) {
  const [logoImg, setLogoImg] = useState(logo);
  const [logoScrolled, setLogoScrolled] = useState(false);
  const [menuScroll, setMenuScroll] = useState(false);
  const [suggestionBox, setSuggestionBox] = useState(false);

  const menuScrollBtn = useRef(null);
  const inputSearch = useRef(null);
  const searchBar = useRef(null);
  const searchBtn = useRef(null);

  const history = useHistory();

  let match = useRouteMatch({
    path: "/",
    exact: true,
  });

  const itemsNumber = useSelector((state) => state.cart.itemsNumber);

  useEffect(() => {
    sendMenuScrollBtn(menuScrollBtn.current);
  });

  // an hien nut bat tat menu fixed
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 550) {
      setLogoImg(logoSlim);
      setLogoScrolled(true);
      setMenuScroll(true);
    } else {
      setLogoImg(logo);
      setLogoScrolled(false);
      setMenuScroll(false);
    }
  };

  useEffect(() => {
    if (match) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    } else {
      setLogoImg(logoSlim);
      setLogoScrolled(true);
      setMenuScroll(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // an hien suggestion box
  const focusIn = () => {
    searchBar.current.style.boxShadow = "0px 1px 7px rgba(0,0,0,0.25)";
    setSuggestionBox(true);
  };

  const focusOut = (e) => {
    searchBar.current.style.boxShadow = "none";
    if (e.target !== inputSearch.current && e.target !== searchBtn.current) {
      setSuggestionBox(false);
    }
    console.log("focus out");
  };

  useEffect(() => {
    inputSearch.current.addEventListener("focus", focusIn);
    inputSearch.current.addEventListener("keydown", focusIn);

    if (suggestionBox === true) {
      window.addEventListener("click", focusOut);
    }

    return () => {
      inputSearch.current.removeEventListener("focusin", focusIn);
      inputSearch.current.removeEventListener("keydown", focusIn);
      window.removeEventListener("click", focusOut);
    };
  }, [suggestionBox, suggestionKeywords, inputSearchValueProp]);

  return (
    <div id="nav-bar">
      <div
        id="logo-box"
        className={logoScrolled ? "logo-scrolled" : "logo-normal"}
      >
        <img src={logoImg} alt="logo" />
        <button
          id="menu-scroll"
          className={menuScroll ? "show" : "hide"}
          onClick={toggleMenuList}
          ref={menuScrollBtn}
        >
          <i className="fas fa-bars" style={{ color: "white" }} />
          <span style={{ color: "white" }}>Danh mục sản phẩm</span>
        </button>
      </div>

      <div id="items">
        <div id="upline">
          <div id="search-bar-container">
            <div id="search-bar" ref={searchBar}>
              <input
                id="input-search"
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                onChange={updateInputSearchValue}
                ref={inputSearch}
                value={inputSearchValueProp}
              />
              <button
                id="search-btn"
                style={{ color: "white", fontSize: 16 }}
                onClick={() => searchFunction(history)}
                ref={searchBtn}
              >
                <i className="fas fa-search" />
              </button>
            </div>
            <div
              id="suggestion-container"
              className={suggestionBox ? "show" : "hide"}
            >
              {inputSearchValueProp === "" && <p>Gợi ý cho bạn</p>}
              {suggestionKeywords &&
                suggestionKeywords.map((suggestionKeywords, index) => (
                  <div
                    id="suggestion-box"
                    key={index}
                    onClick={() =>
                      searchFromSuggestion(suggestionKeywords, history)
                    }
                  >
                    <i
                      className="fas fa-search"
                      style={{ marginRight: "7px" }}
                    ></i>
                    {suggestionKeywords}
                  </div>
                ))}
            </div>
          </div>
          <div id="items-of-upline">
            <a
              id="phone-header-btn"
              className="upline-item"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-phone-alt icon" />
              <div className="text-upline-item">
                <p id="text-hotline">Hot line</p>
                <p id="hotline-number">19006868</p>
              </div>
            </a>
            <a href="./laptop.html" className="upline-item">
              <i className="fas fa-desktop icon" />
              <div className="text-upline-item">
                <p>Xây dựng</p>
                <p>cấu hình PC</p>
              </div>
            </a>
            <a href="./login.html" className="upline-item">
              <i className="fas fa-user-circle icon" />
              <div className="text-upline-item">
                <p>Đăng nhập</p>
                <p>Đăng ký</p>
              </div>
            </a>
            <Link to="/cart" className="upline-item">
              <img id="cart" src="/img/cart.png" alt="cart" />
              <div id="cart-count">{itemsNumber}</div>
            </Link>
          </div>
        </div>
        <div id="underline">
          <a className="items-of-underline" href="./laptop.html">
            <div>
              <i className="fas fa-paste items-of-underline-icon" />
            </div>
            <p>Tin tức công nghệ</p>
          </a>
          <a className="items-of-underline" href="./laptop.html">
            <div>
              <i className="fas fa-bolt items-of-underline-icon" />
            </div>
            <p>Chương trình khuyến mãi</p>
          </a>
          <a className="items-of-underline" href="./laptop.html">
            <div>
              <i className="fas fa-coins items-of-underline-icon" />
            </div>
            <p>Hướng dẫn trả góp</p>
          </a>
          <a className="items-of-underline" href="./laptop.html">
            <div>
              <i className="fas fa-tools items-of-underline-icon" />
            </div>
            <p>Chính sách bảo hành</p>
          </a>
          <a className="items-of-underline" href="./laptop.html">
            <div>
              <i className="fas fa-sync items-of-underline-icon" />
            </div>
            <p>Đổi trả miễn phí</p>
          </a>
          <a className="items-of-underline" href="./laptop.html">
            <div>
              <i className="fas fa-truck items-of-underline-icon" />
            </div>
            <p>Miễn phí vận chuyển</p>
          </a>
        </div>
      </div>
    </div>
  );
}
