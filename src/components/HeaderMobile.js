import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function HeaderMobile() {
  const itemsNumber = useSelector((state) => state.cart.itemsNumber);
  const [menuMobile, setMenuMobile] = useState(false);

  const menuTabletMobileContainer = useRef(null);

  const history = useHistory();

  const showMenuMobile = () => {
    setMenuMobile(true);
  };

  const hideMenuTabletMobile = (e) => {
    if (e.target === menuTabletMobileContainer.current) {
      setMenuMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", hideMenuTabletMobile);
    return () => {
      window.removeEventListener("click", hideMenuTabletMobile);
    };
  }, [menuMobile]);

  const directFromMenuListMoblie = () => {
    setMenuMobile(false);
    document.querySelector("input[type=checkbox]").checked = false;
  };

  return (
    <>
      <div id="header-tablet-mobile">
        <div id="hamberger">
          <i className="fas fa-bars hamberger" onClick={showMenuMobile} />
        </div>
        <div id="logo-search-tablet-mobile">
          <img
            id="logo-tablet-mobile"
            src="/img/logo-tablet-mobile.png"
            alt="logo"
            onClick={() => history.push("/")}
          />
          <div id="search-bar-tablet-mobile">
            <input
              id="input-search-tablet-mobile"
              type="text"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button
              id="search-btn-tablet-mobile"
              style={{ color: "#ff4b04", fontSize: 16 }}
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
        <Link to="/cart" className="upline-item">
          <img id="cart" src="/img/cart.png" alt="cart" />
          <div id="cart-count">{itemsNumber}</div>
        </Link>
      </div>
      {/* menu tablet mobile */}
      <div
        id="mobile-menu-container"
        className={menuMobile && "show"}
        ref={menuTabletMobileContainer}
      >
        <div id="mobile-menu">
          <div id="signin-signup">
            <div>
              <i className="fas fa-user-circle" />
            </div>
            <Link to="/login" onClick={() => setMenuMobile(false)}>
              Đăng nhập / Đăng ký
            </Link>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "rgba(38, 121, 255, 0.9)",
              fontWeight: 500,
            }}
          >
            Danh mục sản phẩm
          </p>
          <div className="mobile-menu-item-lv-1">
            <Link to="/products-list" onClick={directFromMenuListMoblie}>
              PC, Workstation
            </Link>
            <input type="checkbox" id="A" />
            <label htmlFor="A">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="A-1" />
                  <label htmlFor="A-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="A-2" />
                  <label htmlFor="A-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="A-3" />
                  <label htmlFor="A-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="A-4" />
                  <label htmlFor="A-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="A-5" />
                  <label htmlFor="A-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <Link to="/products-list" onClick={directFromMenuListMoblie}>
              Laptop
            </Link>
            <input type="checkbox" id="B" />
            <label htmlFor="B">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Laptop theo thương hiệu
                  </Link>
                  <input type="checkbox" id="B-1" />
                  <label htmlFor="B-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Laptop theo nhu cầu
                  </Link>
                  <input type="checkbox" id="B-2" />
                  <label htmlFor="B-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa, kiến trúc
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Mỏng nhẹ, thời trang
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Sinh viên
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Doanh nhân, văn phòng
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Laptop theo tầm giá
                  </Link>
                  <input type="checkbox" id="B-3" />
                  <label htmlFor="B-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Kích thước màn hình
                  </Link>
                  <input type="checkbox" id="B-4" />
                  <label htmlFor="B-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <Link
                      to="/products-list"
                      onClick={directFromMenuListMoblie}
                    >
                      Dưới 13 inch
                    </Link>
                    <Link
                      to="/products-list"
                      onClick={directFromMenuListMoblie}
                    >
                      Từ 13 - 15.6 inch
                    </Link>
                    <Link
                      to="/products-list"
                      onClick={directFromMenuListMoblie}
                    >
                      Trên 15.6 inch
                    </Link>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Laptop theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="B-5" />
                  <label htmlFor="B-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">CPU - Bộ vi xử lý</a>
            <input type="checkbox" id="C" />
            <label htmlFor="C">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="C-1" />
                  <label htmlFor="C-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="C-2" />
                  <label htmlFor="C-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="C-3" />
                  <label htmlFor="C-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="C-4" />
                  <label htmlFor="C-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="C-5" />
                  <label htmlFor="C-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Main - Bo mạch chủ</a>
            <input type="checkbox" id="D" />
            <label htmlFor="D">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="D-1" />
                  <label htmlFor="D-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="D-2" />
                  <label htmlFor="D-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="D-3" />
                  <label htmlFor="D-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="D-4" />
                  <label htmlFor="D-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="D-5" />
                  <label htmlFor="D-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <Link to="/products-list" onClick={directFromMenuListMoblie}>
              RAM
            </Link>
            <input type="checkbox" id="E" />
            <label htmlFor="E">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="E-1" />
                  <label htmlFor="E-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="E-2" />
                  <label htmlFor="E-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="E-3" />
                  <label htmlFor="E-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="E-4" />
                  <label htmlFor="E-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="E-5" />
                  <label htmlFor="E-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <Link to="/products-list" onClick={directFromMenuListMoblie}>
              VGA - Card màn hình
            </Link>
            <input type="checkbox" id="F" />
            <label htmlFor="F">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="F-1" />
                  <label htmlFor="F-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="F-2" />
                  <label htmlFor="F-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="F-3" />
                  <label htmlFor="F-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="F-4" />
                  <label htmlFor="F-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="F-5" />
                  <label htmlFor="F-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <Link to="/products-list" onClick={directFromMenuListMoblie}>
              Monitor - Mành hình
            </Link>
            <input type="checkbox" id="G" />
            <label htmlFor="G">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="G-1" />
                  <label htmlFor="G-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="G-2" />
                  <label htmlFor="G-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="G-3" />
                  <label htmlFor="G-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="G-4" />
                  <label htmlFor="G-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="G-5" />
                  <label htmlFor="G-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <Link to="/products-list" onClick={directFromMenuListMoblie}>
              Thiết bị lưu trữ
            </Link>
            <input type="checkbox" id="H" />
            <label htmlFor="H">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="H-1" />
                  <label htmlFor="H-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="H-2" />
                  <label htmlFor="H-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="H-3" />
                  <label htmlFor="H-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="H-4" />
                  <label htmlFor="H-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="H-5" />
                  <label htmlFor="H-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Mouse - Chuột</a>
            <input type="checkbox" id="I" />
            <label htmlFor="I">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="I-1" />
                  <label htmlFor="I-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="I-2" />
                  <label htmlFor="I-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="I-3" />
                  <label htmlFor="I-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="I-4" />
                  <label htmlFor="I-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="I-5" />
                  <label htmlFor="I-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Keybroad - Bàn phím</a>
            <input type="checkbox" id="K" />
            <label htmlFor="K">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="K-1" />
                  <label htmlFor="K-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="K-2" />
                  <label htmlFor="K-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="K-3" />
                  <label htmlFor="K-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="K-4" />
                  <label htmlFor="K-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="K-5" />
                  <label htmlFor="K-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Thiết bị âm thanh</a>
            <input type="checkbox" id="L" />
            <label htmlFor="L">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="L-1" />
                  <label htmlFor="L-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="L-2" />
                  <label htmlFor="L-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="L-3" />
                  <label htmlFor="L-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="L-4" />
                  <label htmlFor="L-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="L-5" />
                  <label htmlFor="L-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Nguồn máy tính</a>
            <input type="checkbox" id="M" />
            <label htmlFor="M">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="M-1" />
                  <label htmlFor="M-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="M-2" />
                  <label htmlFor="M-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="M-3" />
                  <label htmlFor="M-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="M-4" />
                  <label htmlFor="M-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="M-5" />
                  <label htmlFor="M-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Cooling - Tản nhiệt</a>
            <input type="checkbox" id="N" />
            <label htmlFor="N">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="N-1" />
                  <label htmlFor="N-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="N-2" />
                  <label htmlFor="N-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="N-3" />
                  <label htmlFor="N-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="N-4" />
                  <label htmlFor="N-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="N-5" />
                  <label htmlFor="N-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-item-lv-1">
            <a href="#">Phụ kiện máy tính</a>
            <input type="checkbox" id="O" />
            <label htmlFor="O">
              <i className="fa fa-caret-right submenu-caret" />
            </label>
            <ul>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo thương hiệu
                  </Link>
                  <input type="checkbox" id="O-1" />
                  <label htmlFor="O-1">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        MSI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ASUS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gigabyte
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        ACER
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Lenovo
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Apple
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo nhu cầu
                  </Link>
                  <input type="checkbox" id="O-2" />
                  <label htmlFor="O-2">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Văn phòng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Gaming
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Đồ họa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC All in one
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        PC Mini
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo tầm giá
                  </Link>
                  <input type="checkbox" id="O-3" />
                  <label htmlFor="O-3">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Dưới 10 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 10 triệu - 15 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 15 triệu - 20 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Từ 20 triệu - 25 triệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Trên 25 triệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    Máy trạm Workstation
                  </Link>
                  <input type="checkbox" id="O-4" />
                  <label htmlFor="O-4">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        DELL Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        HP Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Render, đồ họa Workstation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Deep learning Workstation
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="mobile-menu-item-lv-2">
                  <Link to="/products-list" onClick={directFromMenuListMoblie}>
                    PC theo cấu hình chip
                  </Link>
                  <input type="checkbox" id="O-5" />
                  <label htmlFor="O-5">
                    <i className="fa fa-caret-right submenu-caret" />
                  </label>
                  <ul>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        Intel Core-i9
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 5
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 7
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products-list"
                        onClick={directFromMenuListMoblie}
                      >
                        AMD Ryzen 9
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
