import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useHistory } from "react-router";

import MenuFixedStyled from "./MenuFixed";

function NextArrowCarousel({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        right: "0px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrowCarousel({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "50%",
        left: "0px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function HomePage({
  className,
  menuFixedStatus,
  sendRequestHideMenufixed,
  menuScrollBtn,
}) {
  const settingsCarousel = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrowCarousel />,
    prevArrow: <PrevArrowCarousel />,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventMouseUp = (e) => {
    if (
      e.target !== menuScrollBtn &&
      e.target !== menuScrollBtn.children[0] &&
      e.target !== menuScrollBtn.children[1]
    ) {
      sendRequestHideMenufixed("true");
    }
  };

  const eventScroll = () => {
    if (window.scrollY < 500) {
      sendRequestHideMenufixed("true");
    }
  };

  useEffect(() => {
    if (menuFixedStatus === true) {
      window.addEventListener("mouseup", eventMouseUp);
      window.addEventListener("scroll", eventScroll);
    }
    return () => {
      window.removeEventListener("mouseup", eventMouseUp);
      window.removeEventListener("scroll", eventScroll);
    };
  }, [menuFixedStatus]);

  return (
    <div className={className}>
      <MenuFixedStyled menuFixedStatus={menuFixedStatus} />

      {/* conatiner */}
      <div id="container">
        <div id="menu-and-ads">
          <div id="menu">
            <div id="menu-header">
              <div>
                <i className="fas fa-bars" />
              </div>
              <span>Danh mục sản phẩm</span>
            </div>
            <div id="list-item-box">
              <ul id="list-item">
                <li>
                  <Link to="products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/pc-icon.png" alt="pc-icon" />
                      <span>PC, Workstation</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: 8 }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="./laptop.html">MSI</a>
                        <a href="./laptop.html">ASUS</a>
                        <a href="./laptop.html">Gigabyte</a>
                        <a href="./laptop.html">HP</a>
                        <a href="./laptop.html">DELL</a>
                        <a href="./laptop.html">ACER</a>
                        <a href="./laptop.html">Lenovo</a>
                        <a href="./laptop.html">Apple</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="./laptop.html">Văn phòng</a>
                        <a href="./laptop.html">Gaming</a>
                        <a href="./laptop.html">Đồ họa</a>
                        <a href="./laptop.html">PC All in one</a>
                        <a href="./laptop.html">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="./laptop.html">Dưới 10 triệu</a>
                        <a href="./laptop.html">Từ 10 triệu - 15 triệu</a>
                        <a href="./laptop.html">Từ 15 triệu - 20 triệu</a>
                        <a href="./laptop.html">Từ 20 triệu - 25 triệu</a>
                        <a href="./laptop.html">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="./laptop.html">DELL Workstation</a>
                        <a href="./laptop.html">HP Workstation</a>
                        <a href="./laptop.html">Render, đồ họa Workstation</a>
                        <a href="./laptop.html">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="./laptop.html">Intel Core-i3</a>
                        <a href="./laptop.html">Intel Core-i5</a>
                        <a href="./laptop.html">Intel Core-i7</a>
                        <a href="./laptop.html">Intel Core-i9</a>
                        <a href="./laptop.html">AMD Ryzen 3</a>
                        <a href="./laptop.html">AMD Ryzen 5</a>
                        <a href="./laptop.html">AMD Ryzen 7</a>
                        <a href="./laptop.html">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/laptop-icon.png" alt="laptop-icon" />
                      <span>Laptop</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href="./laptop.html">ASUS</a>
                        <a href="./laptop.html">DELL</a>
                        <a href="./laptop.html">HP</a>
                        <a href="./laptop.html">MSI</a>
                        <a href="./laptop.html">Gigabyte</a>
                        <a href="./laptop.html">Lenovo</a>
                        <a href="./laptop.html">LG</a>
                        <a href="./laptop.html">ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href="./laptop.html">Gaming</a>
                        <a href="./laptop.html">Đồ họa, kiến trúc</a>
                        <a href="./laptop.html">Mỏng nhẹ, thời trang</a>
                        <a href="./laptop.html">Sinh viên</a>
                        <a href="./laptop.html">Doanh nhân, văn phòng</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href="./laptop.html">Dưới 10 triệu</a>
                        <a href="./laptop.html">Từ 10 triệu - 15 triệu</a>
                        <a href="./laptop.html">Từ 15 triệu - 20 triệu</a>
                        <a href="./laptop.html">Từ 20 triệu - 25 triệu</a>
                        <a href="./laptop.html">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href="./laptop.html">Dưới 13 inch</a>
                        <a href="./laptop.html">Từ 13 - 15.6 inch</a>
                        <a href="./laptop.html">Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href="./laptop.html">Intel Core-i3</a>
                        <a href="./laptop.html">Intel Core-i5</a>
                        <a href="./laptop.html">Intel Core-i7</a>
                        <a href="./laptop.html">Intel Core-i9</a>
                        <a href="./laptop.html">AMD Ryzen 3</a>
                        <a href="./laptop.html">AMD Ryzen 5</a>
                        <a href="./laptop.html">AMD Ryzen 7</a>
                        <a href="./laptop.html">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cpu-icon.png" alt="cpu-icon" />
                      <span>CPU - Bộ vi xử lý</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href='true'>MSI</a>
                        <a href='true'>ASUS</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>HP</a>
                        <a href='true'>DELL</a>
                        <a href='true'>ACER</a>
                        <a href='true'>Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href='true'>Văn phòng</a>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa</a>
                        <a href='true'>PC All in one</a>
                        <a href='true'>PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href='true'>DELL Workstation</a>
                        <a href='true'>HP Workstation</a>
                        <a href='true'>Render, đồ họa Workstation</a>
                        <a href='true'>Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cpu-icon.png" alt="main-icon" />
                      <span>Main - Bo mạch chủ</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href='true'>ASUS</a>
                        <a href='true'>DELL</a>
                        <a href='true'>HP</a>
                        <a href='true'>MSI</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>Lenovo</a>
                        <a href='true'>LG</a>
                        <a href='true'>ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa, kiến trúc</a>
                        <a href='true'>Sinh viên</a>
                        <a href='true'>Doanh nhân, văn phòng</a>
                        <a href='true'>Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href='true'>Dưới 13 inch</a>
                        <a href='true'>Từ 13 - 15.6 inch</a>
                        <a href='true'>Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/Ram-icon.png" alt="ram-icon" />
                      <span>RAM</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href='true'>MSI</a>
                        <a href='true'>ASUS</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>HP</a>
                        <a href='true'>DELL</a>
                        <a href='true'>ACER</a>
                        <a href='true'>Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href='true'>Văn phòng</a>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa</a>
                        <a href='true'>PC All in one</a>
                        <a href='true'>PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href='true'>DELL Workstation</a>
                        <a href='true'>HP Workstation</a>
                        <a href='true'>Render, đồ họa Workstation</a>
                        <a href='true'>Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/vga-icon.png" alt="vga-icon" />
                      <span>VGA - Card màn hình</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href='true'>ASUS</a>
                        <a href='true'>DELL</a>
                        <a href='true'>HP</a>
                        <a href='true'>MSI</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>Lenovo</a>
                        <a href='true'>LG</a>
                        <a href='true'>ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa, kiến trúc</a>
                        <a href='true'>Sinh viên</a>
                        <a href='true'>Doanh nhân, văn phòng</a>
                        <a href='true'>Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href='true'>Dưới 13 inch</a>
                        <a href='true'>Từ 13 - 15.6 inch</a>
                        <a href='true'>Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/monitor-icon.png" alt="monitor-icon" />
                      <span>Monitor - Màn hình</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href='true'>MSI</a>
                        <a href='true'>ASUS</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>HP</a>
                        <a href='true'>DELL</a>
                        <a href='true'>ACER</a>
                        <a href='true'>Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href='true'>Văn phòng</a>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa</a>
                        <a href='true'>PC All in one</a>
                        <a href='true'>PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href='true'>DELL Workstation</a>
                        <a href='true'>HP Workstation</a>
                        <a href='true'>Render, đồ họa Workstation</a>
                        <a href='true'>Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/ssd-icon.png" alt="SSD-icon" />
                      <span>Thiết bị lưu trữ</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href='true'>ASUS</a>
                        <a href='true'>DELL</a>
                        <a href='true'>HP</a>
                        <a href='true'>MSI</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>Lenovo</a>
                        <a href='true'>LG</a>
                        <a href='true'>ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa, kiến trúc</a>
                        <a href='true'>Sinh viên</a>
                        <a href='true'>Doanh nhân, văn phòng</a>
                        <a href='true'>Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href='true'>Dưới 13 inch</a>
                        <a href='true'>Từ 13 - 15.6 inch</a>
                        <a href='true'>Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/mouse-icon.png" alt="mouse-icon" />
                      <span>Mouse - Chuột</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href='true'>MSI</a>
                        <a href='true'>ASUS</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>HP</a>
                        <a href='true'>DELL</a>
                        <a href='true'>ACER</a>
                        <a href='true'>Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href='true'>Văn phòng</a>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa</a>
                        <a href='true'>PC All in one</a>
                        <a href='true'>PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href='true'>DELL Workstation</a>
                        <a href='true'>HP Workstation</a>
                        <a href='true'>Render, đồ họa Workstation</a>
                        <a href='true'>Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/keyboard-icon.png" alt="keybroad-icon" />
                      <span>Keybroad - Bàn phím</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href='true'>ASUS</a>
                        <a href='true'>DELL</a>
                        <a href='true'>HP</a>
                        <a href='true'>MSI</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>Lenovo</a>
                        <a href='true'>LG</a>
                        <a href='true'>ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa, kiến trúc</a>
                        <a href='true'>Sinh viên</a>
                        <a href='true'>Doanh nhân, văn phòng</a>
                        <a href='true'>Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href='true'>Dưới 13 inch</a>
                        <a href='true'>Từ 13 - 15.6 inch</a>
                        <a href='true'>Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/audio-icon.png" alt="audio-icon" />
                      <span>Thiết bị âm thanh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href='true'>MSI</a>
                        <a href='true'>ASUS</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>HP</a>
                        <a href='true'>DELL</a>
                        <a href='true'>ACER</a>
                        <a href='true'>Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href='true'>Văn phòng</a>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa</a>
                        <a href='true'>PC All in one</a>
                        <a href='true'>PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href='true'>DELL Workstation</a>
                        <a href='true'>HP Workstation</a>
                        <a href='true'>Render, đồ họa Workstation</a>
                        <a href='true'>Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/power-icon.png" alt="power-icon" />
                      <span>Nguồn máy tính</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href='true'>ASUS</a>
                        <a href='true'>DELL</a>
                        <a href='true'>HP</a>
                        <a href='true'>MSI</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>Lenovo</a>
                        <a href='true'>LG</a>
                        <a href='true'>ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa, kiến trúc</a>
                        <a href='true'>Sinh viên</a>
                        <a href='true'>Doanh nhân, văn phòng</a>
                        <a href='true'>Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href='true'>Dưới 13 inch</a>
                        <a href='true'>Từ 13 - 15.6 inch</a>
                        <a href='true'>Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cooling-icon.png" alt="cooling-icon" />
                      <span>Cooling - Tản nhiệt</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href='true'>MSI</a>
                        <a href='true'>ASUS</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>HP</a>
                        <a href='true'>DELL</a>
                        <a href='true'>ACER</a>
                        <a href='true'>Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href='true'>Văn phòng</a>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa</a>
                        <a href='true'>PC All in one</a>
                        <a href='true'>PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href='true'>DELL Workstation</a>
                        <a href='true'>HP Workstation</a>
                        <a href='true'>Render, đồ họa Workstation</a>
                        <a href='true'>Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href='true'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/usb-icon.png" alt="usb-icon" />
                      <span>Phụ kiện máy tính</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href='true'>ASUS</a>
                        <a href='true'>DELL</a>
                        <a href='true'>HP</a>
                        <a href='true'>MSI</a>
                        <a href='true'>Gigabyte</a>
                        <a href='true'>Lenovo</a>
                        <a href='true'>LG</a>
                        <a href='true'>ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href='true'>Gaming</a>
                        <a href='true'>Đồ họa, kiến trúc</a>
                        <a href='true'>Sinh viên</a>
                        <a href='true'>Doanh nhân, văn phòng</a>
                        <a href='true'>Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href='true'>Dưới 10 triệu</a>
                        <a href='true'>Từ 10 triệu - 15 triệu</a>
                        <a href='true'>Từ 15 triệu - 20 triệu</a>
                        <a href='true'>Từ 20 triệu - 25 triệu</a>
                        <a href='true'>Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href='true'>Dưới 13 inch</a>
                        <a href='true'>Từ 13 - 15.6 inch</a>
                        <a href='true'>Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href='true'>Intel Core-i3</a>
                        <a href='true'>Intel Core-i5</a>
                        <a href='true'>Intel Core-i7</a>
                        <a href='true'>Intel Core-i9</a>
                        <a href='true'>AMD Ryzen 3</a>
                        <a href='true'>AMD Ryzen 5</a>
                        <a href='true'>AMD Ryzen 7</a>
                        <a href='true'>AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div id="ads">
            <div className="carousel">
              <Slider {...settingsCarousel}>
                <a href="./laptop.html">
                  <img
                    className="slick"
                    src="/img/ads-slick-1.webp"
                    alt="ads-slick-1"
                  />
                </a>
                <a href="./laptop.html">
                  <img
                    className="slick"
                    src="/img/ads-slick-2.webp"
                    alt="ads-slick-2"
                  />
                </a>
                <a href="./laptop.html">
                  <img
                    className="slick"
                    src="/img/ads-slick-3.webp"
                    alt="ads-slick-3"
                  />
                </a>
                <a href="./laptop.html">
                  <img
                    className="slick"
                    src="/img/ads-slick-4.webp"
                    alt="ads-slick-4"
                  />
                </a>
                <a href="./laptop.html">
                  <img
                    className="slick"
                    src="/img/ads-slick-5.webp"
                    alt="ads-slick-5"
                  />
                </a>
              </Slider>
            </div>

            <a href="./laptop.html" className="ads-sm ads-sm-1">
              <img src="/img/ads-sm-1.webp" alt="ads" />
            </a>
            <a href="./laptop.html" className="ads-sm ads-sm-2">
              <img src="/img/ads-sm-2.webp" alt="ads" />
            </a>
            <a href="./laptop.html" className="ads-sm ads-sm-3">
              <img src="/img/ads-sm-3.webp" alt="ads" />
            </a>
            <a href="./laptop.html" className="ads-sm ads-sm-4">
              <img src="/img/ads-sm-4.webp" alt="ads" />
            </a>
            <a href="./laptop.html" className="ads-sm ads-sm-5">
              <img src="/img/ads-sm-5.webp" alt="ads" />
            </a>
          </div>
        </div>

        {/* hot sell products */}
        <div id="products-special-box">
          <div className="products-special-box-header">
            <p>Bán chạy trong tháng</p>
            <Link to="products-list">Xem tất cả &gt;&gt;</Link>
          </div>
          <hr style={{ margin: 0, color: "white" }} />
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="card-girt-img" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="bag" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="last-product"
              href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html"
            >
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* sale products */}
        <div id="products-special-box">
          <div className="products-special-box-header">
            <p>Sản phẩm khuyến mãi</p>
            <a href="./laptop.html">Xem tất cả &gt;&gt;</a>
          </div>
          <hr style={{ margin: 0, color: "white" }} />
          <div className="products">
            <a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="last-product"
              href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html"
            >
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Phân cấp sản phẩm pc, ws*/}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
                <div className="product-classification-title">
                  <p>PC, WORKSTATION</p>
                </div>
              </a>
              <div className="classification">
                <a href="./laptop.html">MSI</a>|<a href="./laptop.html">ASUS</a>
                |<a href="./laptop.html">GIGABYTE</a>|
                <a href="./laptop.html">DELL</a>|<a href="./laptop.html">HP</a>|
                <a href="./laptop.html">ACER</a>|
                <a href="./laptop.html">LENOVO</a>|
                <a href="./laptop.html">APPLE</a>
              </div>
            </div>
            <a className="view-all" href="./laptop.html">
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/laptop-product-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="last-product"
              href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html"
            >
              <div className="product">
                <img src="/img/laptop-product-5.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/laptop-product-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15"</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="last-product"
              href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html"
            >
              <div className="product">
                <img src="/img/laptop-product-5.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* phân cấp sản phẩm laptop */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href="./laptop.html">
                <div className="product-classification-title">
                  <p>LAPTOP</p>
                </div>
              </a>
              <div className="classification">
                <a href="./laptop.html">MSI</a>|<a href="./laptop.html">ASUS</a>
                |<a href="./laptop.html">GIGABYTE</a>|
                <a href="./laptop.html">DELL</a>|<a href="./laptop.html">HP</a>|
                <a href="./laptop.html">ACER</a>|
                <a href="./laptop.html">LENOVO</a>|
                <a href="./laptop.html">APPLE</a>
              </div>
            </div>
            <a className="view-all" href="./laptop.html">
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/laptop-product-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="last-product"
              href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html"
            >
              <div className="product">
                <img src="/img/laptop-product-5.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/laptop-product-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              className="last-product"
              href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html"
            >
              <div className="product">
                <img src="/img/laptop-product-5.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* phân cấp sản phẩm cpu */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href='true'>
                <div className="product-classification-title">
                  <p>CPU - BỘ VI XỬ LÝ</p>
                </div>
              </a>
              <div className="classification">
                <a href='true'>MSI</a>|<a href='true'>ASUS</a>|
                <a href='true'>GIGABYTE</a>|<a href='true'>DELL</a>|<a href='true'>HP</a>
                |<a href='true'>ACER</a>|<a href='true'>LENOVO</a>|
                <a href='true'>APPLE</a>
              </div>
            </div>
            <a className="view-all" href='true'>
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* phân cấp sản phẩm main */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href='true'>
                <div className="product-classification-title">
                  <p>MAIN - BO MẠCH CHỦ</p>
                </div>
              </a>
              <div className="classification">
                <a href='true'>MSI</a>|<a href='true'>ASUS</a>|
                <a href='true'>GIGABYTE</a>|<a href='true'>DELL</a>|<a href='true'>HP</a>
                |<a href='true'>ACER</a>|<a href='true'>LENOVO</a>|
                <a href='true'>APPLE</a>
              </div>
            </div>
            <a className="view-all" href='true'>
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* phân cấp sản phẩm vga */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href='true'>
                <div className="product-classification-title">
                  <p>VGA - CARD MÀN HÌNH</p>
                </div>
              </a>
              <div className="classification">
                <a href='true'>MSI</a>|<a href='true'>ASUS</a>|
                <a href='true'>GIGABYTE</a>|<a href='true'>DELL</a>|<a href='true'>HP</a>
                |<a href='true'>ACER</a>|<a href='true'>LENOVO</a>|
                <a href='true'>APPLE</a>
              </div>
            </div>
            <a className="view-all" href='true'>
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* phân cấp sản phẩm monitor */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href='true'>
                <div className="product-classification-title">
                  <p>MONITOR - MÀN HÌNH</p>
                </div>
              </a>
              <div className="classification">
                <a href='true'>MSI</a>|<a href='true'>ASUS</a>|
                <a href='true'>GIGABYTE</a>|<a href='true'>DELL</a>|<a href='true'>HP</a>
                |<a href='true'>ACER</a>|<a href='true'>LENOVO</a>|
                <a href='true'>APPLE</a>
              </div>
            </div>
            <a className="view-all" href='true'>
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* phân cấp sản phẩm gaming gear */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <a href='true'>
                <div className="product-classification-title">
                  <p>GAMING GEAR</p>
                </div>
              </a>
              <div className="classification">
                <a href='true'>MSI</a>|<a href='true'>ASUS</a>|
                <a href='true'>GIGABYTE</a>|<a href='true'>DELL</a>|<a href='true'>HP</a>
                |<a href='true'>ACER</a>|<a href='true'>LENOVO</a>|
                <a href='true'>APPLE</a>
              </div>
            </div>
            <a className="view-all" href='true'>
              Xem tất cả &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    Màn hình LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 đ</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href='true'>
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Quà tặng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 túi đựng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="last-product" href='true'>
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 đ</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 đ</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const HomePageStyled = styled(HomePage)`
  /* Style cho menu list fixed */
  // #menu-fixed-container {
  //   width: 100vw;
  //   height: 100vh;
  //   position: fixed;
  //   top: 110px;
  //   left: 0px;
  //   z-index: 300;
  //   background-color: rgba(71, 71, 71, 0.5);
  //   margin: auto;
  //   display: none;
  // }
  // #menu-fixed-box {
  //   max-width: 1200px;
  //   margin: auto;
  //   position: relative;
  // }

  // #menu-fixed {
  //   width: 17%;
  //   background-color: white;
  //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  //   border-radius: 5px;
  //   overflow: hidden;
  //   margin-top: 10px;
  // }

  #submenu-fixed-container {
    width: 83%;
    height: 500px;
    position: absolute;
    right: 0px;
    top: 0px;
    display: none;
    animation: show-hide 0.2s ease-in;
    z-index: 310;
  }
  #list-item-fixed {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #list-item-fixed > li {
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding: 0px 8px;
  }
  #list-item-fixed img {
    margin-right: 4px;
  }

  #list-item-fixed a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222;
    font-weight: 500;
  }

  #list-item-fixed > li:hover {
    background-color: rgb(233, 236, 241);
  }

  #list-item-fixed > li:hover .fa-angle-right {
    visibility: visible;
  }

  #list-item-fixed li:hover #submenu-fixed-container {
    display: flex;
  }
  #menu-fixed-container.show {
    display: block;
  }
  #menu-fixed-container.hide {
    display: none;
  }

  /* Style cho menu list normal */

  #menu-and-ads {
    width: 100%;
    height: fit-content;
    margin-top: 2px;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  #menu {
    width: 17%;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
  }

  #menu-header {
    width: 100%;
    height: 34px;
    background-color: rgba(38, 121, 255, 0.9);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fa-bars {
    margin-right: 4px;
  }

  #list-item-box {
    width: 100%;
    height: 500px;
    padding: 0px 0px 4px 0px;
  }

  #list-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #list-item > li {
    width: 100%;
    height: 100%;
    font-size: 14px;
    padding: 0px 8px;
  }

  #list-item img {
    margin-right: 4px;
  }

  #list-item a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222;
    font-weight: 500;
  }

  .fa-angle-right {
    font-size: 18px;
    color: rgba(38, 121, 255, 0.9);
    visibility: hidden;
  }

  #list-item > li:hover {
    background-color: rgb(233, 236, 241);
  }

  #list-item > li:hover .fa-angle-right {
    visibility: visible;
  }

  #submenu-container {
    width: 83%;
    height: 500px;
    position: absolute;
    right: 0px;
    top: 35px;
    // display: flex;
    display: none;
    animation: show-hide 0.2s ease-in;
    z-index: 2;
  }

  #submenu {
    width: 99%;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  #submenu a:hover {
    color: rgba(38, 121, 255, 0.9);
  }

  @keyframes show-hide {
    from {
      right: 20px;
    }
    to {
      right: 0px;
    }
  }

  #list-item li:hover #submenu-container {
    display: flex;
  }

  #submenu-items {
    width: 24%;
    height: 50%;
    padding: 10px;
    margin: 0px 0px 10px 0px;
  }

  #submenu-items > p {
    font-size: 18px;
    font-weight: 600;
    color: rgba(38, 121, 255, 0.9);
  }

  #submenu-items > a {
    width: fit-content;
    height: fit-content;
    margin-bottom: 4px;
  }

  /* Kết thúc style menu list */

  /* Style cho banner-ads */
  #ads {
    width: 82%;
    height: 500px;
    margin-top: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 5px;
  }

  #ads a {
    overflow: hidden;
    border-radius: 10px;
  }

  .carousel {
    grid-row: 1/3;
    grid-column: 1/3;
    overflow: hidden;
    border-radius: 10px;
  }

  .carousel img {
    object-fit: cover;
  }

  .ads-sm img {
    object-fit: cover;
  }

  /* Kết thúc style banner-ads */

  /* style cho carousel-slick */
  .slick-next::before,
  .slick-prev::before {
    font-size: 30px;
    color: #ededed;
    opacity: 0.3;
  }

  .slick-prev:hover::before,
  .slick-prev:focus::before,
  .slick-next:hover::before,
  .slick-next:focus::before {
    opacity: 1;
  }

  .slick-slider {
    height: 100%;
  }

  .slick-dots {
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: center;
    margin: 0;
    list-style-type: none;
    position: absolute;
    bottom: 25px;
    left: auto;
  }

  .slick-dots li {
    height: fit-content;
    margin: 0 0.25rem;
  }

  .slick-dots button {
    width: 8px;
    height: 8px;
    padding: 0px;
    border: none;
    border-radius: 10px;
    background-color: rgb(190, 190, 190);
    text-indent: -9999px;
    transition: width 0.2s ease-in-out;
    margin: auto;
  }

  .slick-dots li.slick-active button {
    background-color: rgb(255, 255, 0);
    width: 30px;
  }

  /* Kết thúc style cho dots-slick */

  /* Style cho products special box */

  #products-special-box {
    width: 100%;
    margin-top: 20px;
  }

  .products-special-box-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #f95a0b;
  }

  .products-special-box-header > p {
    font-size: 18px;
    font-weight: 500;
    color: white;
  }

  .products-special-box-header > a {
    width: fit-content;
    height: fit-content;
    padding: 8px;
    border: solid white 1px;
    outline: none;
    border-radius: 5px;
    background-color: #f95a0b;
    color: white;
    font-size: 12px;
    font-weight: 500;
  }

  .products-special-box-header > a:hover {
    background-color: #d85413;
  }

  .products {
    margin-top: 1px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 12px;
    grid-column-gap: 12px;
    background-color: #f95a0b;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .products > a {
    padding: 4px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }

  .product {
    width: 100%;
    padding: 8px;
    background-color: white;
  }
  .product img {
    transition: transform 0.2s ease-in-out;
  }
  .product:hover > img {
    transform: scale(1.1, 1.1);
  }

  .product-card {
    width: 100%;
    height: 134px;
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-card-name {
    width: 100%;
    font-size: 13px;
    color: #222;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .product-card-price {
    width: 100%;
    color: #004de5;
    font-weight: 600;
    font-size: 15px;
  }

  .product-card-old-price {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .old-price {
    width: fit-content;
    font-size: 12px;
    text-decoration: line-through;
    color: #797979;
    font-weight: 500;
  }

  .discount-percent {
    color: #40bf55;
    font-size: 12px;
    margin-left: 8px !important;
    font-weight: 500;
  }

  .product-card-gift {
    width: 100%;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-card-gift span {
    color: #222;
    font-size: 12px;
  }

  .product-card-gift-img {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .product-card-gift-img img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }

  /* Kết thúc Style cho products special box */

  /* Style cho product-classification */

  .product-classification {
    width: 100%;
    margin-top: 20px;
  }

  .product-classification-title {
    height: 0;
    width: 270px;
    border-top: 48px solid rgba(38, 121, 255, 0.9);
    border-right: 60px solid transparent;
    position: relative;
  }

  .product-classification-title p {
    margin: 0px;
    position: absolute;
    top: -36px;
    left: 12px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: white;
  }

  .product-classification-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 12px;
    background-color: white;
    border: solid rgba(38, 121, 255, 0.9) 1px;
  }

  .tile-and-classification {
    display: flex;
    align-items: center;
  }

  .classification {
    display: flex;
    align-items: center;
    padding: 8px;
  }

  .classification a {
    margin: 0px 12px;
    color: #222;
    font-size: 16px;
  }

  .classification a:hover {
    color: rgba(38, 121, 255, 0.9);
  }

  .view-all {
    width: fit-content;
    height: fit-content;
    padding: 8px;
    border: none;
    outline: none;
    color: rgba(38, 121, 255, 0.9);
    font-size: 14px;
    font-weight: 500;
  }

  .view-all:hover {
    color: #004fbd;
  }

  .product-classification .products {
    background-color: white;
    margin: 0px;
    border-radius: 0px;
  }

  /* Kết thúc style cho product-classification */

  /* responsive container 1025 - 1200 */

  @media (min-width: 1025px) and (max-width: 1200px) {
    #ads {
      height: 415px;
    }
    #list-item-box {
      height: 415px;
    }
    #list-item > li {
      font-size: 12px;
    }
    #submenu-container {
      height: 415px;
    }
    #submenu-items {
      margin: 0px;
    }
    #submenu-items > p {
      font-size: 14px;
    }
    #submenu-items > a {
      margin-bottom: 2px;
    }
    .products-special-box-header > p {
      font-size: 16px;
    }
    .products-special-box-header > a {
      padding: 4px;
    }
    .product-card {
      height: 126px;
    }
    .product-card-gift-img img {
      width: 16px;
      height: 16px;
      margin-right: 2px;
    }
    .product-card-gift span {
      font-size: 10px;
    }
    .product-card-gift {
      height: 18px;
    }
  }

  /* responsive container 768 - 1024 */

  @media (min-width: 768px) and (max-width: 1024px) {
    #menu {
      display: none;
    }
    #ads {
      width: 100%;
      height: 500px;
      display: grid;
      margin-top: 20px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 5px;
    }
    .ads-sm-1,
    .ads-sm-2,
    .ads-sm-5 {
      display: none;
    }
    .slick {
      width: 964px !important;
      height: 332px !important;
    }
    .products {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .last-product {
      display: none;
    }
    .products-special-box-header > p {
      font-size: 16px;
    }
    .products-special-box-header > a {
      padding: 4px;
    }
    .product-card-gift {
      justify-content: flex-start;
    }
    .product-card-gift-img {
      margin-left: 8px;
    }
    .product-card-gift-img img {
      width: 20px;
      height: 20px;
    }
    .product-card-gift-img span {
      display: none;
    }
    .product-classification-title {
      width: 240px;
    }
    .product-classification-title p {
      font-size: 14px;
      line-height: 20px;
      top: -34px;
    }
    .classification {
      padding: 4px;
    }
    .classification a {
      margin: 0px 3px;
      font-size: 12px;
    }
  }

  /* responsive container 576 - 767 */

  @media (min-width: 576px) and (max-width: 767px) {
    #menu {
      display: none;
    }
    #ads {
      width: 100%;
      height: 451px;
      display: grid;
      margin-top: 20px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 5px;
    }
    .ads-sm-1,
    .ads-sm-2,
    .ads-sm-5 {
      display: none;
    }
    .slick {
      width: 735px !important;
      height: 332px !important;
    }
    .products {
      grid-template-columns: 1fr 1fr;
    }
    .products a {
      margin-bottom: 12px;
    }
    .last-product {
      display: none;
    }
    .products-special-box-header > p {
      font-size: 16px;
    }
    .products-special-box-header > a {
      padding: 4px;
    }
    .product-card-gift-img img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
    .product-card-gift span {
      font-size: 13px;
    }
    .classification {
      display: none;
    }
    .product-classification-title {
      width: 200px;
    }
    .product-classification-title p {
      font-size: 14px;
      line-height: 20px;
      top: -34px;
    }
    .classification {
      padding: 4px;
    }
    .classification a {
      margin: 0px 3px;
      font-size: 12px;
    }
  }

  /* responsive container 320 - 575 */

  @media (min-width: 320px) and (max-width: 575px) {
    #menu {
      display: none;
    }
    #ads {
      width: 100%;
      height: 280px;
      display: grid;
      margin-top: 20px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 5px;
    }
    .ads-sm-1,
    .ads-sm-2,
    .ads-sm-5 {
      display: none;
    }
    .slick {
      width: 559px !important;
      height: 185px !important;
    }
    .products {
      grid-template-columns: 1fr 1fr;
      padding: 8px;
      grid-column-gap: 8px;
    }
    .products a {
      margin-bottom: 8px;
    }
    .last-product {
      display: none;
    }
    .products-special-box-header {
      padding: 4px 8px;
    }
    .products-special-box-header > p {
      font-size: 13px;
    }
    .products-special-box-header > a {
      padding: 4px;
      font-size: 10px;
    }
    .product-card-gift {
      justify-content: flex-start;
    }
    .product-card-gift-img {
      margin-left: 8px;
    }
    .product-card-gift-img img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
    .product-card-gift-img span {
      display: none;
    }
    .classification {
      display: none;
    }
    .product-classification-header {
      padding: 4px 8px 4px 0px;
      height: 33px;
    }
    .product-classification-title {
      width: 159px;
      border-top: 33px solid rgba(38, 121, 255, 0.9);
      border-right: 25px solid transparent;
    }
    .product-classification-title p {
      font-size: 12px;
      line-height: 21px;
      top: -27px;
      left: 8px;
    }
    .view-all {
      padding: 4px;
      font-size: 10px;
    }
  }
`;
export default HomePageStyled;
