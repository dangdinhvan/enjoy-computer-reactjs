import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import MenuFixedStyled from "./MenuFixed";

const limitOnePage = 8;

function ProductsList({
  className,
  menuFixedStatus,
  sendRequestHideMenufixed,
  menuScrollBtn,
  inputSearchValue,
}) {
  const [productsList, setProductsList] = useState([]);
  const [totalProductsList, setTotalProductsList] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [onLoading, setOnLoading] = useState(true);
  const [prevPageBtnDisable, setPrevPageBtnDisable] = useState(true);
  const [nextPageBtnDisable, setNextPageBtnDisable] = useState(false);
  const [hotSellSort, setHotSellSort] = useState(false);
  const [newProductsSort, setNewProductsSort] = useState(false);
  const [priceAscendingSort, setPriceAscendingSort] = useState(false);
  const [priceDecreaseSort, setPriceDecreaseSort] = useState(false);
  const [bestSaleSort, setBestSlaeSort] = useState(false);
  const [installmentSort, setInstallmentSort] = useState(false);

  const productsBox = useRef(null);
  const pageNumberToCalcul = useRef(1);
  const filterQueryParam = useRef("");
  const sortQueryParam = useRef("");

  const RESOURCE = `https://enjoycomputer.herokuapp.com/products?q=${inputSearchValue}&_limit=${limitOnePage}${sortQueryParam.current}${filterQueryParam.current}`;

  // ẩn menu fixed
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

  // render products list lan dau
  useEffect(() => {
    setOnLoading(true);
    window.scrollTo(0, 0);
    fetch(RESOURCE + `&_page=1`)
      .then((response) => {
        for (let pair of response.headers.entries()) {
          if (pair[0] === "x-total-count") {
            setTotalPage(Math.ceil(pair[1] / limitOnePage));
            setTotalProductsList(pair[1]);
          }
        }
        return response.json();
      })
      .then((products) => {
        setOnLoading(false);
        setProductsList(products);
        if (products.length !== 0) {
          document.getElementById("paginate-btn-1").style.backgroundColor =
            "rgba(38, 121, 255, 0.9)";
          document.getElementById("paginate-btn-1").style.color = "white";
          document.getElementById("paginate-btn-1").disabled = true;
        }
      });
  }, []);

  // an vao so trang hien trang tuong ung
  const pagination = (pageNumber, totalPage) => {
    productsBox.current.scrollIntoView({ behavior: "smooth" });
    setOnLoading(true);

    fetch(RESOURCE + `&_page=${pageNumber}`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setOnLoading(false);
        setProductsList(products);
        pageNumberToCalcul.current = pageNumber;
      });
    document.getElementById(
      `paginate-btn-${pageNumber}`
    ).style.backgroundColor = "rgba(38, 121, 255, 0.9)";
    document.getElementById(`paginate-btn-${pageNumber}`).style.color = "white";
    document.getElementById(`paginate-btn-${pageNumber}`).disabled = true;
    for (let i = 1; i <= totalPage; i++) {
      if (i !== pageNumber) {
        document.getElementById(`paginate-btn-${i}`).style.backgroundColor =
          "white";
        document.getElementById(`paginate-btn-${i}`).style.color =
          "rgba(38, 121, 255, 0.9)";
        document.getElementById(`paginate-btn-${i}`).disabled = false;
      }
    }
  };

  // check tinh trang so trang hien tai
  const checkPageNumberCurrent = () => {
    if (totalPage === 1) {
      setPrevPageBtnDisable(true);
      setNextPageBtnDisable(true);
    } else {
      if (pageNumberToCalcul.current <= 1) {
        pageNumberToCalcul.current = 1;
        setPrevPageBtnDisable(true);
        setNextPageBtnDisable(false);
      } else if (pageNumberToCalcul.current >= totalPage) {
        pageNumberToCalcul.current = totalPage;
        setPrevPageBtnDisable(false);
        setNextPageBtnDisable(true);
      } else {
        setPrevPageBtnDisable(false);
        setNextPageBtnDisable(false);
      }
    }
  };

  useEffect(() => {
    checkPageNumberCurrent();
    for (let i = 1; i <= totalPage; i++) {
      if (i !== pageNumberToCalcul.current) {
        document.getElementById(`paginate-btn-${i}`).style.backgroundColor =
          "white";
        document.getElementById(`paginate-btn-${i}`).style.color =
          "rgba(38, 121, 255, 0.9)";
        document.getElementById(`paginate-btn-${i}`).disabled = false;
      }
    }
  }, [productsList]);

  // chuc nang nut chuyen trang
  const prevPage = () => {
    setOnLoading(true);
    pageNumberToCalcul.current -= 1;
    fetch(RESOURCE + `&_page=${pageNumberToCalcul.current}`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setOnLoading(false);
        setProductsList(products);
        productsBox.current.scrollIntoView({ behavior: "smooth" });
      });
    document.getElementById(
      `paginate-btn-${pageNumberToCalcul.current}`
    ).style.backgroundColor = "rgba(38, 121, 255, 0.9)";
    document.getElementById(
      `paginate-btn-${pageNumberToCalcul.current}`
    ).style.color = "white";
    document.getElementById(
      `paginate-btn-${pageNumberToCalcul.current}`
    ).disabled = true;
    for (let i = 1; i <= totalPage; i++) {
      if (i !== pageNumberToCalcul.current) {
        document.getElementById(`paginate-btn-${i}`).style.backgroundColor =
          "white";
        document.getElementById(`paginate-btn-${i}`).style.color =
          "rgba(38, 121, 255, 0.9)";
        document.getElementById(`paginate-btn-${i}`).disabled = false;
      }
    }
  };

  const nextPage = () => {
    setOnLoading(true);
    pageNumberToCalcul.current += 1;
    fetch(RESOURCE + `&_page=${pageNumberToCalcul.current}`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setOnLoading(false);
        setProductsList(products);
        productsBox.current.scrollIntoView({ behavior: "smooth" });
      });
    document.getElementById(
      `paginate-btn-${pageNumberToCalcul.current}`
    ).style.backgroundColor = "rgba(38, 121, 255, 0.9)";
    document.getElementById(
      `paginate-btn-${pageNumberToCalcul.current}`
    ).style.color = "white";
    document.getElementById(
      `paginate-btn-${pageNumberToCalcul.current}`
    ).disabled = true;
    for (let i = 1; i <= totalPage; i++) {
      if (i !== pageNumberToCalcul.current) {
        document.getElementById(`paginate-btn-${i}`).style.backgroundColor =
          "white";
        document.getElementById(`paginate-btn-${i}`).style.color =
          "rgba(38, 121, 255, 0.9)";
        document.getElementById(`paginate-btn-${i}`).disabled = false;
      }
    }
  };

  // chuc nang sort
  const activeSortBtn = (parameter) => {
    if (parameter === "ban-chay") {
      let hotSellSortTemp = !hotSellSort;
      if (hotSellSortTemp === true) {
        sortQueryParam.current = "&_sort=id&_order=desc";
      } else {
        sortQueryParam.current = "&_sort=id&_order=asc";
      }
      setHotSellSort(hotSellSortTemp);
      setNewProductsSort(false);
      setPriceAscendingSort(false);
      setPriceDecreaseSort(false);
      setBestSlaeSort(false);
      setInstallmentSort(false);
    } else if (parameter === "hang-moi-ve") {
      let newProductSortTemp = !newProductsSort;
      if (newProductSortTemp === true) {
        sortQueryParam.current = "&_sort=id&_order=desc";
      } else {
        sortQueryParam.current = "&_sort=id&_order=asc";
      }
      setHotSellSort(false);
      setNewProductsSort(newProductSortTemp);
      setPriceAscendingSort(false);
      setPriceDecreaseSort(false);
      setBestSlaeSort(false);
      setInstallmentSort(false);
    } else if (parameter === "gia-tang-dan") {
      let priceAscendingSortTemp = !priceAscendingSort;
      if (priceAscendingSortTemp === true) {
        sortQueryParam.current = "&_sort=price&_order=asc";
      } else {
        sortQueryParam.current = "&_sort=id&_order=asc";
      }
      setHotSellSort(false);
      setNewProductsSort(false);
      setPriceAscendingSort(priceAscendingSortTemp);
      setPriceDecreaseSort(false);
      setBestSlaeSort(false);
      setInstallmentSort(false);
    } else if (parameter === "gia-giam-dan") {
      let priceDecreaseSortTemp = !priceDecreaseSort;
      if (priceDecreaseSortTemp === true) {
        sortQueryParam.current = "&_sort=price&_order=desc";
      } else {
        sortQueryParam.current = "&_sort=id&_order=asc";
      }
      setHotSellSort(false);
      setNewProductsSort(false);
      setPriceAscendingSort(false);
      setPriceDecreaseSort(priceDecreaseSortTemp);
      setBestSlaeSort(false);
      setInstallmentSort(false);
    } else if (parameter === "khuyen-mai-tot") {
      let bestSaleSortTemp = !bestSaleSort;
      if (bestSaleSortTemp === true) {
        sortQueryParam.current = "&_sort=id&_order=desc";
      } else {
        sortQueryParam.current = "&_sort=id&_order=asc";
      }
      setHotSellSort(false);
      setNewProductsSort(false);
      setPriceAscendingSort(false);
      setPriceDecreaseSort(false);
      setBestSlaeSort(bestSaleSortTemp);
      setInstallmentSort(false);
    } else if (parameter === "tra-gop-0") {
      let installmentSortTemp = !installmentSort;
      if (installmentSortTemp === true) {
        sortQueryParam.current = "&_sort=id&_order=desc";
      } else {
        sortQueryParam.current = "&_sort=id&_order=asc";
      }
      setHotSellSort(false);
      setNewProductsSort(false);
      setPriceAscendingSort(false);
      setPriceDecreaseSort(false);
      setBestSlaeSort(false);
      setInstallmentSort(installmentSortTemp);
    }
  };

  useEffect(() => {
    setOnLoading(true);
    fetch(RESOURCE + `&_page=1`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        setOnLoading(false);
        setProductsList(products);
        if (products.length !== 0) {
          pageNumberToCalcul.current = 1;
          document.getElementById("paginate-btn-1").style.backgroundColor =
            "rgba(38, 121, 255, 0.9)";
          document.getElementById("paginate-btn-1").style.color = "white";
          document.getElementById("paginate-btn-1").disabled = true;
        }
      });
  }, [
    hotSellSort,
    newProductsSort,
    priceAscendingSort,
    priceDecreaseSort,
    bestSaleSort,
    installmentSort,
  ]);

  // chuc nang tim kiem
  useEffect(() => {
    if (inputSearchValue !== "") {
      setHotSellSort(false);
      setNewProductsSort(false);
      setPriceAscendingSort(false);
      setPriceDecreaseSort(false);
      setBestSlaeSort(false);
      setInstallmentSort(false);
      sortQueryParam.current = "&_sort=id&_order=asc";
      setOnLoading(true);

      fetch(RESOURCE + `&_page=1`)
        .then((response) => {
          for (let pair of response.headers.entries()) {
            if (pair[0] === "x-total-count") {
              setTotalPage(Math.ceil(pair[1] / limitOnePage));
              setTotalProductsList(pair[1]);
            }
          }
          return response.json();
        })
        .then((products) => {
          setOnLoading(false);
          setProductsList(products);
          if (products.length !== 0) {
            console.log("totalPage in loop", totalPage);
            pageNumberToCalcul.current = 1;
            document.getElementById("paginate-btn-1").style.backgroundColor =
              "rgba(38, 121, 255, 0.9)";
            document.getElementById("paginate-btn-1").style.color = "white";
            document.getElementById("paginate-btn-1").disabled = true;
          }
        });
    }
  }, [inputSearchValue]);

  console.log("totalPage in global", totalPage);

  // chuc nang filter
  const filter = (e, queryParam) => {
    setOnLoading(true);
    if (e.target.checked === true) {
      filterQueryParam.current += queryParam;
    } else {
      filterQueryParam.current = filterQueryParam.current
        .split(queryParam)
        .join("");
    }
  };

  useEffect(() => {
    fetch(RESOURCE + `&_page=1`)
      .then((response) => {
        for (let pair of response.headers.entries()) {
          if (pair[0] === "x-total-count") {
            setTotalPage(Math.ceil(pair[1] / limitOnePage));
            setTotalProductsList(pair[1]);
          }
        }
        return response.json();
      })
      .then((products) => {
        setOnLoading(false);
        setProductsList(products);
        if (products.length !== 0) {
          pageNumberToCalcul.current = 1;
          document.getElementById("paginate-btn-1").style.backgroundColor =
            "rgba(38, 121, 255, 0.9)";
          document.getElementById("paginate-btn-1").style.color = "white";
          document.getElementById("paginate-btn-1").disabled = true;
        }
      });
  }, [filterQueryParam.current]);

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
          <Link to="/products-list">
            <span>Laptop</span>
          </Link>
        </div>
        <div id="laptop-box">
          {/* filter box */}
          <div id="products-filter">
            <div className="hang-san-xuat">
              <p>Hãng sản xuất</p>
              <div id="hang-san-xuat-checkbox">
                <div id="hang-san-xuat-checkbox-left">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      className="all"
                      onChange={(e) => filter(e, "all")}
                      defaultChecked={true}
                    />
                    <label htmlFor="all">Tất cả</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=ASUS")}
                    />
                    <label htmlFor="asus">Asus</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=MSI")}
                    />
                    <label htmlFor="msi">MSI</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=GIGABYTE")}
                    />
                    <label htmlFor="gigabyte">Gigabyte</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=DELL")}
                    />
                    <label htmlFor="asus">Dell</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=HP")}
                    />
                    <label htmlFor="asus">HP</label>
                  </div>
                </div>
                <div id="hang-san-xuat-checkbox-right">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=APPLE")}
                    />
                    <label htmlFor="apple">Apple (Macbook)</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=MICROSOFT")}
                    />
                    <label htmlFor="asus">Surface (Microsoft)</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=LENOVO")}
                    />
                    <label htmlFor="asus">Lenovo</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=LG")}
                    />
                    <label htmlFor="asus">LG</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => filter(e, "&trademark=ACER")}
                    />
                    <label htmlFor="asus">Acer</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="other-filter">
              <p>Mức giá</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" className="all" defaultChecked={true} />
                <label htmlFor="all">Tất cả</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input
                  type="checkbox"
                  onChange={(e) => filter(e, "&price_lte=9999999")}
                />
                <label htmlFor="over-25tr">Dưới 10 triệu</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    filter(e, "&price_gte=10000000&price_lte=15000000")
                  }
                />
                <label htmlFor="over-25tr">Từ 10 - 15 triệu</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    filter(e, "&price_gte=15000001&price_lte=20000000")
                  }
                />
                <label htmlFor="over-25tr">Từ 15 - 20 triệu</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    filter(e, "&price_gte=20000001&price_lte=25000000")
                  }
                />
                <label htmlFor="over-25tr">Từ 20 - 25 triệu</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input
                  type="checkbox"
                  onChange={(e) => filter(e, "&price_gte=25000001")}
                />
                <label htmlFor="over-25tr">Trên 25 triệu</label>
              </div>
            </div>
            <div className="other-filter">
              <p>Màn hình</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" className="all" defaultChecked={true} />
                <label htmlFor="all">Tất cả</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Dưới 13 inch</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Từ 13 - 15 inch</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Trên 15 inch</label>
              </div>
            </div>
            <div className="other-filter">
              <p>CPU</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" className="all" defaultChecked={true} />
                <label htmlFor="all">Tất cả</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Intel Core i3</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Intel Core i5</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Intel Core i7</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Intel Core i9</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">AMD Ryzen 3</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">AMD Ryzen 5</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">AMD Ryzen 7</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">AMD Ryzen 9</label>
              </div>
            </div>
            <div className="other-filter">
              <p>RAM</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" className="all" defaultChecked={true} />
                <label htmlFor="all">Tất cả</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">4GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">8GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">16GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">32GB</label>
              </div>
            </div>
            <div className="other-filter">
              <p>Ổ cứng</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" className="all" defaultChecked={true} />
                <label htmlFor="all">Tất cả</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 128GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 128GB + HDD</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 256GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 256GB + HDD</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 512GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 512GB + HDD</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">SSD 1TB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">HDD 500GB</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">HDD 1TB</label>
              </div>
            </div>
            <div className="other-filter" style={{ border: "none" }}>
              <p>Card đồ họa</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" className="all" defaultChecked={true} />
                <label htmlFor="all">Tất cả</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Nvidia geforce series</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Amd radeon series</label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 4,
                }}
              >
                <input type="checkbox" id="over-25tr" />
                <label htmlFor="over-25tr">Card onboard</label>
              </div>
            </div>
          </div>
          {/* products box */}
          <div id="laptop-content">
            <div id="card-header">
              <strong style={{ marginRight: 4, fontSize: 20 }}>Laptop</strong>
              <span style={{ fontSize: 18 }}>
                ({totalProductsList + " sản phẩm"})
              </span>
            </div>
            <div id="laptop-theo-nhu-cau-box">
              <div id="laptop-theo-nhu-cau-header">
                <strong>Laptop theo nhu cầu</strong>
              </div>
              <div id="laptop-theo-nhu-cau-items">
                <a href="./latop-filted.html" id="laptop-theo-nhu-cau-item">
                  <img src="img/pc-gaming.jpg" alt="gaming" />
                  <p>Gaming</p>
                </a>
                <a href="./latop-filted.html" id="laptop-theo-nhu-cau-item">
                  <img src="img/pc-do-hoa-kien-truc.jpg" alt="gaming" />
                  <p>Đồ họa, kiến trúc</p>
                </a>
                <a href="./latop-filted.html" id="laptop-theo-nhu-cau-item">
                  <img src="img/laptop-mong-nhe.jpg" alt="gaming" />
                  <p>Mỏng nhẹ, thời trang</p>
                </a>
                <a href="./latop-filted.html" id="laptop-theo-nhu-cau-item">
                  <img src="img/laptop-sv.jpg" alt="gaming" />
                  <p>Sinh viên</p>
                </a>
                <a href="./latop-filted.html" id="laptop-theo-nhu-cau-item">
                  <img src="img/laptop-doanh-nhan.jpg" alt="gaming" />
                  <p>Doanh nhân, văn phòng</p>
                </a>
              </div>
            </div>
            {/* Filter for tablet mobile */}
            <div id="filter-mobile">
              <div id="filter-mobile-header">
                <i className="fas fa-filter" style={{ marginRight: 4 }} />
                <span>Bộ lọc</span>
                <span>
                  <i
                    className="fas fa-caret-down"
                    style={{ marginLeft: 6, fontSize: 16 }}
                  />
                </span>
              </div>
              <div id="filter-mobile-content">
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>Hãng sản xuất</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>ASUS</div>
                    <div>MSI</div>
                    <div>Gigabyte</div>
                    <div>Dell</div>
                    <div>HP</div>
                    <div>Acer</div>
                    <div>Lenovo</div>
                    <div>Apple</div>
                  </div>
                </div>
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>Mức giá</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>Dưới 10 triệu</div>
                    <div>Từ 10 triệu - 15 triệu</div>
                    <div>Từ 15 triệu - 20 triệu</div>
                    <div>Từ 15 triệu - 20 triệu</div>
                    <div>Từ 20 triệu - 25 triệu</div>
                    <div>Trên 25 triệu</div>
                  </div>
                </div>
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>Màn hình</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>Dưới 13 inch</div>
                    <div>Từ 13 - 15 inch</div>
                    <div>Trên 15 inch</div>
                  </div>
                </div>
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>CPU</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>Intel Core i3</div>
                    <div>Intel Core i5</div>
                    <div>Intel Core i7</div>
                    <div>Intel Core i9</div>
                    <div>AMD Ryzen 3</div>
                    <div>AMD Ryzen 5</div>
                    <div>AMD Ryzen 7</div>
                    <div>AMD Ryzen 9</div>
                  </div>
                </div>
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>RAM</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>4GB</div>
                    <div>8GB</div>
                    <div>16GB</div>
                    <div>32GB</div>
                  </div>
                </div>
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>Ổ cứng</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>SSD 128GB</div>
                    <div>SSD 128GB + HDD</div>
                    <div>SSD 256GB</div>
                    <div>SSD 256GB + HDD</div>
                    <div>SSD 512GB</div>
                    <div>SSD 512GB + HDD</div>
                    <div>SSD 1TB</div>
                    <div>HDD 500GB</div>
                    <div>HDD 1TB</div>
                  </div>
                </div>
                <div className="filter-mobile-item">
                  <div className="filter-mobile-item-title">
                    <span>Card đồ họa</span>
                    <span>
                      <i
                        className="fas fa-plus"
                        style={{ marginLeft: 6, fontSize: 14 }}
                      />
                    </span>
                  </div>
                  <div className="filter-mobile-item-content">
                    <div className="active-filter-mobile">Tất cả</div>
                    <div>Nvidia geforce series</div>
                    <div>Amd radeon series</div>
                    <div>Card onboard</div>
                  </div>
                </div>
              </div>
            </div>
            {/* product box */}
            <div id="products-box" ref={productsBox}>
              <div id="products-box-header">
                <span style={{ marginRight: 6 }}>Sắp xếp theo</span>
                <div>
                  <button
                    className={`sort-item ${hotSellSort ? "active" : ""}`}
                    onClick={() => activeSortBtn("ban-chay")}
                  >
                    Bán chạy nhất
                  </button>
                  <button
                    className={`sort-item ${newProductsSort ? "active" : ""}`}
                    onClick={() => activeSortBtn("hang-moi-ve")}
                  >
                    Hàng mới về
                  </button>
                  <button
                    className={`sort-item ${
                      priceAscendingSort ? "active" : ""
                    }`}
                    onClick={() => activeSortBtn("gia-tang-dan")}
                  >
                    Giá tăng dần
                  </button>
                  <button
                    className={`sort-item ${priceDecreaseSort ? "active" : ""}`}
                    onClick={() => activeSortBtn("gia-giam-dan")}
                  >
                    Giá giảm dần
                  </button>
                  <button
                    className={`sort-item ${bestSaleSort ? "active" : ""}`}
                    onClick={() => activeSortBtn("khuyen-mai-tot")}
                  >
                    Khuyến mãi tốt nhất
                  </button>
                  <button
                    className={`sort-item ${installmentSort ? "active" : ""}`}
                    onClick={() => activeSortBtn("tra-gop-0")}
                  >
                    Trả góp 0%
                  </button>
                </div>
              </div>
              {/* render product */}
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
              ) : productsList.length === 0 ? (
                <div className="loading-box">
                  <img src="/img/no-products-found.png" />
                  <div className="loading-text">
                    Không tìm thấy sản phẩm nào
                  </div>
                </div>
              ) : (
                <div className="products">
                  {productsList.length % 4 === 0
                    ? productsList.map((product, index) =>
                        index / 4 >= productsList.length / 4 - 1 ? (
                          <Link
                            to={`/products-list/${product.name
                              .split(" (")[0]
                              .split(" ")
                              .join("-")}/${product.id}`}
                            key={product.id}
                          >
                            <div className="product" style={{ border: "none" }}>
                              <img src={product.thumbnails[0]} alt="" />
                              <div className="product-card">
                                <div className="product-card-name">
                                  {product.name}
                                </div>
                                <p className="product-card-price">
                                  {product.price.toLocaleString("vi-VN") + " đ"}
                                </p>
                                <div className="product-card-old-price">
                                  {typeof product.oldPrice === "number" ? (
                                    <>
                                      <p className="old-price">
                                        {product.oldPrice.toLocaleString(
                                          "vi-VN"
                                        ) + " đ"}
                                      </p>
                                      <p className="discount-percent">
                                        {"-" +
                                          (
                                            ((product.oldPrice -
                                              product.price) /
                                              product.oldPrice) *
                                            100
                                          ).toFixed(1) +
                                          "%"}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="old-price"></p>
                                      <p className="discount-percent"></p>
                                    </>
                                  )}
                                </div>
                                <div className="product-card-gift">
                                  {product.giftImg !== "" ? (
                                    <>
                                      <span>Quà tặng</span>
                                      <div className="product-card-gift-img">
                                        <img src={product.giftImg} alt="" />
                                        <span>{product.giftName}</span>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            to={`/products-list/${product.name
                              .split(" (")[0]
                              .split(" ")
                              .join("-")}/${product.id}`}
                            key={product.id}
                          >
                            <div className="product">
                              <img src={product.thumbnails[0]} alt="" />
                              <div className="product-card">
                                <div className="product-card-name">
                                  {product.name}
                                </div>
                                <p className="product-card-price">
                                  {product.price.toLocaleString("vi-VN") + " đ"}
                                </p>
                                <div className="product-card-old-price">
                                  {typeof product.oldPrice === "number" ? (
                                    <>
                                      <p className="old-price">
                                        {product.oldPrice.toLocaleString(
                                          "vi-VN"
                                        ) + " đ"}
                                      </p>
                                      <p className="discount-percent">
                                        {"-" +
                                          (
                                            ((product.oldPrice -
                                              product.price) /
                                              product.oldPrice) *
                                            100
                                          ).toFixed(1) +
                                          "%"}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="old-price"></p>
                                      <p className="discount-percent"></p>
                                    </>
                                  )}
                                </div>
                                <div className="product-card-gift">
                                  {product.giftImg !== "" ? (
                                    <>
                                      <span>Quà tặng</span>
                                      <div className="product-card-gift-img">
                                        <img src={product.giftImg} alt="" />
                                        <span>{product.giftName}</span>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                      )
                    : productsList.map((product, index) =>
                        index / 4 >= Math.floor(productsList.length / 4) ? (
                          <Link
                            to={`/products-list/${product.name
                              .split(" (")[0]
                              .split(" ")
                              .join("-")}/${product.id}`}
                            key={product.id}
                          >
                            <div className="product" style={{ border: "none" }}>
                              <img
                                src={product.thumbnails[0]}
                                alt="product-img"
                              />
                              <div className="product-card">
                                <div className="product-card-name">
                                  {product.name}
                                </div>
                                <p className="product-card-price">
                                  {product.price.toLocaleString("vi-VN") + " đ"}
                                </p>
                                <div className="product-card-old-price">
                                  {typeof product.oldPrice === "number" ? (
                                    <>
                                      <p className="old-price">
                                        {product.oldPrice.toLocaleString(
                                          "vi-VN"
                                        ) + " đ"}
                                      </p>
                                      <p className="discount-percent">
                                        {"-" +
                                          (
                                            ((product.oldPrice -
                                              product.price) /
                                              product.oldPrice) *
                                            100
                                          ).toFixed(1) +
                                          "%"}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="old-price"></p>
                                      <p className="discount-percent"></p>
                                    </>
                                  )}
                                </div>
                                <div className="product-card-gift">
                                  {product.giftImg !== "" ? (
                                    <>
                                      <span>Quà tặng</span>
                                      <div className="product-card-gift-img">
                                        <img src={product.giftImg} alt="" />
                                        <span>{product.giftName}</span>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <Link
                            to={`/products-list/${product.name
                              .split(" (")[0]
                              .split(" ")
                              .join("-")}/${product.id}`}
                            key={product.id}
                          >
                            <div className="product">
                              <img src={product.thumbnails[0]} alt="" />
                              <div className="product-card">
                                <div className="product-card-name">
                                  {product.name}
                                </div>
                                <p className="product-card-price">
                                  {product.price.toLocaleString("vi-VN") + " đ"}
                                </p>
                                <div className="product-card-old-price">
                                  {typeof product.oldPrice === "number" ? (
                                    <>
                                      <p className="old-price">
                                        {product.oldPrice.toLocaleString(
                                          "vi-VN"
                                        ) + " đ"}
                                      </p>
                                      <p className="discount-percent">
                                        {"-" +
                                          (
                                            ((product.oldPrice -
                                              product.price) /
                                              product.oldPrice) *
                                            100
                                          ).toFixed(1) +
                                          "%"}
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="old-price"></p>
                                      <p className="discount-percent"></p>
                                    </>
                                  )}
                                </div>
                                <div className="product-card-gift">
                                  {product.giftImg !== "" ? (
                                    <>
                                      <span>Quà tặng</span>
                                      <div className="product-card-gift-img">
                                        <img src={product.giftImg} alt="" />
                                        <span>{product.giftName}</span>
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Link>
                        )
                      )}
                </div>
              )}
            </div>
            {/* paginate */}
            {productsList.length !== 0 ? (
              <div id="paginate">
                <button
                  onClick={() => prevPage()}
                  disabled={prevPageBtnDisable}
                >
                  <i className="fas fa-angle-left" />
                </button>
                {[...Array(totalPage)].map((e, index) => (
                  <button
                    key={index}
                    onClick={() => pagination(index + 1, totalPage)}
                    id={`paginate-btn-${index + 1}`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => nextPage()}
                  disabled={nextPageBtnDisable}
                >
                  <i className="fas fa-angle-right" />
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductsListStyled = styled(ProductsList)`
  /* style cho filter box */

  #laptop-box {
    width: 100%;
    display: flex;
  }

  #products-filter {
    margin-right: 20px;
    width: 17%;
    height: fit-content;
    padding: 12px;
    background-color: white;
    border-radius: 5px;
  }

  .hang-san-xuat {
    padding-bottom: 8px;
    border-bottom: solid #c4c4c4 1px;
  }

  .hang-san-xuat p {
    font-weight: 600;
    margin-bottom: 4px !important;
  }

  #products-filter label {
    margin-left: 4px;
    font-size: 14px;
  }

  #hang-san-xuat-checkbox {
    width: 100%;
  }

  .other-filter {
    padding: 12px 0px 8px 0px;
    border-bottom: solid #c4c4c4 1px;
  }
  .other-filter input {
    margin: 0px;
  }
  .other-filter p {
    font-weight: 600;
    margin-bottom: 4px !important;
  }

  /* kết thúc style cho filter box */

  /* Style cho filter tablet mobile */

  #filter-mobile {
    width: 100%;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 5px;
    display: none;
  }

  #filter-mobile-header {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  #filter-mobile-content {
    width: 100%;
    padding: 10px;
  }

  .filter-mobile-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .filter-mobile-item-title {
    width: 20%;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
  }

  .filter-mobile-item-content {
    width: 79%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .filter-mobile-item-content div {
    min-width: 73px;
    padding: 6px 8px;
    border-radius: 5px;
    border: #c4c4c4 solid 1px;
    margin: 0px 4px 4px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .active-filter-mobile {
    background-color: rgba(38, 121, 255, 0.9);
    color: white;
  }

  /* style cho laptop-content */

  #laptop-content {
    width: 83%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #card-header {
    width: 100%;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  #laptop-theo-nhu-cau-box {
    width: 100%;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  #laptop-theo-nhu-cau-header {
    padding: 10px;
  }

  #laptop-theo-nhu-cau-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  #laptop-theo-nhu-cau-item {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-radius: 5px;
  }

  #laptop-theo-nhu-cau-item img {
    width: 164px;
    height: 164px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
  }

  #laptop-theo-nhu-cau-item p {
    height: 38px;
    font-size: 13px;
    color: #222;
    text-align: center;
  }

  #laptop-theo-nhu-cau-item:hover {
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.25);
  }

  #products-box {
    width: 100%;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  #products-box-header {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: #ebebeb solid 1px;
    font-size: 13px;
  }

  .sort-item {
    background-color: white;
    padding: 8px;
    border: #9e9e9e solid 1px;
    border-radius: 5px;
    margin: 0px 6px;
  }

  .active {
    background-color: #ff4b04;
    color: white;
    border: #ff4b04 1px solid;
  }

  /* style cho products */

  .products {
    margin-top: 1px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0px 12px;
    background-color: white;
  }

  .products > a {
    overflow: hidden;
  }

  .product {
    width: 100%;
    padding: 10px;
    background-color: white;
    border-bottom: #dedede 1px solid;
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
  }

  .product-card-gift span {
    color: #222;
    font-size: 13px;
  }

  .product-card-gift-img {
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 4px;
  }

  .product-card-gift-img img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
  /* style cho pagination */
  #paginate {
    display: flex;
    align-items: center;
  }

  #paginate button {
    width: 30px;
    height: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 5px;
    border: #c4c4c4 solid 1px;
    background-color: white;
    color: rgba(38, 121, 255, 0.9);
    margin: 0px 5px;
  }
  #paginate button:hover:enabled {
    background-color: #2b4eff !important;
    color: white !important;
    cursor: pointer;
  }

  #paginate .fas {
    color: #c4c4c4;
  }

  .paginate-active {
    background-color: rgba(38, 121, 255, 0.9) !important;
    color: white !important;
    border: none !important;
  }

  /* Kết thúc style cho laptop-content */

  /* responsive cho màn hình từ 1025px - 1200px */

  @media (min-width: 1025px) and (max-width: 1200px) {
    #hang-san-xuat-checkbox {
      display: block;
    }
    #laptop-theo-nhu-cau-item img {
      width: 135px;
      height: 135px;
    }
    #products-filter-box {
      max-width: 170px;
    }
    #laptop-content {
      width: 90%;
    }
    #hang-san-xuat-checkbox div {
      width: 100%;
    }
    .product-card-gift {
      justify-content: flex-start;
    }
    .product-card-gift span {
      font-size: 11px;
    }
    .product-card-gift-img {
      margin-left: 8px;
    }
    .product-card-gift-img img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
  }

  /* responsive cho màn hình từ 768px - 1024px */

  @media (min-width: 768px) and (max-width: 1024px) {
    #products-filter {
      display: none;
    }
    #laptop-content {
      width: 100%;
    }
    #filter-mobile {
      display: block;
    }
    #filter-mobile-content {
      display: none;
    }
    #filter-mobile-content.show {
      display: block;
    }
    .filter-mobile-item-content {
      display: none;
    }
    .filter-mobile-item-content.show {
      display: flex;
    }
    #laptop-theo-nhu-cau-item img {
      width: 120px;
      height: 120px;
    }
    .product-card-gift {
      justify-content: flex-start;
    }
    .product-card-gift span {
      font=size: 12px;
    }
    .product-card-gift-img {
      margin-left: 8px;
    }
    .product-card-gift-img img {
      width: 20px;
      height: 20px;
      margin-right: 2px;
    }
  }

  /* responsive cho màn hình từ 576px - 767px */

  @media (min-width: 576px) and (max-width: 767px) {
    #products-filter {
      display: none;
    }
    #laptop-theo-nhu-cau-item {
      padding: 10px;
    }
    #laptop-content {
      width: 100%;
    }
    #filter-mobile {
      display: block;
    }
    #filter-mobile-header {
      font-size: 14px;
    }
    .filter-mobile-item-title {
      font-size: 13px;
    }
    .filter-mobile-item-content div {
      font-size: 12px;
      padding: 5px;
    }
    #filter-mobile-content {
      display: none;
    }
    #filter-mobile-content.show {
      display: block;
    }
    .filter-mobile-item-content {
      display: none;
    }
    .filter-mobile-item-content.show {
      display: flex;
    }
    #laptop-theo-nhu-cau-item img {
      width: 88px;
      height: 88px;
    }
    #products-box-header {
      font-size: 12px;
    }
    .sort-item {
      padding: 5px;
      margin: 0px 4px;
    }
    .products {
      grid-template-columns: 1fr 1fr;
    }
    .product-card-gift span {
      font-size: 13px;
    }
  }

  /* responsive cho màn hình từ 320px - 575px */

  @media (min-width: 320px) and (max-width: 575px) {
    #products-filter {
      display: none;
    }
    #laptop-theo-nhu-cau-box {
      display: none;
    }
    #laptop-content {
      width: 100%;
    }
    #filter-mobile {
      display: block;
    }
    #filter-mobile-header {
      font-size: 12px;
    }
    .filter-mobile-item-title {
      width: 36%;
      font-size: 13px;
    }
    .filter-mobile-item-content div {
      font-size: 12px;
      padding: 5px;
    }
    #filter-mobile-content {
      display: none;
    }
    #filter-mobile-content.show {
      display: block;
    }
    .filter-mobile-item-content {
      display: none;
    }
    .filter-mobile-item-content.show {
      display: flex;
    }
    #products-box-header {
      font-size: 12px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .sort-item {
      padding: 6px;
      margin: 0px 4px 4px 0px;
    }
    .products {
      grid-template-columns: 1fr 1fr;
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
    #paginate a {
      margin: 0px 3px;
    }
  }
  // style loading box
  .loading-box {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    content: " ";
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
`;
export default ProductsListStyled;
