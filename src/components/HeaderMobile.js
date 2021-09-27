export default function HeaderMobile({ showMenuMobile }) {
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
                <a href="./cart.html" className="upline-item">
                    <img id="cart" src="/img/cart.png" alt="cart" />
                    <div id="cart-count">2</div>
                </a>
            </div>
            {/* menu tablet mobile */}
            <div id="mobile-menu-container">
                <div id="mobile-menu">
                    <div id="signin-signup">
                        <div>
                            <i className="fas fa-user-circle" />
                        </div>
                        <a href="./login.html">Đăng nhập / Đăng ký</a>
                    </div>
                    <p
                        style={{
                            fontSize: 14,
                            color: "rgba(38, 121, 255, 0.9)",
                            fontWeight: 500
                        }}
                    >
                        Danh mục sản phẩm
                    </p>
                    <div className="mobile-menu-item-lv-1">
                        <a href='true'>PC, Workstation</a>
                        <input type="checkbox" id="A" />
                        <label htmlFor="A">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="A-1" />
                                    <label htmlFor="A-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="A-2" />
                                    <label htmlFor="A-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="A-3" />
                                    <label htmlFor="A-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="A-4" />
                                    <label htmlFor="A-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href="./laptop.html">PC theo cấu hình chip</a>
                                    <input type="checkbox" id="A-5" />
                                    <label htmlFor="A-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href="./laptop.html">Laptop</a>
                        <input type="checkbox" id="B" />
                        <label htmlFor="B">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href="./laptop.html">Laptop theo thương hiệu</a>
                                    <input type="checkbox" id="B-1" />
                                    <label htmlFor="B-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href="./laptop.html">MSI</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">ASUS</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">HP</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">DELL</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">ACER</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Lenovo</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href="./laptop.html">Laptop theo nhu cầu</a>
                                    <input type="checkbox" id="B-2" />
                                    <label htmlFor="B-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href="./laptop.html">Gaming</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Đồ họa, kiến trúc</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Mỏng nhẹ, thời trang</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Sinh viên</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Doanh nhân, văn phòng</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href="./laptop.html">Laptop theo tầm giá</a>
                                    <input type="checkbox" id="B-3" />
                                    <label htmlFor="B-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href="./laptop.html">Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href="./laptop.html">Kích thước màn hình</a>
                                    <input type="checkbox" id="B-4" />
                                    <label htmlFor="B-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <a href="./laptop.html">Dưới 13 inch</a>
                                        <a href="./laptop.html">Từ 13 - 15.6 inch</a>
                                        <a href="./laptop.html">Trên 15.6 inch</a>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href="./laptop.html">Laptop theo cấu hình chip</a>
                                    <input type="checkbox" id="B-5" />
                                    <label htmlFor="B-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href="./laptop.html">AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>CPU - Bộ vi xử lý</a>
                        <input type="checkbox" id="C" />
                        <label htmlFor="C">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="C-1" />
                                    <label htmlFor="C-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="C-2" />
                                    <label htmlFor="C-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="C-3" />
                                    <label htmlFor="C-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="C-4" />
                                    <label htmlFor="C-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="C-5" />
                                    <label htmlFor="C-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Main - Bo mạch chủ</a>
                        <input type="checkbox" id="D" />
                        <label htmlFor="D">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="D-1" />
                                    <label htmlFor="D-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="D-2" />
                                    <label htmlFor="D-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="D-3" />
                                    <label htmlFor="D-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="D-4" />
                                    <label htmlFor="D-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="D-5" />
                                    <label htmlFor="D-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='true'>RAM</a>
                        <input type="checkbox" id="E" />
                        <label htmlFor="E">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="E-1" />
                                    <label htmlFor="E-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="E-2" />
                                    <label htmlFor="E-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="E-3" />
                                    <label htmlFor="E-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="E-4" />
                                    <label htmlFor="E-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="E-5" />
                                    <label htmlFor="E-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='true'>VGA - Card màn hình</a>
                        <input type="checkbox" id="F" />
                        <label htmlFor="F">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="F-1" />
                                    <label htmlFor="F-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="F-2" />
                                    <label htmlFor="F-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="F-3" />
                                    <label htmlFor="F-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="F-4" />
                                    <label htmlFor="F-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="F-5" />
                                    <label htmlFor="F-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='true'>Monitor - Mành hình</a>
                        <input type="checkbox" id="G" />
                        <label htmlFor="G">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="G-1" />
                                    <label htmlFor="G-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="G-2" />
                                    <label htmlFor="G-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="G-3" />
                                    <label htmlFor="G-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="G-4" />
                                    <label htmlFor="G-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="G-5" />
                                    <label htmlFor="G-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='true'>Thiết bị lưu trữ</a>
                        <input type="checkbox" id="H" />
                        <label htmlFor="H">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="H-1" />
                                    <label htmlFor="H-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="H-2" />
                                    <label htmlFor="H-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="H-3" />
                                    <label htmlFor="H-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="H-4" />
                                    <label htmlFor="H-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="H-5" />
                                    <label htmlFor="H-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Mouse - Chuột</a>
                        <input type="checkbox" id="I" />
                        <label htmlFor="I">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="I-1" />
                                    <label htmlFor="I-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="I-2" />
                                    <label htmlFor="I-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="I-3" />
                                    <label htmlFor="I-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="I-4" />
                                    <label htmlFor="I-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="I-5" />
                                    <label htmlFor="I-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Keybroad - Bàn phím</a>
                        <input type="checkbox" id="K" />
                        <label htmlFor="K">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="K-1" />
                                    <label htmlFor="K-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="K-2" />
                                    <label htmlFor="K-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="K-3" />
                                    <label htmlFor="K-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="K-4" />
                                    <label htmlFor="K-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="K-5" />
                                    <label htmlFor="K-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Thiết bị âm thanh</a>
                        <input type="checkbox" id="L" />
                        <label htmlFor="L">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="L-1" />
                                    <label htmlFor="L-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="L-2" />
                                    <label htmlFor="L-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="L-3" />
                                    <label htmlFor="L-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="L-4" />
                                    <label htmlFor="L-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="L-5" />
                                    <label htmlFor="L-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Nguồn máy tính</a>
                        <input type="checkbox" id="M" />
                        <label htmlFor="M">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="M-1" />
                                    <label htmlFor="M-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="M-2" />
                                    <label htmlFor="M-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="M-3" />
                                    <label htmlFor="M-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="M-4" />
                                    <label htmlFor="M-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="M-5" />
                                    <label htmlFor="M-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Cooling - Tản nhiệt</a>
                        <input type="checkbox" id="N" />
                        <label htmlFor="N">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="N-1" />
                                    <label htmlFor="N-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="N-2" />
                                    <label htmlFor="N-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="N-3" />
                                    <label htmlFor="N-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="N-4" />
                                    <label htmlFor="N-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="N-5" />
                                    <label htmlFor="N-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mobile-menu-item-lv-1">
                        <a href='#'>Phụ kiện máy tính</a>
                        <input type="checkbox" id="O" />
                        <label htmlFor="O">
                            <i className="fa fa-caret-right submenu-caret" />
                        </label>
                        <ul>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo thương hiệu</a>
                                    <input type="checkbox" id="O-1" />
                                    <label htmlFor="O-1">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>MSI</a>
                                        </li>
                                        <li>
                                            <a href='true'>ASUS</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gigabyte</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP</a>
                                        </li>
                                        <li>
                                            <a href='true'>DELL</a>
                                        </li>
                                        <li>
                                            <a href='true'>ACER</a>
                                        </li>
                                        <li>
                                            <a href='true'>Lenovo</a>
                                        </li>
                                        <li>
                                            <a href='true'>Apple</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo nhu cầu</a>
                                    <input type="checkbox" id="O-2" />
                                    <label htmlFor="O-2">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Văn phòng</a>
                                        </li>
                                        <li>
                                            <a href='true'>Gaming</a>
                                        </li>
                                        <li>
                                            <a href='true'>Đồ họa</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC All in one</a>
                                        </li>
                                        <li>
                                            <a href='true'>PC Mini</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo tầm giá</a>
                                    <input type="checkbox" id="O-3" />
                                    <label htmlFor="O-3">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Dưới 10 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 10 triệu - 15 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 15 triệu - 20 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Từ 20 triệu - 25 triệu</a>
                                        </li>
                                        <li>
                                            <a href='true'>Trên 25 triệu</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>Máy trạm Workstation</a>
                                    <input type="checkbox" id="O-4" />
                                    <label htmlFor="O-4">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>DELL Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>HP Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Render, đồ họa Workstation</a>
                                        </li>
                                        <li>
                                            <a href='true'>Deep learning Workstation</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="mobile-menu-item-lv-2">
                                    <a href='true'>PC theo cấu hình chip</a>
                                    <input type="checkbox" id="O-5" />
                                    <label htmlFor="O-5">
                                        <i className="fa fa-caret-right submenu-caret" />
                                    </label>
                                    <ul>
                                        <li>
                                            <a href='true'>Intel Core-i3</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i5</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i7</a>
                                        </li>
                                        <li>
                                            <a href='true'>Intel Core-i9</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 3</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 5</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 7</a>
                                        </li>
                                        <li>
                                            <a href='true'>AMD Ryzen 9</a>
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
