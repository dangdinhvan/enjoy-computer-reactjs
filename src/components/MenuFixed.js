import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef } from "react";

function MenuFixed({ className, menuFixedStatus }) {
  return (
    <div className={className}>
      <div
        id="menu-fixed-container"
        className={menuFixedStatus ? "show" : "hide"}
      >
        <div id="menu-fixed-box">
          <div id="menu-fixed">
            <div id="list-item-box-fixed">
              <ul id="list-item-fixed">
                <li>
                  <Link to="/products-list">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/pc-icon.png" alt="pc-icon" />
                      <span>PC, Workstation</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </Link>
                  <div id="submenu-fixed-container">
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
                  <div id="submenu-fixed-container">
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
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cpu-icon.png" alt="main-icon" />
                      <span>Main - Bo mạch chủ</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href="#">ASUS</a>
                        <a href="#">DELL</a>
                        <a href="#">HP</a>
                        <a href="#">MSI</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">Lenovo</a>
                        <a href="#">LG</a>
                        <a href="#">ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa, kiến trúc</a>
                        <a href="#">Sinh viên</a>
                        <a href="#">Doanh nhân, văn phòng</a>
                        <a href="#">Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href="#">Dưới 13 inch</a>
                        <a href="#">Từ 13 - 15.6 inch</a>
                        <a href="#">Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/Ram-icon.png" alt="ram-icon" />
                      <span>RAM</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/vga-icon.png" alt="vga-icon" />
                      <span>VGA - Card màn hình</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href="#">ASUS</a>
                        <a href="#">DELL</a>
                        <a href="#">HP</a>
                        <a href="#">MSI</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">Lenovo</a>
                        <a href="#">LG</a>
                        <a href="#">ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa, kiến trúc</a>
                        <a href="#">Sinh viên</a>
                        <a href="#">Doanh nhân, văn phòng</a>
                        <a href="#">Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href="#">Dưới 13 inch</a>
                        <a href="#">Từ 13 - 15.6 inch</a>
                        <a href="#">Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/monitor-icon.png" alt="monitor-icon" />
                      <span>Monitor - Màn hình</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/ssd-icon.png" alt="SSD-icon" />
                      <span>Thiết bị lưu trữ</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/mouse-icon.png" alt="mouse-icon" />
                      <span>Mouse - Chuột</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/keyboard-icon.png" alt="keybroad-icon" />
                      <span>Keybroad - Bàn phím</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href="#">ASUS</a>
                        <a href="#">DELL</a>
                        <a href="#">HP</a>
                        <a href="#">MSI</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">Lenovo</a>
                        <a href="#">LG</a>
                        <a href="#">ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa, kiến trúc</a>
                        <a href="#">Sinh viên</a>
                        <a href="#">Doanh nhân, văn phòng</a>
                        <a href="#">Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href="#">Dưới 13 inch</a>
                        <a href="#">Từ 13 - 15.6 inch</a>
                        <a href="#">Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/audio-icon.png" alt="audio-icon" />
                      <span>Thiết bị âm thanh</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/power-icon.png" alt="power-icon" />
                      <span>Nguồn máy tính</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href="#">ASUS</a>
                        <a href="#">DELL</a>
                        <a href="#">HP</a>
                        <a href="#">MSI</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">Lenovo</a>
                        <a href="#">LG</a>
                        <a href="#">ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa, kiến trúc</a>
                        <a href="#">Sinh viên</a>
                        <a href="#">Doanh nhân, văn phòng</a>
                        <a href="#">Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href="#">Dưới 13 inch</a>
                        <a href="#">Từ 13 - 15.6 inch</a>
                        <a href="#">Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/cooling-icon.png" alt="cooling-icon" />
                      <span>Cooling - Tản nhiệt</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>PC theo thương hiệu</p>
                        <a href="#">MSI</a>
                        <a href="#">ASUS</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">HP</a>
                        <a href="#">DELL</a>
                        <a href="#">ACER</a>
                        <a href="#">Lenovo</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo nhu cầu</p>
                        <a href="#">Văn phòng</a>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa</a>
                        <a href="#">PC All in one</a>
                        <a href="#">PC Mini</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Máy trạm Workstation</p>
                        <a href="#">DELL Workstation</a>
                        <a href="#">HP Workstation</a>
                        <a href="#">Render, đồ họa Workstation</a>
                        <a href="#">Deep learning Workstation</a>
                      </li>
                      <li id="submenu-items">
                        <p>PC cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <a href="#">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src="/img/usb-icon.png" alt="usb-icon" />
                      <span>Phụ kiện máy tính</span>
                    </div>
                    <div>
                      <i className="fas fa-angle-right" />
                    </div>
                  </a>
                  <div id="submenu-fixed-container">
                    <div style={{ width: "1%" }} />
                    <ul id="submenu">
                      <li id="submenu-items">
                        <p>Laptop theo thương hiệu</p>
                        <a href="#">ASUS</a>
                        <a href="#">DELL</a>
                        <a href="#">HP</a>
                        <a href="#">MSI</a>
                        <a href="#">Gigabyte</a>
                        <a href="#">Lenovo</a>
                        <a href="#">LG</a>
                        <a href="#">ACER</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo nhu cầu</p>
                        <a href="#">Gaming</a>
                        <a href="#">Đồ họa, kiến trúc</a>
                        <a href="#">Sinh viên</a>
                        <a href="#">Doanh nhân, văn phòng</a>
                        <a href="#">Mỏng nhẹ</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop theo tầm giá</p>
                        <a href="#">Dưới 10 triệu</a>
                        <a href="#">Từ 10 triệu - 15 triệu</a>
                        <a href="#">Từ 15 triệu - 20 triệu</a>
                        <a href="#">Từ 20 triệu - 25 triệu</a>
                        <a href="#">Trên 25 triệu</a>
                      </li>
                      <li id="submenu-items">
                        <p>Kích thước màn hình</p>
                        <a href="#">Dưới 13 inch</a>
                        <a href="#">Từ 13 - 15.6 inch</a>
                        <a href="#">Trên 15.6 inch</a>
                      </li>
                      <li id="submenu-items">
                        <p>Laptop cấu hình theo chip</p>
                        <a href="#">Intel Core-i3</a>
                        <a href="#">Intel Core-i5</a>
                        <a href="#">Intel Core-i7</a>
                        <a href="#">Intel Core-i9</a>
                        <a href="#">AMD Ryzen 3</a>
                        <a href="#">AMD Ryzen 5</a>
                        <a href="#">AMD Ryzen 7</a>
                        <a href="#">AMD Ryzen 9</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MenuFixedStyled = styled(MenuFixed)`
  /* Style cho menu list fixed */
  #menu-fixed-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 110px;
    left: 0px;
    z-index: 300;
    background-color: rgba(71, 71, 71, 0.5);
    margin: auto;
    display: none;
  }
  #menu-fixed-box {
    max-width: 1200px;
    margin: auto;
    position: relative;
  }

  #menu-fixed {
    width: 17%;
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
  }

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
  #list-item-box-fixed {
    width: 100%;
    height: 500px;
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

  .fa-angle-right {
    font-size: 18px;
    color: rgba(38, 121, 255, 0.9);
    visibility: hidden;
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

  #list-item-fixed li:hover #submenu-container {
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
`;

export default MenuFixedStyled;
