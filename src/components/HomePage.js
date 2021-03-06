import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
              <span>Danh m???c s???n ph???m</span>
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
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">Apple</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
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
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">M???ng nh???, th???i trang</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cpu-icon.png" alt="cpu-icon" />
                      <span>CPU - B??? vi x??? l??</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cpu-icon.png" alt="main-icon" />
                      <span>Main - Bo m???ch ch???</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                        <Link to="/products-list">M???ng nh???</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/Ram-icon.png" alt="ram-icon" />
                      <span>RAM</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/vga-icon.png" alt="vga-icon" />
                      <span>VGA - Card m??n h??nh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                        <Link to="/products-list">M???ng nh???</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/monitor-icon.png" alt="monitor-icon" />
                      <span>Monitor - M??n h??nh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/ssd-icon.png" alt="SSD-icon" />
                      <span>Thi???t b??? l??u tr???</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                        <Link to="/products-list">M???ng nh???</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/mouse-icon.png" alt="mouse-icon" />
                      <span>Mouse - Chu???t</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/keyboard-icon.png" alt="keybroad-icon" />
                      <span>Keybroad - B??n ph??m</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                        <Link to="/products-list">M???ng nh???</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/audio-icon.png" alt="audio-icon" />
                      <span>Thi???t b??? ??m thanh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/power-icon.png" alt="power-icon" />
                      <span>Ngu???n m??y t??nh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                        <Link to="/products-list">M???ng nh???</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cooling-icon.png" alt="cooling-icon" />
                      <span>Cooling - T???n nhi???t</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo th????ng hi???u</p>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">ACER</Link>
                        <Link to="/products-list">Lenovo</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu c???u</p>
                        <Link to="/products-list">V??n ph??ng</Link>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a</Link>
                        <Link to="/products-list">PC All in one</Link>
                        <Link to="/products-list">PC Mini</Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>M??y tr???m Workstation</p>
                        <Link to="/products-list">DELL Workstation</Link>
                        <Link to="/products-list">HP Workstation</Link>
                        <Link to="/products-list">
                          Render, ????? h???a Workstation
                        </Link>
                        <Link to="/products-list">
                          Deep learning Workstation
                        </Link>
                      </li>
                      <li id="submenu-items">
                        <p>PC c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/usb-icon.png" alt="usb-icon" />
                      <span>Ph??? ki???n m??y t??nh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo th????ng hi???u</p>
                        <Link to="/products-list">ASUS</Link>
                        <Link to="/products-list">DELL</Link>
                        <Link to="/products-list">HP</Link>
                        <Link to="/products-list">MSI</Link>
                        <Link to="/products-list">Gigabyte</Link>
                        <Link to="/products-list">Lenovo</Link>
                        <Link to="/products-list">LG</Link>
                        <Link to="/products-list">ACER</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu c???u</p>
                        <Link to="/products-list">Gaming</Link>
                        <Link to="/products-list">????? h???a, ki???n tr??c</Link>
                        <Link to="/products-list">Sinh vi??n</Link>
                        <Link to="/products-list">Doanh nh??n, v??n ph??ng</Link>
                        <Link to="/products-list">M???ng nh???</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo t???m gi??</p>
                        <Link to="/products-list">D?????i 10 tri???u</Link>
                        <Link to="/products-list">T??? 10 tri???u - 15 tri???u</Link>
                        <Link to="/products-list">T??? 15 tri???u - 20 tri???u</Link>
                        <Link to="/products-list">T??? 20 tri???u - 25 tri???u</Link>
                        <Link to="/products-list">Tr??n 25 tri???u</Link>
                      </li>
                      <li id="submenu-items">
                        <p>K??ch th?????c m??n h??nh</p>
                        <Link to="/products-list">D?????i 13 inch</Link>
                        <Link to="/products-list">T??? 13 - 15.6 inch</Link>
                        <Link to="/products-list">Tr??n 15.6 inch</Link>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop c???u h??nh theo chip</p>
                        <Link to="/products-list">Intel Core-i3</Link>
                        <Link to="/products-list">Intel Core-i5</Link>
                        <Link to="/products-list">Intel Core-i7</Link>
                        <Link to="/products-list">Intel Core-i9</Link>
                        <Link to="/products-list">AMD Ryzen 3</Link>
                        <Link to="/products-list">AMD Ryzen 5</Link>
                        <Link to="/products-list">AMD Ryzen 7</Link>
                        <Link to="/products-list">AMD Ryzen 9</Link>
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
                <Link to="/products-list">
                  <img
                    className="slick"
                    src="/img/ads-slick-1.webp"
                    alt="ads-slick-1"
                  />
                </Link>
                <Link to="/products-list">
                  <img
                    className="slick"
                    src="/img/ads-slick-2.webp"
                    alt="ads-slick-2"
                  />
                </Link>
                <Link to="/products-list">
                  <img
                    className="slick"
                    src="/img/ads-slick-3.webp"
                    alt="ads-slick-3"
                  />
                </Link>
                <Link to="/products-list">
                  <img
                    className="slick"
                    src="/img/ads-slick-4.webp"
                    alt="ads-slick-4"
                  />
                </Link>
                <Link to="/products-list">
                  <img
                    className="slick"
                    src="/img/ads-slick-5.webp"
                    alt="ads-slick-5"
                  />
                </Link>
              </Slider>
            </div>

            <Link to="/products-list" className="ads-sm ads-sm-1">
              <img src="/img/ads-sm-1.webp" alt="ads" />
            </Link>
            <Link to="/products-list" className="ads-sm ads-sm-2">
              <img src="/img/ads-sm-2.webp" alt="ads" />
            </Link>
            <Link to="/products-list" className="ads-sm ads-sm-3">
              <img src="/img/ads-sm-3.webp" alt="ads" />
            </Link>
            <Link to="/products-list" className="ads-sm ads-sm-4">
              <img src="/img/ads-sm-4.webp" alt="ads" />
            </Link>
            <Link to="/products-list" className="ads-sm ads-sm-5">
              <img src="/img/ads-sm-5.webp" alt="ads" />
            </Link>
          </div>
        </div>

        {/* hot sell products */}
        <div id="products-special-box">
          <div className="products-special-box-header">
            <p>B??n ch???y trong th??ng</p>
            <Link to="products-list">Xem t???t c??? &gt;&gt;</Link>
          </div>
          <hr style={{ margin: 0, color: "white" }} />
          <div className="products">
            <Link to="/products-list/laptop/1">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list/laptop/1">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="card-girt-img" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list/laptop/1">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="bag" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list/laptop/1">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list/laptop/1" className="last-product">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* sale products */}
        <div id="products-special-box">
          <div className="products-special-box-header">
            <p>S???n ph???m khuy???n m??i</p>
            <Link to="/products-list">Xem t???t c??? &gt;&gt;</Link>
          </div>
          <hr style={{ margin: 0, color: "white" }} />
          <div className="products">
            <Link to="/products-list/laptop/1">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list/laptop/1">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Ph??n c???p s???n ph???m pc, ws*/}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list/laptop/1">
                <div className="product-classification-title">
                  <p>PC, WORKSTATION</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="./laptop.html">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/laptop-product-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15"</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ph??n c???p s???n ph???m laptop */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list">
                <div className="product-classification-title">
                  <p>LAPTOP</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="./laptop.html">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <a href="Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
              <div className="product">
                <img src="/img/laptop-product-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
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
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ph??n c???p s???n ph???m cpu */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list">
                <div className="product-classification-title">
                  <p>CPU - B??? VI X??? L??</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="true">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ph??n c???p s???n ph???m main */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list">
                <div className="product-classification-title">
                  <p>MAIN - BO M???CH CH???</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="true">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ph??n c???p s???n ph???m vga */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list">
                <div className="product-classification-title">
                  <p>VGA - CARD M??N H??NH</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="true">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ph??n c???p s???n ph???m monitor */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list">
                <div className="product-classification-title">
                  <p>MONITOR - M??N H??NH</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="true">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* ph??n c???p s???n ph???m gaming gear */}
        <div className="product-classification">
          <div className="product-classification-header">
            <div className="tile-and-classification">
              <Link to="/products-list">
                <div className="product-classification-title">
                  <p>GAMING GEAR</p>
                </div>
              </Link>
              <div className="classification">
                <Link to="/products-list">MSI</Link>|
                <Link to="/products-list">ASUS</Link>|
                <Link to="/products-list">GIGABYTE</Link>|
                <Link to="/products-list">DELL</Link>|
                <Link to="/products-list">HP</Link>|
                <Link to="/products-list">ACER</Link>|
                <Link to="/products-list">LENOVO</Link>|
                <Link to="/products-list">APPLE</Link>
              </div>
            </div>
            <a className="view-all" href="true">
              Xem t???t c??? &gt;&gt;
            </a>
          </div>
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </a>
          </div>
          <hr style={{ border: "#ebebeb 1px solid", margin: 0 }} />
          <div className="products">
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-1.webp" alt="hot-sell-1" />
                <div className="product-card">
                  <div className="product-card-name">
                    M??n h??nh LCD SAMSUNG LF24T370 (1920 x 1080/ IPS/ 75Hz/ 5ms/
                    FreeSync)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift"></div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-2.webp" alt="hot-sell-2" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">21.490.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">21.790.000 ??</p>
                    <p className="discount-percent">-1.3%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-3.webp" alt="hot-sell-3" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/products-list">
              <div className="product">
                <img src="/img/hot-sell-4.webp" alt="hot-sell-4" />
                <div className="product-card">
                  <div className="product-card-name">
                    Laptop ASUS Vivobook S533EQ- BQ011T ( 15.6" Full HD/ Intel
                    Core i5-1135G7/ 8GB/ 512GB SSD/ NVIDIA GeForce MX350/
                    Windows 10 Home SL 64-bit/1.7kg)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
                    <p className="discount-percent">-5.2%</p>
                  </div>
                  <div className="product-card-gift">
                    <span>Qu?? t???ng</span>
                    <div className="product-card-gift-img">
                      <img src="/img/bag-laptop-1.jpg" alt="" />
                      <span>x1 t??i ?????ng laptop 15.6'</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a className="last-product" href="true">
              <div className="product">
                <img src="/img/core-i9.webp" alt="hot-sell-5" />
                <div className="product-card">
                  <div className="product-card-name">
                    CPU Intel Comet Lake Core i9-10850KA Avengers Edition (10
                    Cores 20 Threads up to 5.20 GHz 10th Gen LGA 1200)
                  </div>
                  <p className="product-card-price">3.990.000 ??</p>
                  <div className="product-card-old-price">
                    <p className="old-price">4.209.000 ??</p>
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

  /* K???t th??c style menu list */

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

  /* K???t th??c style banner-ads */

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

  /* K???t th??c style cho dots-slick */

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

  /* K???t th??c Style cho products special box */

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

  /* K???t th??c style cho product-classification */

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
