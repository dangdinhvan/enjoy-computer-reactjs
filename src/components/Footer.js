export default function Footer() {
    return (
        <footer>
            <div id="footer-title">
                <div id="footer-items-name">
                    <div className="footer-item-name">Thông tin chung</div>
                    <div className="footer-item-name">Chính sách chung</div>
                    <div className="footer-item-name">Hỗ trợ khách hàng</div>
                    <div className="footer-item-name">Các phương thức liên lạc</div>
                </div>
            </div>
            <div id="footer-content">
                <div id="footer-items-content">
                    <div className="footer-item-content">
                        <p className="footer-item-name-mobile">Thông tin chung</p>
                        <a href="#">Giới thiệu</a>
                        <a href="#">Thông tin liên hệ</a>
                        <a href="#">Hệ thống cửa hàng</a>
                        <a href="#">Hỏi đáp</a>
                        <a href="#">Tin tức</a>
                    </div>
                    <div className="footer-item-content">
                        <p className="footer-item-name-mobile">Chính sách chung</p>
                        <a href="#">Chính sách vận chuyển</a>
                        <a href="#">Chính sách bảo hành</a>
                        <a href="#">Chính sấch đổi trả - hoàn tiền</a>
                        <a href="#">Chính sách hàng chính hãng</a>
                        <a href="#">Chính sách mua trả góp </a>
                    </div>
                    <div className="footer-item-content">
                        <p className="footer-item-name-mobile">Hỗ trợ khách hàng</p>
                        <a href="#">Trung tâm bảo hành</a>
                        <a href="#">Hướng dẫn mua hàng online</a>
                        <a href="#">Hướng dẫn mua trả góp</a>
                        <a href="#">Thẻ ưu đãi</a>
                        <a href="#">Dịch vụ sửa chữa, bảo trì</a>
                    </div>
                    <div className="footer-item-content">
                        <p className="footer-item-name-mobile">Các phương thức liên lạc</p>
                        <a href="#">
                            <img src="/img/facebook-icon.png" alt="facebook-icon" />
                            <span>Enjoy Computer</span>
                        </a>
                        <a href="#">
                            <img src="/img/headphone-icon.png" alt="headphone-icon" />
                            <span>Gọi mua hàng:</span>
                            <span style={{ fontWeight: 600, color: "rgb(255, 20, 20)" }}>
                                1900 7777
                            </span>
                            <span>(miễn phí)</span>
                        </a>
                        <a href="#">
                            <img src="/img/headphone-icon.png" alt="headphone-icon" />
                            <span>Chăm sóc KH:</span>
                            <span style={{ fontWeight: 600, color: "rgb(255, 20, 20)" }}>
                                1900 6868
                            </span>
                            <span>(miễn phí)</span>
                        </a>
                        <a href="#">
                            <img src="/img/headphone-icon.png" alt="headphone-icon" />
                            <span>Khách hàng doanh nghiệp:</span>
                            <span style={{ fontWeight: 600, color: "rgb(255, 20, 20)" }}>
                                0961 121 637
                            </span>
                        </a>
                        <a href="#">
                            <img src="/img/mail-icon.png" alt="mail-icon" />
                            <span>Email:</span>
                            <span>enjoycomputer@gmail.com</span>
                        </a>
                    </div>
                </div>
                <div id="address-box">
                    <div id="address">
                        <div id="footer-company-name">
                            Công ty cổ phần thương mại - dịch vụ Enjoy Computer
                        </div>
                        <div id="add">
                            Địa chỉ: Số 1/92 Phan Chu Trinh, Nhị Châu, TP. Hải Dương, tỉnh Hải
                            Dương
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
