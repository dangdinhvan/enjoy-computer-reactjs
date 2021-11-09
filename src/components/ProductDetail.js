import { useParams, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import MetaTags from 'react-meta-tags';
import _ from 'lodash';

import { addProduct, backOutOfStockDefault } from '../store/cartSlice';
import MenuFixedStyled from './MenuFixed';

function NextArrowCarousel({ className, style, onClick }) {
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '40px',
				height: '40px',
				position: 'absolute',
				top: '50%',
				right: '0px'
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
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '40px',
				height: '40px',
				position: 'absolute',
				top: '50%',
				left: '0px',
				zIndex: '1'
			}}
			onClick={onClick}
		/>
	);
}

function ProductDetail({
	className,
	menuFixedStatus,
	sendRequestHideMenufixed,
	menuScrollBtn
}) {
	const { id } = useParams();
	const [onLoading, setOnLoading] = useState(true);
	const [productDetail, setProductDetail] = useState({});
	const [more1Promotion, setMore1Promotion] = useState(true);
	const [viewMoreBtn, setViewMoreBtn] = useState(false);
	const [imgActived, setImgActived] = useState('');
	const [alertAddToCart, setAlertAddToCart] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();
	const outOfStock = useSelector(state => state.cart.outOfStock);

	// ẩn menu fixed
	const eventMouseUp = e => {
		if (
			e.target !== menuScrollBtn &&
			e.target !== menuScrollBtn.children[0] &&
			e.target !== menuScrollBtn.children[1]
		) {
			sendRequestHideMenufixed('true');
		}
	};

	useEffect(() => {
		if (menuFixedStatus === true) {
			window.addEventListener('mouseup', eventMouseUp);
		}
		return () => {
			window.removeEventListener('mouseup', eventMouseUp);
		};
	}, [menuFixedStatus]);

	// render lan dau
	useEffect(() => {
		window.scroll(0, 0);
		setOnLoading(true);
		fetch(`https://enjoycomputer.herokuapp.com/products/${id}`)
			.then(respone => {
				return respone.json();
			})
			.then(product => {
				setOnLoading(false);
				setProductDetail(product);
				setImgActived(product.thumbnails[0]);
				document.getElementById('0').classList.add('sub-img-active');
				if (
					typeof product.oldPrice === 'number' &&
					product.giftImg !== ''
				) {
					setMore1Promotion(true);
				} else {
					setMore1Promotion(false);
				}
			});
	}, []);

	const activeImg = (parameter, index) => {
		setImgActived(parameter);
		document.getElementById(index).classList.add('sub-img-active');
		for (let i = 0; i < productDetail.thumbnails.length; i++) {
			if (i !== index) {
				document.getElementById(i).classList.remove('sub-img-active');
			}
		}
	};

	const viewMore = () => {
		let viewMoreTemp = !viewMoreBtn;
		if (viewMoreTemp === false) {
			window.scroll({
				top:
					document.querySelector('#product-information').offsetTop -
					115,
				behavior: 'smooth'
			});
		}
		setViewMoreBtn(viewMoreTemp);
	};

	// chuc nag them san pham vao gio
	const addToCart = () => {
		dispatch(
			addProduct({
				id: productDetail.id,
				name: productDetail.name,
				price: productDetail.price,
				sku: productDetail.sku,
				srcImg: productDetail.thumbnails[0],
				giftImg: productDetail.giftImg,
				giftName: productDetail.giftName,
				storageQuantity: productDetail.storageQuantity,
				currentQuantity: 1
			})
		);
		setAlertAddToCart(true);
		setTimeout(() => {
			setAlertAddToCart(false);
			dispatch(backOutOfStockDefault());
		}, [2000]);
	};

	// chuc nag nut mua ngay
	const buyNow = () => {
		dispatch(
			addProduct({
				id: productDetail.id,
				name: productDetail.name,
				price: productDetail.price,
				sku: productDetail.sku,
				srcImg: productDetail.thumbnails[0],
				giftImg: productDetail.giftImg,
				giftName: productDetail.giftName,
				storageQuantity: productDetail.storageQuantity,
				currentQuantity: 1
			})
		);
		history.push('/cart');
	};

	const settingsCarousel = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 3,
		nextArrow: <NextArrowCarousel />,
		prevArrow: <PrevArrowCarousel />
	};

	return (
		<div className={className}>
			{productDetail.name !== '' && (
				<MetaTags>
					<title>lol</title>
					<meta name="description" content="Some description." />
					<meta property="og:type" content="article" />
					<meta property="og:title" content="lol" />
					<meta
						property="og:image"
						content="https://avi.edu.vn/wp-content/uploads/2019/11/london-2393098.jpg"
					/>
				</MetaTags>
			)}

			<MenuFixedStyled menuFixedStatus={menuFixedStatus} />
			{/* container */}
			<div id="container">
				<div id="page-direction">
					<Link to="/">
						<img src="/img/home-icon.png" alt="home-icon" />
					</Link>
					<img
						id="caret-right"
						src="/img/caret-right.png"
						alt="caret-right"
					/>
					<Link to="/products-list">
						<span>Laptop</span>
					</Link>
					<img
						id="caret-right"
						src="/img/caret-right.png"
						alt="caret-right"
					/>
					<a href="#">
						<span>{productDetail.name}</span>
					</a>
				</div>
				{onLoading ? (
					<div className="loading-box">
						<div className="lds-roller">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<div className="loading-text">
							Đang tải, vui lòng đợi trong giây lát
						</div>
					</div>
				) : (
					<>
						<div id="product-card">
							{/* product brief */}
							<div id="product-brief">
								<div id="product-brief-left">
									<img
										id="img-active"
										src={imgActived}
										alt=""
									/>
									<div id="sub-imgs">
										{typeof productDetail.thumbnails ===
										'object' ? (
											productDetail.thumbnails.map(
												(thumbnail, index) => (
													<button
														key={index}
														id={index}
														className="sub-img"
														onClick={() =>
															activeImg(
																thumbnail,
																index
															)
														}
													>
														<img
															src={thumbnail}
															alt="laptop-img-1"
														/>
													</button>
												)
											)
										) : (
											<></>
										)}
									</div>
									<hr
										style={{
											borderTop: '#c4c4c4 dashed 1px',
											margin: '0'
										}}
									/>
									<div id="payment-methods">
										<div
											style={{
												marginBottom: '4px',
												fontSize: '16 px'
											}}
										>
											Chấp nhận thanh toán
										</div>
										<div>
											<span>
												<img
													src="/img/cash.png"
													alt="cash"
												/>
												<span>Tiền mặt</span>
											</span>
											<span>
												<img
													src="/img/internet-banking.png"
													alt="internet-banking"
												/>
												<span>Internet banking</span>
											</span>
											<img
												src="/img/visa.png"
												alt="visa"
											/>
											<img
												src="/img/master-card.png"
												alt="master-card"
											/>
											<img
												src="/img/qr-code.png"
												alt="qr-code"
											/>
										</div>
									</div>
								</div>
								<div id="product-brief-right">
									<div id="product-name">
										{productDetail.name}
									</div>
									<div id="thuong-hieu-sku">
										<div>
											<span>Thương hiệu</span>
											<a href="./latop-filted.html">
												{productDetail.trademark}
											</a>
										</div>
										<div>|</div>
										<div>SKU: {productDetail.sku}</div>
									</div>
									{productDetail.storageQuantity > 0 &&
									productDetail.storageQuantity <= 10 ? (
										<div className="storage-quantity">
											Chỉ còn{' '}
											{productDetail.storageQuantity} sản
											phẩm
										</div>
									) : (
										<></>
									)}
									<div id="current-price">
										{typeof productDetail.price ===
										'number' ? (
											productDetail.price.toLocaleString(
												'vi-VN'
											) + ' đ'
										) : (
											<></>
										)}
									</div>
									{typeof productDetail.oldPrice ===
									'number' ? (
										<div id="old-price">
											{productDetail.oldPrice.toLocaleString(
												'vi-VN'
											) + ' đ'}
										</div>
									) : (
										<div id="old-price"></div>
									)}

									<div id="promotion">
										{typeof productDetail.oldPrice ===
										'number' ? (
											<>
												<div className="promotion-item">
													<div
														style={{
															marginRight: '4px'
														}}
													>
														<img
															src="/img/presents.png"
															alt="presents"
														/>
													</div>
													<div>
														<p
															style={{
																fontWeight:
																	'600',
																marginBottom:
																	'8px !important',
																padding:
																	'3px 0px'
															}}
														>
															Giảm giá
														</p>
														<span>
															Giảm trực tiếp{' '}
														</span>
														<span
															style={{
																fontWeight:
																	'600'
															}}
														>
															{(
																productDetail.oldPrice -
																productDetail.price
															).toLocaleString(
																'vi-VN'
															) + ' đ'}
														</span>
													</div>
												</div>
												<hr
													className={
														more1Promotion
															? 'show'
															: 'hide'
													}
													style={{
														borderTop:
															'#c4c4c4 dashed 1px',
														margin: '0'
													}}
												/>
											</>
										) : (
											<></>
										)}
										{productDetail.giftImg !== '' ? (
											<>
												<div className="promotion-item">
													<div
														style={{
															marginRight: '4px'
														}}
													>
														<img
															src="/img/presents.png"
															alt="presents"
														/>
													</div>
													<div>
														<p
															style={{
																fontWeight: 600,
																marginBottom:
																	'8px !important',
																padding:
																	'3px 0px'
															}}
														>
															Quà tặng đi kèm
														</p>
														<div
															style={{
																display: 'flex',
																alignItems:
																	'center'
															}}
														>
															<div
																id="gift-img-box"
																style={{
																	marginRight:
																		'8px'
																}}
															>
																<img
																	src={
																		productDetail.giftImg
																	}
																	alt="balo-laptop"
																/>
															</div>
															<span>
																{
																	productDetail.giftName
																}
															</span>
														</div>
													</div>
												</div>
											</>
										) : (
											<></>
										)}
									</div>
									<button id="buy-now-btn" onClick={buyNow}>
										mua ngay
									</button>
									<div id="installment-add-to-card-box">
										<button className="sm-btn installment-btn">
											mua trả góp
										</button>
										<button
											className="sm-btn add-to-cart-btn"
											onClick={addToCart}
										>
											thêm vào giỏ hàng
										</button>
									</div>
								</div>
							</div>
							<div id="company-policy-services">
								<div id="company-policy">
									<p>Chính sách bán hàng</p>
									<div className="company-policy-services-item">
										<div style={{ marginRight: '10px' }}>
											<img
												src="/img/shipping-car.png"
												alt="shipping-car"
											/>
										</div>
										<div>
											Miễn phí giao hàng cho đơn hàng từ
											800.000đ trở lên
										</div>
									</div>
									<div className="company-policy-services-item">
										<div style={{ marginRight: '10px' }}>
											<img
												src="/img/sheild.png"
												alt="sheild"
											/>
										</div>
										<div>
											Cam kết bán hàng chính hãng 100%
										</div>
									</div>
									<div className="company-policy-services-item">
										<div style={{ marginRight: '10px' }}>
											<img
												src="/img/doi-tra.png"
												alt="doi-tra"
											/>
										</div>
										<div>Đổi trả trong vòng 15 ngày</div>
									</div>
								</div>
								<div id="services">
									<p>Các dịch vụ khác</p>
									<div className="company-policy-services-item">
										<div style={{ marginRight: '10px' }}>
											<img
												src="/img/repair.png"
												alt="repair"
											/>
										</div>
										<div>Sửa chữa đồng giá 150.000đ</div>
									</div>
									<div className="company-policy-services-item">
										<div style={{ marginRight: '10px' }}>
											<img
												src="/img/ve-sinh-laptop.png"
												alt="ve-sinh-laptop"
											/>
										</div>
										<div>Vệ sinh máy tính, laptop</div>
									</div>
									<div className="company-policy-services-item">
										<div style={{ marginRight: '10px' }}>
											<img
												src="/img/bike.png"
												alt="bike"
											/>
										</div>
										<div>Bảo hành tại nhà</div>
									</div>
								</div>
							</div>
						</div>
						{/* product info */}
						<div id="product-information">
							<div id="product-description">
								<div className="product-information-title">
									<div
										style={{ fontSize: 19, marginRight: 6 }}
									>
										|
									</div>
									<div
										style={{ height: 21, fontWeight: 600 }}
									>
										Mô tả sản phẩm
									</div>
								</div>
								<div
									id="product-description-content"
									style={
										viewMoreBtn
											? { height: 'fit-content' }
											: { height: '1050px' }
									}
								>
									{typeof productDetail.descriptionContent ===
									'object' ? (
										productDetail.descriptionContent.map(
											(descriptionPart, index) => (
												<div key={index}>
													{descriptionPart.title !==
													'' ? (
														<h4>
															{
																descriptionPart.title
															}
														</h4>
													) : (
														<></>
													)}
													<div>
														{descriptionPart.content
															.length !== 0 ? (
															descriptionPart.content.map(
																(
																	paragraph,
																	index
																) => (
																	<p
																		key={
																			index
																		}
																	>
																		{
																			paragraph
																		}
																	</p>
																)
															)
														) : (
															<></>
														)}
													</div>
													{descriptionPart.srcImg !==
													'' ? (
														<img
															src={
																descriptionPart.srcImg
															}
														/>
													) : (
														<></>
													)}
												</div>
											)
										)
									) : (
										<></>
									)}
								</div>
								<div
									style={{
										width: '100%',
										display: 'flex',
										justifyContent: 'center'
									}}
								>
									<button
										id="view-more-btn"
										onClick={viewMore}
									>
										<span style={{ marginRight: 4 }}>
											{viewMoreBtn
												? 'Thu nhỏ'
												: 'Xem thêm'}
										</span>
										<i
											className={`fas ${
												viewMoreBtn
													? 'fa-angle-up'
													: 'fa-angle-down'
											}`}
										/>
									</button>
								</div>
							</div>

							<div id="specifications">
								<div className="product-information-title">
									<div
										style={{ fontSize: 19, marginRight: 6 }}
									>
										|
									</div>
									<div
										style={{ height: 21, fontWeight: 600 }}
									>
										Thông số kỹ thuật
									</div>
								</div>
								<div id="specifications-box">
									<div
										style={{
											fontSize: 15,
											color: 'rgba(34,34,34,0.6)',
											fontWeight: 600
										}}
									>
										Thông tin chung
									</div>
									<div className="product-info-key-value gray">
										<div className="key">Thương hiệu</div>
										<div className="value">MSI</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Series laptop</div>
										<div className="value">GS Series</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">Part-number</div>
										<div className="value">
											4719072674250
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Thế hệ CPU</div>
										<div className="value">
											Core i5 , Intel Core thế hệ thứ 9
										</div>
									</div>
									<div
										style={{
											fontSize: 15,
											color: 'rgba(34,34,34,0.6)',
											fontWeight: 600
										}}
									>
										Thông tin chi tiết
									</div>
									<div className="product-info-key-value gray">
										<div className="key">CPU</div>
										<div className="value">
											Intel Core i5-1135G7 ( 4.2 GHz / 8MB
											/ 4 nhân, 8 luồng )
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Chip đồ họa</div>
										<div className="value">
											NVIDIA GeForce GTX 1660Ti 6GB GDDR6
											/ Intel UHD Graphics 630
										</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">RAM</div>
										<div className="value">
											1 x 8GB DDR4 3200MHz ( 1 Khe cắm /
											Hỗ trợ tối đa 32GB )
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Màn hình</div>
										<div className="value">
											15.6" ( 1920 x 1080 ) Full HD IPS
											144Hz , không cảm ứng , HD webcam
										</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">Lưu trữ</div>
										<div className="value">
											512GB SSD M.2 NVMe
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">
											Số cổng lưu trữ tối đa
										</div>
										<div className="value">
											1 x M.2 NVMe, 1 x M.2 SATA/NVMe
										</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">
											Cổng xuất hình
										</div>
										<div className="value">
											1 x HDMI , 1 x DisplayPort
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Cổng kết nối</div>
										<div className="value">
											1 x USB Type-C / DisplayPort /
											Thunderbolt 3 , 3 x USB 3.2 , LAN 1
											Gb/s
										</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">
											Kết nối không dây
										</div>
										<div className="value">
											WiFi 802.11ac , Bluetooth 5.0
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Bàn phím</div>
										<div className="value">
											thường , không phím số , led RGB
										</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">Hệ điều hành</div>
										<div className="value">
											Windows 10 Home 64-bit
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Kích thước</div>
										<div className="value">
											35.77 x 24.77 x 1.79 cm
										</div>
									</div>
									<div className="product-info-key-value gray">
										<div className="key">Pin</div>
										<div className="value">
											4 cell 82 Wh
										</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">Khối lượng</div>
										<div className="value">1.9 kg</div>
									</div>
									<div
										style={{
											fontSize: 15,
											color: 'rgba(34,34,34,0.6)',
											fontWeight: 600
										}}
									>
										Thông tin khác
									</div>
									<div className="product-info-key-value gray">
										<div className="key">Bảo mật</div>
										<div className="value">Vân tay</div>
									</div>
									<div className="product-info-key-value">
										<div className="key">
											Đèn led trên máy
										</div>
										<div className="value">Led RGB</div>
									</div>
								</div>
							</div>
						</div>
						{/* san pham lien quan */}
						<div id="same-product">
							<div className="product-information-title">
								<div style={{ fontSize: 19, marginRight: 6 }}>
									|
								</div>
								<div style={{ height: 21, fontWeight: 600 }}>
									Sản phẩm liên quan
								</div>
							</div>
							<div className="products">
								<Slider {...settingsCarousel}>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/lap-top-1.webp"
												alt="hot-sell-1"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop MICROSOFT Surface Pro
													7 QWU-00001 ( 12.3" Intel
													Core i5-1035G4/8GB/128GB
													SSD/Free DOS/0.8kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift"></div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/hot-sell-2.webp"
												alt="hot-sell-2"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop ASUS Vivobook S533EQ-
													BQ011T ( 15.6" Full HD/
													Intel Core i5-1135G7/ 8GB/
													512GB SSD/ NVIDIA GeForce
													MX350/ Windows 10 Home SL
													64-bit/1.7kg)
												</div>
												<p className="product-card-price">
													21.490.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														21.790.000 đ
													</p>
													<p className="discount-percent">
														-1.3%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15.6'
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/hot-sell-3.webp"
												alt="hot-sell-3"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop ASUS Vivobook S533EQ-
													BQ011T ( 15.6" Full HD/
													Intel Core i5-1135G7/ 8GB/
													512GB SSD/ NVIDIA GeForce
													MX350/ Windows 10 Home SL
													64-bit/1.7kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15.6'
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/hot-sell-4.webp"
												alt="hot-sell-4"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop ASUS Vivobook S533EQ-
													BQ011T ( 15.6" Full HD/
													Intel Core i5-1135G7/ 8GB/
													512GB SSD/ NVIDIA GeForce
													MX350/ Windows 10 Home SL
													64-bit/1.7kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15.6'
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/lap-top-1.webp"
												alt="hot-sell-1"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop MICROSOFT Surface Pro
													7 QWU-00001 ( 12.3" Intel
													Core i5-1035G4/8GB/128GB
													SSD/Free DOS/0.8kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15"
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/lap-top-1.webp"
												alt="hot-sell-1"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop MICROSOFT Surface Pro
													7 QWU-00001 ( 12.3" Intel
													Core i5-1035G4/8GB/128GB
													SSD/Free DOS/0.8kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift"></div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/hot-sell-2.webp"
												alt="hot-sell-2"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop ASUS Vivobook S533EQ-
													BQ011T ( 15.6" Full HD/
													Intel Core i5-1135G7/ 8GB/
													512GB SSD/ NVIDIA GeForce
													MX350/ Windows 10 Home SL
													64-bit/1.7kg)
												</div>
												<p className="product-card-price">
													21.490.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														21.790.000 đ
													</p>
													<p className="discount-percent">
														-1.3%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15"
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/hot-sell-3.webp"
												alt="hot-sell-3"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop ASUS Vivobook S533EQ-
													BQ011T ( 15.6" Full HD/
													Intel Core i5-1135G7/ 8GB/
													512GB SSD/ NVIDIA GeForce
													MX350/ Windows 10 Home SL
													64-bit/1.7kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15"
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
									<a href="./Laptop-MSI-GS65-Stealth-9SD-1409VN.html">
										<div className="product">
											<img
												src="/img/hot-sell-4.webp"
												alt="hot-sell-4"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop ASUS Vivobook S533EQ-
													BQ011T ( 15.6" Full HD/
													Intel Core i5-1135G7/ 8GB/
													512GB SSD/ NVIDIA GeForce
													MX350/ Windows 10 Home SL
													64-bit/1.7kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15"
														</span>
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
											<img
												src="/img/lap-top-1.webp"
												alt="hot-sell-1"
											/>
											<div className="product-card">
												<div className="product-card-name">
													Laptop MICROSOFT Surface Pro
													7 QWU-00001 ( 12.3" Intel
													Core i5-1035G4/8GB/128GB
													SSD/Free DOS/0.8kg)
												</div>
												<p className="product-card-price">
													3.990.000 đ
												</p>
												<div className="product-card-old-price">
													<p className="old-price">
														4.209.000 đ
													</p>
													<p className="discount-percent">
														-5.2%
													</p>
												</div>
												<div className="product-card-gift">
													<span>Quà tặng</span>
													<div className="product-card-gift-img">
														<img
															src="/img/bag-laptop-1.jpg"
															alt=""
														/>
														<span>
															x1 túi đựng laptop
															15"
														</span>
													</div>
												</div>
											</div>
										</div>
									</a>
								</Slider>
							</div>
						</div>
					</>
				)}
			</div>

			{/* modal alert add to cart */}
			<div
				id="alert-added-to-cart-container"
				style={
					alertAddToCart ? { display: 'flex' } : { display: 'none' }
				}
			>
				<div id="alert-added-to-cart-box">
					{outOfStock ? (
						<span>Đã hết sản phẩm trong tồn kho</span>
					) : (
						<>
							<i className="far fa-check-circle"></i>
							<p>Thêm vào giỏ hàng thành công</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

const ProductDetailStyled = styled(ProductDetail)`
	.show {
		display: block;
	}
	.hide {
		display: none;
	}

	// style loading box
	.loading-box {
		width: 100%;
		height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: white;
		border-radius: 10px;
	}
	.loading-text {
		font-size: 18px;
		margin-top: 15px;
	}
	.lds-roller {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-roller div {
		animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		transform-origin: 40px 40px;
	}
	.lds-roller div:after {
		content: ' ';
		display: block;
		position: absolute;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #fff;
		margin: -4px 0 0 -4px;
	}
	.lds-roller div:nth-child(1) {
		animation-delay: -0.036s;
	}
	.lds-roller div:nth-child(1):after {
		top: 63px;
		left: 63px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(2) {
		animation-delay: -0.072s;
	}
	.lds-roller div:nth-child(2):after {
		top: 68px;
		left: 56px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(3) {
		animation-delay: -0.108s;
	}
	.lds-roller div:nth-child(3):after {
		top: 71px;
		left: 48px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(4) {
		animation-delay: -0.144s;
	}
	.lds-roller div:nth-child(4):after {
		top: 72px;
		left: 40px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(5) {
		animation-delay: -0.18s;
	}
	.lds-roller div:nth-child(5):after {
		top: 71px;
		left: 32px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(6) {
		animation-delay: -0.216s;
	}
	.lds-roller div:nth-child(6):after {
		top: 68px;
		left: 24px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(7) {
		animation-delay: -0.252s;
	}
	.lds-roller div:nth-child(7):after {
		top: 63px;
		left: 17px;
		background-color: #00d9e7;
	}
	.lds-roller div:nth-child(8) {
		animation-delay: -0.288s;
	}
	.lds-roller div:nth-child(8):after {
		top: 56px;
		left: 12px;
		background-color: #00d9e7;
	}
	@keyframes lds-roller {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* style cho product brief */

	#product-card {
		width: 100%;
		display: flex;
	}

	#product-brief {
		width: 74.5%;
		background-color: white;
		display: flex;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		padding: 20px;
		margin-right: 20px;
	}

	#product-brief-left {
		max-width: 344px;
		margin-right: 20px;
	}

	#img-active {
		max-width: 344px;
		margin-bottom: 4px;
	}

	#sub-imgs {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.sub-img {
		width: 54px;
		height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: 0px;
		border: none;
		outline: none;
		border-radius: 7px;
	}

	.sub-img-active {
		border: 1px solid #4000f4;
	}

	#payment-methods {
		margin-top: 40px;
	}

	#payment-methods img {
		height: 25px;
		margin-right: 4px;
	}

	#payment-methods > div {
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	#payment-methods span {
		display: flex;
		align-items: center;
	}
	#product-brief-right {
		max-width: 490px;
	}

	#product-name {
		width: 100%;
		font-weight: 600;
		font-size: 24px;
		line-height: 1.33;
		color: rgb(51, 51, 51);
		margin-bottom: 4px;
	}

	#thuong-hieu-sku {
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #878787;
		margin-bottom: 12px;
	}

	#thuong-hieu-sku span {
		margin-right: 4px;
	}

	#thuong-hieu-sku div {
		margin-right: 4px;
	}

	#thuong-hieu-sku a {
		font-weight: 600;
		color: #0044f4;
	}

	#thuong-hieu-sku a:hover {
		color: #0033b4;
	}

	.storage-quantity {
		color: #ff5e00;
		font-weight: 600;
		margin-bottom: 12px;
	}

	#current-price {
		font-size: 24px;
		font-weight: 600;
		color: #0069ff;
	}

	#old-price {
		font-size: 14px;
		color: #878787;
		text-decoration: line-through;
		margin-bottom: 12px;
	}

	#promotion {
		width: 100%;
		background: #f7f7f7;
		border: 1px solid rgba(160, 160, 160, 0.5);
		box-sizing: border-box;
		border-radius: 7px;
		padding: 0px 10px;
		margin-bottom: 47px;
	}

	.promotion-item {
		display: flex;
		align-items: flex-start;
		font-size: 14px;
		margin: 10px 0px;
	}

	#gift-img-box {
		width: 30px;
		height: 30px;
		border: 1px solid #d0d0d0;
		box-sizing: border-box;
	}

	#buy-now-btn {
		width: 100%;
		background: #fb0000;
		border-radius: 5px;
		border: none;
		padding: 12px;
		color: white;
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 500;
		margin-bottom: 8px;
	}

	#buy-now-btn:hover {
		background-color: #ca0000;
	}

	#installment-add-to-card-box {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.sm-btn {
		width: 49%;
		border-radius: 5px;
		border: none;
		padding: 11px;
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 500;
	}

	.installment-btn {
		background-color: rgba(38, 121, 255, 0.9);
		color: white;
	}

	.installment-btn:hover {
		background-color: rgba(0, 77, 201, 0.9);
	}

	.add-to-cart-btn {
		background-color: white;
		color: rgba(38, 121, 255, 0.9);
		border: 1px solid rgba(38, 121, 255, 0.9);
	}

	.add-to-cart-btn:hover {
		color: rgba(0, 77, 201, 0.9);
	}

	#company-policy-services {
		max-width: 286px;
		height: fit-content;
		background-color: white;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		padding: 16px;
		font-size: 14px;
	}

	#company-policy {
		margin-bottom: 16px;
	}

	.company-policy-services-item {
		display: flex;
		color: #222;
		margin-bottom: 8px;
	}

	#company-policy-services img {
		max-width: 24px;
	}

	#company-policy-services p {
		font-weight: 600;
		margin-bottom: 8px !important;
	}

	/* kết thúc style cho product brief */

	/* style cho product info */

	#product-information {
		width: 100%;
		margin-top: 20px;
		background-color: white;
		border-radius: 5px;
		padding: 10px;
		display: flex;
	}

	#product-description {
		max-width: 747px;
		margin-right: 12px;
	}

	.product-information-title {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 41px;
		color: #222;
		padding: 0px 10px;
		font-size: 18px;
	}

	#product-description-content {
		margin-top: 8px;
		padding: 10px;
		overflow: hidden;
	}

	#product-description-content h4 {
		font-size: 20px;
		font-weight: 600;
		margin: 0px 0px 10px 0px;
	}

	#product-description-content p {
		font-size: 14px;
		margin-bottom: 10px !important;
	}

	#product-description-content img {
		margin-bottom: 20px !important;
	}

	#view-more-btn {
		width: 126px;
		margin: 16px;
		border: 1px solid rgba(38, 121, 255, 0.9);
		border-radius: 7px;
		padding: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
		color: rgba(38, 121, 255, 0.9);
		outline: none;
	}
	#view-more-btn:hover {
		background-color: rgba(38, 121, 255, 0.9);
		color: white;
	}
	#specifications {
		max-width: 401px;
	}

	#specifications-box {
		width: 100%;
		margin-top: 8px;
	}

	#specifications-box > div {
		padding: 10px;
	}

	.product-info-key-value {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #222;
		font-size: 14px;
	}

	.key {
		width: 39%;
	}

	.value {
		width: 60%;
	}

	.gray {
		background-color: #f2f2f2;
	}

	/* kết thúc style cho product info */

	/* style cho same product */

	#same-product {
		width: 100%;
		background-color: white;
		border-radius: 10px;
		margin-top: 20px;
		padding: 10px;
	}

	.product {
		width: 100%;
		padding: 8px;
		background-color: white;
	}
	.product > img {
		transition: transform 0.2s ease-in-out;
	}
	.product:hover > img {
		transform: scale(1.05, 1.05);
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
	}

	.product-card-gift span {
		color: #222;
		font-size: 11px;
	}

	.product-card-gift-img {
		width: fit-content;
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: 5px;
	}

	.product-card-gift-img img {
		width: 24px;
		height: 24px;
		margin-right: 4px;
	}

	/* kết thúc style cho same product */

	/* responsive cho màn hình từ 1025px - 1200px */

	@media (min-width: 1025px) and (max-width: 1200px) {
		#product-card {
			flex-direction: column;
		}
		#product-brief {
			width: 100%;
			margin: 0px;
			justify-content: space-around;
		}
		#product-brief-left {
			margin-right: 40px;
		}
		#product-brief-right {
			max-width: 590px;
		}
		#company-policy-services {
			max-width: 100%;
			display: flex;
			margin-top: 20px;
			padding: 16px 20px;
		}
		#company-policy {
			margin-right: 80px;
		}
		#product-description {
			max-width: 600px;
		}
		.product-card-gift span {
			font-size: 13px;
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
	}

	/* responsive cho màn hình từ 768px - 1024px */

	@media (min-width: 768px) and (max-width: 1024px) {
		#product-card {
			flex-direction: column;
		}
		#product-brief {
			width: 100%;
			margin: 0px;
			justify-content: space-around;
			padding: 12px;
		}
		#product-brief-left {
			max-width: 290px;
			margin-right: 12px;
		}
		.sub-img {
			width: 45px;
			height: 45px;
		}
		#payment-methods > div {
			font-size: 13px;
			flex-wrap: wrap;
		}
		#product-name {
			font-size: 20px;
		}
		#current-price {
			font-size: 20px;
		}
		#promotion {
			margin-bottom: 40px;
		}
		#buy-now-btn {
			font-size: 18px;
		}
		.sm-btn {
			font-size: 16px;
		}
		#company-policy-services {
			max-width: 100%;
			display: flex;
			margin-top: 20px;
			padding: 16px 20px;
		}
		#company-policy {
			margin-right: 80px;
		}
		#product-information {
			flex-direction: column-reverse;
		}
		#product-description {
			max-width: 100%;
			margin: 30px 0px 0px 0px;
		}
		#product-description-content img {
			width: 100%;
		}
		#specifications {
			max-width: 100%;
		}
	}

	/* responsive cho màn hình từ 576px - 767px */

	@media (min-width: 576px) and (max-width: 767px) {
		#product-card {
			flex-direction: column;
		}
		#product-brief {
			width: 100%;
			margin: 0px;
			flex-direction: column;
			align-items: center;
			padding: 0px 20px 20px 20px;
		}
		#product-brief-left {
			max-width: 100%;
			margin: 0px;
		}
		.sub-img {
			width: 75px;
			height: 75px;
		}
		#payment-methods {
			display: none;
		}
		#product-brief-right {
			margin-top: 15px;
			max-width: 100%;
		}
		#product-name {
			font-size: 20px;
		}
		#current-price {
			font-size: 20px;
		}
		#promotion {
			margin-bottom: 40px;
		}
		#buy-now-btn {
			font-size: 18px;
		}
		.sm-btn {
			font-size: 16px;
		}
		#company-policy-services {
			max-width: 100%;
			display: flex;
			margin-top: 20px;
			padding: 16px 20px;
		}
		#product-information {
			flex-direction: column-reverse;
		}
		#product-description {
			max-width: 100%;
			margin: 30px 0px 0px 0px;
		}
		#product-description-content img {
			width: 100%;
		}
		#specifications {
			max-width: 100%;
		}
		#view-more-btn {
			padding: 8px 6px;
		}
		.product-card-gift span {
			font-size: 13px;
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
	}

	/* responsive cho màn hình từ 320px - 575px */

	@media (min-width: 320px) and (max-width: 575px) {
		#page-direction {
			display: none !important;
		}
		#product-card {
			flex-direction: column;
		}
		#product-brief {
			width: 100%;
			margin-top: 20px;
			flex-direction: column;
			align-items: center;
			padding: 0px 10px 10px 10px;
		}
		#product-brief-left {
			max-width: 100%;
			margin: 0px;
		}
		.sub-img {
			width: 50px;
			height: 50px;
		}
		#payment-methods {
			display: none;
		}
		#product-brief-right {
			margin-top: 15px;
			max-width: 100%;
		}
		#product-name {
			font-size: 18px;
		}
		#current-price {
			font-size: 18px;
		}
		#promotion {
			margin-bottom: 40px;
		}
		#buy-now-btn {
			font-size: 16px;
		}
		.sm-btn {
			font-size: 13px;
			padding: 12px 4px;
		}
		#company-policy-services {
			max-width: 100%;
			margin-top: 16px;
			padding: 10px;
			font-size: 13px;
		}
		#product-information {
			flex-direction: column-reverse;
			padding: 6px;
		}
		h4 {
			font-size: 16px !important;
		}
		#product-description {
			max-width: 100%;
		}
		#product-description-content img {
			width: 100%;
		}
		#specifications {
			max-width: 100%;
		}
		#view-more-btn {
			font-size: 14px;
			padding: 5px;
			margin: 4px 0px 16px 0px;
		}
		.product-info-key-value {
			font-size: 13px;
		}
		.product-card-gift span {
			font-size: 13px;
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
	}

	/* style cho button carousel */
	.slick-next::before,
	.slick-prev::before {
		font-size: 40px;
		color: gray;
	}
	.slick-next.slick-disabled::before,
	.slick-prev.slick-disabled::before {
		opacity: 0;
	}

	/* style cho modal alert add to cart */
	#alert-added-to-cart-container {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 600;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#alert-added-to-cart-box {
		background-color: rgba(32, 28, 56, 0.9);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		padding: 25px;
	}

	#alert-added-to-cart-box i {
		font-size: 40px;
		color: #31f53d;
	}

	#alert-added-to-cart-box p {
		font-size: 18px;
		color: white;
		margin-top: 15px !important;
	}

	#alert-added-to-cart-box span {
		font-size: 18px;
		color: white;
	}
`;
export default ProductDetailStyled;
