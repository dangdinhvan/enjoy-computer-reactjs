import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MenuFixedStyled from "./MenuFixed";
import {
  removeProduct,
  removeAllProducts,
  minusProductQuantity,
  plusProductQuantity,
} from "../store/cartSlice";

let deleteIdTemp = "";

function Cart({
  className,
  menuFixedStatus,
  menuScrollBtn,
  sendRequestHideMenufixed,
}) {
  const productsList = useSelector((state) => state.cart.products);

  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalVoucher, setTotalVoucher] = useState(0);
  const [modalDeleteState, setModalDeleteState] = useState("");
  const [voucherInputValue, setVoucherInputValue] = useState("");
  const [alertResult, setAlertResult] = useState("");
  const [resultVoucher, setResultVoucher] = useState("");
  const [resultApplyVoucherClass, setResultApplyVoucherClass] =
    useState("hide");
  const [applyVoucherBtnDisabled, setApplyVoucherBtnDisabled] = useState(true);
  const [totalVoucherClass, setTotalVoucherClass] = useState("hide");
  // const [checkedAllState, setCheckkedAllState] = useState(true);
  const [modalOrder, setModalOrder] = useState("");
  const [validateName, setValidateName] = useState(false);
  const [validatePhoneNumber, setValidatePhoneNumber] = useState(false);
  const [validateProvince, setValidateProvince] = useState(false);
  const [validateAddress, setValidateAddress] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [selectProvince, setSelectProvince] = useState("");
  const [bakingBox, setBankingBox] = useState(false);

  const modalBoxDelete = useRef(null);
  const deleteAllStatus = useRef(false);
  const modalBoxOrder = useRef(null);
  const techcombankLogo = useRef(null);
  const viettinbankLogo = useRef(null);
  const modalContainerOrder = useRef(null);

  const dispatch = useDispatch();

  // an menu fixed
  const eventMouseUp = (e) => {
    if (
      e.target !== menuScrollBtn &&
      e.target !== menuScrollBtn.children[0] &&
      e.target !== menuScrollBtn.children[1]
    ) {
      sendRequestHideMenufixed("true");
    }
  };

  useEffect(() => {
    if (menuFixedStatus === true) {
      window.addEventListener("mouseup", eventMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", eventMouseUp);
    };
  }, [menuFixedStatus]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    let newProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      newProducts.push(data);
    }
    setProducts(newProducts);
  }, [productsList, localStorage.length]);

  useEffect(() => {
    let totalCostValue = 0;
    products.forEach((product) => {
      totalCostValue += product.price * product.currentQuantity;
    });
    setTotalCost(totalCostValue);
  }, [products]);

  const history = useHistory();
  const returnShopping = () => {
    history.push("/");
  };

  // chuc nang giam so luong
  const minusQuantity = (id) => {
    dispatch(minusProductQuantity(id));
  };

  // chuc nang tang so luong
  const plusQuantity = (id) => {
    dispatch(plusProductQuantity(id));
  };

  // chuc nang xoa 1 san pham
  const deleteProduct = (id) => {
    deleteIdTemp = id;
    setModalDeleteState("show");
    modalBoxDelete.current.style.transform = "translate(0px,180px)";
    modalBoxDelete.current.style.transition = "transform 0.3s ease-out";
  };

  // chuc nang xoa tat ca san pham
  const deleteAll = () => {
    deleteAllStatus.current = true;
    setModalDeleteState("show");
    modalBoxDelete.current.style.transform = "translate(0px,180px)";
    modalBoxDelete.current.style.transition = "transform 0.3s ease-out";
  };

  // xac nhan xoa san pham
  const confirmDelete = () => {
    if (deleteAllStatus.current === false) {
      dispatch(removeProduct(deleteIdTemp));
    } else {
      dispatch(removeAllProducts());
      deleteAllStatus.current = false;
    }
    setModalDeleteState("");
    modalBoxDelete.current.style.transform = "none";
  };

  // chuc nang huy xoa san pham
  const rejectDelete = () => {
    setModalDeleteState("");
    modalBoxDelete.current.style.transform = "none";
    deleteAllStatus.current = false;
  };

  // cap nhat gia tri input voucher
  const updateVoucherInput = (e) => {
    if (e.target.value === "") {
      setApplyVoucherBtnDisabled(true);
    } else {
      setApplyVoucherBtnDisabled(false);
    }
    setVoucherInputValue(e.target.value);
    setAlertResult("");
    setResultVoucher("");
  };

  // chuc nang nut apply voucher
  const applyVoucher = () => {
    setResultApplyVoucherClass("");
    if (voucherInputValue !== "123") {
      setAlertResult("Mã giảm giá không chính xác. Vui lòng nhập lại");
      setResultVoucher("");
    } else {
      setResultApplyVoucherClass("apply-success");
      setAlertResult("Áp dụng mã giảm giá thành công");
      setResultVoucher("Giảm trực tiếp 500.000 VNĐ");
      setTotalVoucherClass("");
      setTotalVoucher(500000);
    }
  };

  // chuc nang dat hang
  const order = () => {
    setModalOrder("show");
    modalBoxOrder.current.style.transform = "translate(0px,0px)";
    modalBoxOrder.current.style.transition = "transform 0.3s ease-out";
    document.body.style.overflow = "hidden";
    setValidateName(false);
    setValidatePhoneNumber(false);
    setValidateProvince(false);
    setValidateAddress(false);
  };

  // update input order
  const updateInputOrder = (event, parameter) => {
    if (parameter === "inputName") {
      setInputName(event.target.value);
      setValidateName(false);
    } else if (parameter === "inputPhoneNumber") {
      setInputPhoneNumber(event.target.value);
      setValidatePhoneNumber(false);
    } else if (parameter === "inputEmail") {
      setInputEmail(event.target.value);
    } else if (parameter === "select-province") {
      setSelectProvince(event.target.value);
      setValidateProvince(false);
    } else if (parameter === "inputAddress") {
      setInputAddress(event.target.value);
      setValidateAddress(false);
    } else if (parameter === "inputNote") {
      setInputNote(event.target.value);
    }
  };

  // chuc nang nut xac nhan mua hang
  const confirmPurchase = () => {
    if (inputName === "") {
      setValidateName(true);
      modalBoxOrder.current.scrollIntoView();
    }
    if (inputPhoneNumber === "") {
      setValidatePhoneNumber(true);
      modalBoxOrder.current.scrollIntoView();
    }
    if (selectProvince === "") {
      setValidateProvince(true);
      modalBoxOrder.current.scrollIntoView();
    }
    if (inputAddress === "") {
      setValidateAddress(true);
      modalBoxOrder.current.scrollIntoView();
    }
    if (
      inputName !== "" &&
      inputPhoneNumber !== "" &&
      selectProvince !== "" &&
      inputAddress !== ""
    ) {
      history.push("/complete-order");
    }
  };

  // chuc nang nut huy dat hang
  const cancelPurchase = () => {
    setModalOrder("");
    modalBoxOrder.current.style.transform = "none";
    document.body.style.overflow = "auto";
  };

  // an modal order
  const hideModalOrder = (e) => {
    if (e.target === modalContainerOrder.current) {
      setModalOrder("");
      modalBoxOrder.current.style.transform = "none";
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (modalOrder === "show") {
      window.addEventListener("click", hideModalOrder);
    }
    return () => {
      window.removeEventListener("click", hideModalOrder);
    };
  }, [modalOrder]);

  // active bank logo
  const bankingRadioChecked = (radioName) => {
    if (radioName === "radio-1") {
      setBankingBox(false);
    } else {
      setBankingBox(true);
    }
  };

  const activeBankLogo = (bankNameLogo) => {
    if (bankNameLogo === "techcombank") {
      techcombankLogo.current.style.border = "1px solid #56b4ef";
      techcombankLogo.current.style.boxShadow = "0px 0px 1px 4px #c8def0";
      viettinbankLogo.current.style.border = "1px solid #c4c4c4";
      viettinbankLogo.current.style.boxShadow = "none";
    } else {
      techcombankLogo.current.style.border = "1px solid #c4c4c4";
      techcombankLogo.current.style.boxShadow = "none";
      viettinbankLogo.current.style.border = "1px solid #56b4ef";
      viettinbankLogo.current.style.boxShadow = "0px 0px 1px 4px #c8def0";
    }
  };

  return (
    <div className={className}>
      <MenuFixedStyled menuFixedStatus={menuFixedStatus} />
      {/* container */}
      <div id="container">
        <div id="page-direction">
          <Link to="/">
            <img src="img/home-icon.png" alt="home-icon" />
          </Link>
          <img id="caret-right" src="img/caret-right.png" alt="caret-right" />
          <Link to="/cart">
            <span>Giỏ hàng</span>
          </Link>
        </div>
        {/* cart content */}
        {products.length === 0 ? (
          <div id="products-empty">
            <img src="img/empty-product.png" alt="empty products" />
            <p>Không có sản phẩm trong giỏ hàng</p>
            <button onClick={returnShopping}>Quạy lại mua hàng</button>
          </div>
        ) : (
          <div id="content">
            <div id="cart-box">
              <div id="cart-box-header">
                <div>
                  {/* <input
                    type="checkbox"
                    checked={checkedAllState}
                    onChange={handleCheckAll}
                  /> */}
                  <span>Giỏ hàng của bạn</span>
                </div>
                <div id="total-cost">
                  <span>{totalCost.toLocaleString("vi-VN") + " đ"}</span>
                  <button id="delete-all" onClick={deleteAll}>
                    Xóa tất cả
                  </button>
                </div>
              </div>
              {/* render products list */}
              {products.map((product) => (
                <div className="cart-box-content" key={product.id}>
                  <div className="product">
                    <div className="main-product">
                      <div className="checkbox-product-info">
                        {/* <input
                          type="checkbox"
                          checked={checkedStatus}
                          onChange={(e) => productChecked(e, id)}
                        /> */}
                        <div className="product-info">
                          <div className="product-img">
                            <img src={product.srcImg} alt="product-img" />
                          </div>
                          <div className="product-name">
                            <a
                              href="true"
                              style={{ marginBottom: "4", color: "#222" }}
                            >
                              {product.name}
                            </a>
                            <div style={{ color: "rgba(34,34,34,0.6)" }}>
                              SKU: {product.sku}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-count-box-price-delete">
                        <div className="product-count-box">
                          <button
                            className="minus"
                            onClick={() => minusQuantity(product.id)}
                          >
                            &minus;
                          </button>
                          <input type="text" value={product.currentQuantity} />
                          <button
                            className="plus"
                            onClick={() => plusQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="price">
                          {(
                            product.price * product.currentQuantity
                          ).toLocaleString("vi-VN") + " đ"}
                        </div>
                        <button
                          className="del-btn"
                          onClick={() => deleteProduct(product.id)}
                        >
                          <i className="far fa-trash-alt" />
                          <span>Xóa</span>
                        </button>
                      </div>
                    </div>
                    {product.giftImg !== "" && (
                      <div className="gift-product">
                        <div className="gift-product-img">
                          <img src={product.giftImg} alt="balo" />
                        </div>
                        <div>{product.giftName}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* render voucher and payment */}
            <div id="voucher-and-payment">
              <div id="voucher">
                <div className="voucher-and-payment-header">
                  Mã giảm giá/Phiếu mua hàng
                </div>
                <div id="apply-voucher">
                  <input
                    type="text"
                    placeholder="Nhập mã 123 để được giảm giá"
                    onChange={updateVoucherInput}
                  />
                  <button
                    onClick={applyVoucher}
                    disabled={applyVoucherBtnDisabled}
                  >
                    Áp dụng ngay
                  </button>
                </div>
                <div
                  id="result-apply-voucher"
                  className={resultApplyVoucherClass}
                >
                  <p id="alert-result">{alertResult}</p>
                  <p id="result-voucher">{resultVoucher}</p>
                </div>
              </div>
              <div id="payment">
                <div className="voucher-and-payment-header">Thanh toán</div>
                <div className="payment-line">
                  <span>Tổng cộng</span>
                  <span id="total-bill">
                    {totalCost.toLocaleString("vi-VN") + " đ"}
                  </span>
                </div>
                <div
                  className={"payment-line total-voucher " + totalVoucherClass}
                >
                  <span>Mã giảm giá</span>
                  <span id="total-voucher">
                    -{totalVoucher.toLocaleString("vi-VN") + " đ"}
                  </span>
                </div>
                <div className="payment-line">
                  <span>Thành tiền</span>
                  <span id="total-payment">
                    {Math.round(
                      (totalCost - totalVoucher) * 1.1
                    ).toLocaleString("vi-VN") + " đ"}
                  </span>
                </div>
                <div id="text-vat">(Đã bao gồm thuế VAT)</div>
                <button id="purchase" onClick={() => order()}>
                  Đặt hàng
                </button>
                <div id="payment-methods">
                  <div style={{ marginBottom: 4, fontSize: 16 }}>
                    Chấp nhận thanh toán
                  </div>
                  <div>
                    <span>
                      <img src="img/cash.png" alt="cash" />
                      <span>Tiền mặt</span>
                    </span>
                    <span>
                      <img
                        src="img/internet-banking.png"
                        alt="internet-banking"
                      />
                      <span>Internet banking</span>
                    </span>
                    <img src="img/visa.png" alt="visa" />
                    <img src="img/master-card.png" alt="master-card" />
                    <img src="img/qr-code.png" alt="qr-code" />
                  </div>
                </div>
              </div>
            </div>
            {/* modal alert delete product */}
            <div id="modal-container-delete" className={modalDeleteState}>
              <div className="modal-box-delete" ref={modalBoxDelete}>
                <div className="modal-title">
                  <h4>Thông báo</h4>
                </div>
                <div className="modal-body">
                  <p>Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng?</p>
                </div>
                <div className="modal-footer">
                  <button className="btn close-btn" onClick={rejectDelete}>
                    Hủy bỏ
                  </button>
                  <button
                    className="btn delete-confirm-btn"
                    onClick={confirmDelete}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>

            {/* modal order */}
            <div
              id="modal-container-order"
              className={modalOrder}
              ref={modalContainerOrder}
            >
              <div className="modal-box-order" ref={modalBoxOrder}>
                <h3>Form đặt hàng</h3>
                <h4>1. Thông tin khách hàng</h4>
                <div className="input-container">
                  <div className="input-box">
                    <div className="input-name">Họ và tên</div>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Nhập họ và tên"
                      onChange={(e) => updateInputOrder(e, "inputName")}
                      value={inputName}
                    />
                  </div>
                  <div
                    className="resault-validate"
                    style={
                      validateName ? { display: "block" } : { display: "none" }
                    }
                  >
                    Bạn cần nhập họ tên
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-box">
                    <div className="input-name">Số điện thoại</div>
                    <input
                      type="number"
                      className="input-text"
                      placeholder="Nhập số điện thoại"
                      onChange={(e) => updateInputOrder(e, "inputPhoneNumber")}
                      value={inputPhoneNumber}
                    />
                  </div>
                  <div
                    className="resault-validate"
                    style={
                      validatePhoneNumber
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    Bạn cần nhập số điện thoại
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-box">
                    <div className="input-name">Email</div>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Nhập email"
                      onChange={(e) => updateInputOrder(e, "inputEmail")}
                      value={inputEmail}
                    />
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-box">
                    <div className="input-name">Tỉnh / Thànnh phố</div>
                    <select
                      className="select-province"
                      onChange={(e) => updateInputOrder(e, "select-province")}
                      value={selectProvince}
                    >
                      <option value="">-- Chọn tỉnh / thành phố --</option>
                      <option value="ha-noi">Hà Nội</option>
                      <option value="tp-hcm">Tp. Hồ Chí Minh</option>
                      <option value="hai-duong">Hải Dương</option>
                      <option value="da-nang">Đà Nẵng</option>
                      <option value="hai-phong">Hải Phòng</option>
                      <option value="nghe-an">Nghệ An</option>
                      <option value="hue">Huế</option>
                      <option value="quang-binh">Quảng Bình</option>
                      <option value="quang-ninh">Quảng Ninh</option>
                    </select>
                  </div>
                  <div
                    className="resault-validate"
                    style={
                      validateProvince
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    Bạn cần chọn tỉnh / thành phố
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-box">
                    <div className="input-name">Địa chỉ cụ thể</div>
                    <input
                      type="text"
                      className="input-text"
                      placeholder="Địa chỉ cụ thể (số nhà, tên đường, phường (xã), thành phố (huyện))"
                      onChange={(e) => updateInputOrder(e, "inputAddress")}
                      value={inputAddress}
                    />
                  </div>
                  <div
                    className="resault-validate"
                    style={
                      validateAddress
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    Bạn cần nhập địa chỉ
                  </div>
                </div>

                <div className="input-container">
                  <div className="input-box">
                    <div className="input-name">Ghi chú</div>
                    <input
                      type="text"
                      className="input-text"
                      onChange={(e) => updateInputOrder(e, "inputNote")}
                      value={inputNote}
                    />
                  </div>
                </div>

                <h4>2. Hình thức thanh toán</h4>
                <div className="input-radio-container">
                  <div className="input-radio-box">
                    <input
                      type="radio"
                      name="phuong-thuc-thanh-toan"
                      id="radio-1"
                      defaultChecked
                      onChange={() => bankingRadioChecked("radio-1")}
                    />
                    <label className="radio-input-label" htmlFor="radio-1">
                      Tiền mặt
                    </label>
                  </div>

                  <div className="input-radio-box">
                    <input
                      type="radio"
                      name="phuong-thuc-thanh-toan"
                      id="radio-2"
                      onChange={() => bankingRadioChecked("radio-2")}
                    />
                    <label className="radio-input-label" htmlFor="radio-2">
                      Chuyển khoản
                    </label>
                  </div>
                </div>
                {bakingBox && (
                  <div id="banking-container">
                    <div
                      ref={techcombankLogo}
                      className="bank-logo"
                      onClick={() => activeBankLogo("techcombank")}
                    >
                      <img src="/img/techcombank-logo.png" alt="bank" />
                    </div>

                    <div
                      ref={viettinbankLogo}
                      className="bank-logo"
                      onClick={() => activeBankLogo("viettinbank")}
                    >
                      <img src="/img/viettinbank-logo.png" alt="bank" />
                    </div>
                  </div>
                )}

                <h4>3. Hình thức nhận hàng</h4>
                <div className="input-radio-container">
                  <div className="input-radio-box">
                    <input
                      type="radio"
                      name="phuong-thuc-van-chuyen"
                      id="radio-3"
                      defaultChecked
                    />
                    <label className="radio-input-label" htmlFor="radio-3">
                      Nhận tại cửa hàng
                    </label>
                  </div>

                  <div className="input-radio-box">
                    <input
                      type="radio"
                      name="phuong-thuc-van-chuyen"
                      id="radio-4"
                    />
                    <label className="radio-input-label" htmlFor="radio-4">
                      Nhận hàng tại nhà
                    </label>
                  </div>
                </div>

                <h4>4. Hình thức vận chuyển</h4>
                <div className="input-radio-container">
                  <div className="input-radio-box">
                    <input
                      type="radio"
                      name="hinh-thuc-van-chuyen"
                      id="radio-5"
                      defaultChecked
                    />
                    <label className="radio-input-label" htmlFor="radio-5">
                      Vận chuyển thông thường
                    </label>
                  </div>
                  <div className="input-radio-box">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="hinh-thuc-van-chuyen"
                      id="radio-6"
                    />
                    <label className="radio-input-label" htmlFor="radio-6">
                      Chuyển phát nhanh
                    </label>
                  </div>
                </div>
                <div id="form-order-btn">
                  <button id="cancel-purchase" onClick={cancelPurchase}>
                    Hủy đặt hàng
                  </button>
                  <button
                    id="confirm-purchase"
                    type="submit"
                    onClick={confirmPurchase}
                  >
                    Xác nhận đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CartStyled = styled(Cart)`
  #content {
    width: 100%;
    min-height: 400px;
    display: flex;
  }

  #cart-box {
    width: 67.83%;
    height: fit-content;
    border-radius: 10px;
    background-color: white;
    margin-right: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  }

  #cart-box input[type="checkbox"] {
    margin-right: 10px;
  }

  #cart-box-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: #d6d6d6 solid 1px;
  }

  #cart-box-header span {
    color: #222;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin-right: 12px;
  }

  #delete-all {
    border: rgba(38, 121, 255, 0.9) solid 1px;
    background-color: white;
    border-radius: 5px;
    font-size: 14px;
    padding: 4px 6px;
    color: rgba(38, 121, 255, 0.9);
  }

  #delete-all:hover {
    background-color: rgba(38, 121, 255, 0.9);
    color: white;
  }

  #total-cost {
    display: flex;
    align-items: center;
  }

  #total-cost span {
    color: rgba(29, 90, 187, 0.9);
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
  }
  #products-empty {
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0px 20px 0px;
  }
  #products-empty img {
    max-width: 25%;
  }
  #products-empty p {
    margin: 10px 0px !important;
  }
  #products-empty button {
    border: none;
    background-color: #3a4da0;
    padding: 10px;
    color: white;
    border-radius: 5px;
  }
  .cart-box-content {
    width: 100%;
    padding: 16px;
  }

  .checkbox-product-info {
    width: 65.34%;
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .product {
    width: 100%;
  }

  .main-product {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-info {
    max-width: 475px;
    display: flex;
  }

  .product-img {
    max-width: 78px;
    max-height: 78px;
    border: #d0d0d0 solid 1px;
    margin-right: 12px;
  }

  .product-name {
    font-size: 14px;
    line-height: 21px;
  }

  .product-count-box-price-delete {
    width: 33.2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-count-box {
    max-width: 85px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-radius: 5px;
    border: rgba(38, 121, 255, 0.9) solid 1px;
    overflow: hidden;
  }

  .product-count-box input {
    width: 100%;
    font-size: 18px;
    text-align: center;
    color: rgba(38, 121, 255, 0.9);
    border: none;
    padding: 5px 0px;
  }

  .product-count-box button {
    border: none;
    background-color: white;
    padding: 5px 0px;
    font-size: 16px;
  }

  .product-count-box button:hover {
    background-color: #e1e8ff;
  }

  .product-count-box button:active {
    color: #fb0000;
  }

  .price {
    font-weight: 600;
    color: #3a4da0;
    margin: 0px 8px;
  }

  .del-btn {
    border: none;
    background-color: white;
    color: #fb0000;
    padding: 0px;
  }

  .del-btn i {
    margin-right: 3px;
  }

  .del-btn:hover {
    color: #aa0000;
  }

  .gift-product {
    display: flex;
    align-items: center;
    margin: 8px 0px 12px 48px;
  }

  .gift-product div {
    font-size: 14px;
  }

  .gift-product-img {
    width: 30px;
    height: 30px;
    border: #d0d0d0 solid 1px;
    margin-right: 12px;
  }

  #voucher-and-payment {
    width: 30.5%;
  }

  #voucher {
    width: 100%;
    height: fit-content;
    background-color: white;
    padding: 16px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .voucher-and-payment-header {
    font-size: 20px;
    color: #222;
    margin-bottom: 12px;
    font-weight: 600;
  }

  #apply-voucher {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  #apply-voucher input {
    width: 65.87%;
    padding: 8px;
    background-color: #ebebeb;
    color: rgba(0, 0, 0, 0.6);
    border: transparent 2px solid;
    border-radius: 7px;
    outline: none;
  }

  #apply-voucher input:focus {
    border: rgba(118, 170, 255, 0.9) solid 2px;
  }

  #apply-voucher button {
    width: 31.74%;
    padding: 8px;
    border: none;
    border-radius: 7px;
    outline: none;
    background-color: #fb0000;
    color: white;
  }

  #apply-voucher button:disabled {
    background-color: #c4c4c4;
  }

  #apply-voucher button:disabled:hover {
    background-color: #c4c4c4;
  }

  #apply-voucher button:hover {
    background-color: #bd0000;
  }

  #result-apply-voucher {
    width: 100%;
    color: #fb0000;
  }
  #result-apply-voucher.hide {
    display: none;
  }
  #result-apply-voucher.apply-success {
    color: #4dd664;
  }
  #alert-result {
    font-weight: 600;
    margin-top: 12px !important;
  }

  #result-voucher {
    font-weight: 600;
    margin-top: 8px !important;
    color: #222;
  }

  #payment {
    width: 100%;
    background-color: white;
    padding: 16px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-top: 20px;
  }

  .payment-line {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222;
  }

  #total-bill {
    font-weight: 600;
  }
  #total-voucher {
    font-weight: 600;
    color: #eb2121;
  }
  #total-payment {
    font-weight: 600;
    font-size: 20px;
    color: rgba(29, 90, 187, 0.9);
  }

  .total-voucher.hide {
    display: none;
  }

  #text-vat {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: rgba(0, 0, 0, 0.5);
  }

  #purchase {
    width: 100%;
    padding: 12px;
    background-color: #1f66d8;
    border-radius: 7px;
    margin-top: 12px;
    border: none;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
  }

  #purchase:hover {
    background-color: rgb(49, 49, 187);
  }

  #payment-methods {
    margin-top: 20px;
  }

  #payment-methods img {
    height: 25px;
  }

  #payment-methods > div {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #payment-methods span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* modal delete */

  #modal-container-delete {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    z-index: 1000;
  }

  .modal-box-delete {
    width: 400px;
    height: fit-content;
    border-radius: 7px;
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h4 {
    margin: 0px;
  }

  .modal-body {
    padding: 15px;
    line-height: 1.5;
    text-align: center;
  }

  .modal-footer {
    padding: 0px;
    border: none;
  }

  .btn {
    width: 75px;
    border: none;
    border-radius: 5px;
    padding: 10px 12px;
    font-size: 14px;
    cursor: pointer;
  }

  .close-btn {
    background-color: #c4c4c4;
    margin-right: 7px;
  }

  .close-btn:hover {
    background-color: #9e9e9e;
  }

  .delete-confirm-btn {
    background-color: royalblue;
    color: white;
  }

  .delete-confirm-btn:hover {
    background-color: rgb(53, 84, 177);
    color: white;
  }

  #modal-container-delete.show {
    visibility: visible;
  }

  /* modal order */

  #modal-container-order {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    z-index: 1000;
    overflow-y: auto;
    padding: 50px;
  }
  .modal-box-order {
    width: 600px;
    height: fit-content;
    border-radius: 7px;
    background-color: white;
    padding: 20px;
    transform: translate(0px, -50px);
  }

  h3 {
    margin: 0px 0px 20px 0px;
    text-align: center;
  }
  h4 {
    margin: 0px 0px 10px 0px !important;
  }
  .input-container {
    width: 100%;
    margin-bottom: 15px;
  }
  .input-box {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .input-name {
    width: 25%;
  }
  .input-text {
    width: 75%;
    height: 35px;
    padding: 10px;
    border-radius: 5px;
    border: #707070 1px solid;
    outline: none;
  }

  .input-text:focus {
    border: 1px solid #56b4ef;
    box-shadow: 0px 0px 1px 3px #c8def0;
  }

  .select-province {
    width: 75%;
    height: 35px;
    border-radius: 5px;
    padding: 0px 10px;
    border: #707070 1px solid;
    outline: none;
  }

  #modal-container-order.show {
    visibility: visible;
  }

  .resault-validate {
    margin: 4px 0px 0px 25%;
    color: #ec5252;
  }

  .input-radio-container {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .input-radio-box {
    width: 50%;
  }

  .radio-input-label {
    margin-left: 4px;
  }

  #banking-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 25px;
  }

  .bank-logo {
    width: 160px;
    border: #c4c4c4 1px solid;
    padding: 0px 10px;
    cursor: pointer;
  }

  #form-order-btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  #cancel-purchase {
    padding: 10px 8px;
    border-radius: 5px;
    background-color: #d6d6d6;
    border: none;
    font-size: 16px;
    margin: 0px 10px;
  }

  #confirm-purchase {
    padding: 10px 8px;
    border-radius: 5px;
    background-color: royalblue;
    border: none;
    font-size: 16px;
    color: white;
    margin: 0px 10px;
  }

  #cancel-purchase:hover {
    background-color: #b0b0b0;
  }

  #confirm-purchase:hover {
    background-color: #0040e3;
  }

  /* responsive cho màn hình từ 1025px - 1200px */

  @media (min-width: 1025px) and (max-width: 1200px) {
    #content {
      flex-direction: column;
    }
    #cart-box {
      width: 100%;
      margin: 0px;
    }
    .checkbox-product-info {
      max-width: 590px;
    }
    .product-info {
      max-width: 550px;
    }
    #voucher-and-payment {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    #voucher {
      width: 45%;
    }
    #payment {
      width: 53%;
      margin: 0px;
    }
  }

  /* responsive cho màn hình từ 768px - 1024px */

  @media (min-width: 768px) and (max-width: 1024px) {
    #content {
      flex-direction: column;
    }
    #cart-box {
      width: 100%;
      margin: 0px;
    }
    #cart-box-header {
      padding: 10px;
    }
    #cart-box-header span {
      font-size: 18px;
      line-height: 20px;
      font-weight: 600;
    }
    .cart-box-content {
      padding: 10px;
    }
    .product-img {
      max-width: 68px;
      max-height: 68px;
      margin-right: 8px;
    }
    .product-name {
      font-size: 13px;
      line-height: 19px;
    }
    .product-count-box {
      max-width: 75px;
    }
    .product-count-box input,
    .product-count-box button {
      padding: 3px 0px;
    }
    .price {
      font-size: 15px;
    }
    .gift-product {
      margin: 8px 0px 12px 38px;
    }
    #voucher-and-payment {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
    .voucher-and-payment-header {
      font-size: 18px;
    }
    #voucher {
      width: 45%;
      padding: 10px;
    }
    #apply-voucher input {
      width: 63%;
    }
    #apply-voucher button {
      width: 35%;
      padding: 8px 5px;
    }

    #payment {
      width: 53%;
      margin: 0px;
      padding: 10px;
    }
  }

  /* responsive cho màn hình từ 576px - 767px */

  @media (min-width: 576px) and (max-width: 767px) {
    #content {
      flex-direction: column;
    }
    #cart-box {
      width: 100%;
      margin: 0px;
    }
    #cart-box-header {
      padding: 10px;
    }
    #cart-box-header span {
      font-size: 18px;
      line-height: 20px;
      font-weight: 600;
    }
    .cart-box-content {
      padding: 10px;
    }
    .checkbox-product-info {
      width: 79%;
    }
    .product-info {
      max-width: 400px;
    }
    .product-name {
      font-size: 13px;
      line-height: 19px;
    }
    .product-count-box-price-delete {
      width: 21%;
      flex-direction: column;
      font-size: 14px;
    }
    .product-count-box {
      max-width: 75px;
    }
    .price {
      margin: 8px 0px;
      font-size: 15px;
    }
    .product-count-box input,
    .product-count-box button {
      padding: 3px 0px;
    }
    .gift-product {
      margin: 8px 0px 12px 48px;
    }
    .gift-product div {
      font-size: 13px;
    }
    #voucher-and-payment {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
    }
    .voucher-and-payment-header {
      font-size: 18px;
    }
    #voucher {
      width: 100%;
      padding: 10px;
    }
    #apply-voucher {
      font-size: 16px;
    }
    #apply-voucher input {
      width: 63%;
    }
    #apply-voucher button {
      width: 35%;
      padding: 8px 5px;
    }
    #payment {
      width: 100%;
      margin: 20px 0px 0px 0px;
      padding: 10px;
    }
    #modal-container-order {
      padding: 30px 8px;
    }
  }

  /* responsive cho màn hình từ 320px - 575px */

  @media (min-width: 320px) and (max-width: 575px) {
    #content {
      flex-direction: column;
    }
    #cart-box {
      width: 100%;
      margin: 0px;
    }
    #cart-box-header {
      padding: 10px;
      flex-direction: column;
      align-items: flex-start;
    }
    #total-cost {
      width: 100%;
      justify-content: space-between;
    }
    #total-cost span {
      font-size: 18px !important;
      line-height: 20px;
    }
    #cart-box input[type="checkbox"] {
      margin-right: 5px;
    }
    #delete-all {
      font-size: 12px;
      padding: 4px;
    }
    #cart-box-header span {
      font-size: 15px;
      line-height: 20px;
      font-weight: 600;
    }
    .cart-box-content {
      padding: 10px;
    }
    .checkbox-product-info {
      width: 79%;
      align-items: flex-start;
    }
    .checkbox-product-info input[type="checkbox"] {
      margin-top: 20px;
    }
    .product-info {
      max-width: 400px;
    }
    .product-name {
      font-size: 12px;
      line-height: 18px;
    }
    .product-img {
      max-width: 50px;
      max-height: 50px;
      margin-right: 6px;
    }
    .product-count-box-price-delete {
      width: 30%;
      flex-direction: column;
      justify-content: flex-start;
      font-size: 12px;
    }
    .product-count-box {
      max-width: 75px;
    }
    .price {
      margin: 8px 0px;
      font-size: 12px;
    }
    .product-count-box input,
    .product-count-box button {
      padding: 3px 0px;
    }
    .gift-product {
      margin: 8px 0px 12px 23px;
    }
    .gift-product-img {
      width: 25px;
      height: 25px;
      margin-right: 6px;
    }
    .gift-product div {
      font-size: 12px;
    }
    #voucher-and-payment {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
    }
    .voucher-and-payment-header {
      font-size: 15px;
    }
    #voucher {
      width: 100%;
      padding: 10px;
    }
    #apply-voucher {
      font-size: 13px;
    }
    #apply-voucher input {
      width: 63%;
    }
    #apply-voucher button {
      width: 35%;
      padding: 8px 5px;
    }
    #alert-result {
      font-size: 14px;
    }
    #payment {
      width: 100%;
      margin: 20px 0px 0px 0px;
      padding: 10px;
    }
    .payment-line {
      font-size: 14px;
      line-height: 20px;
    }
    #total-payment {
      font-size: 16px;
    }
    #text-vat {
      font-size: 14px;
    }
    #payment-methods {
      display: none;
    }
    .modal-box-delete {
      width: 290px;
      padding: 8px;
    }
    .modal-body {
      padding: 8px 4px;
      font-size: 15px;
    }
    .btn {
      width: 65px;
      padding: 7px 9px;
      font-size: 13px;
    }
    h4 {
      font-size: 18px;
    }
    #modal-container-order {
      padding: 30px 8px;
    }
  }

  /* an mui ten input number */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default CartStyled;
