import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import HomePageStyled from "./components/HomePage";
import ProductsListStyled from "./components/ProductsList";
import ProductDetailStyled from "./components/ProductDetail";
import CartStyled from "./components/Cart";

function App() {
  const [menuFixedStatus, setMenuFixedStatus] = useState(false);
  const [menuScrollBtn, setMenuScrollBtn] = useState();
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [requestSeach, setRequestSearch] = useState("");

  const toggleMenuList = () => {
    setMenuFixedStatus(!menuFixedStatus);
  };

  const checkRequestFromHomePage = (request) => {
    if (request === "true") {
      setMenuFixedStatus(false);
    }
  };

  const handleMenuScrollBtn = (menuScrollBtn) => {
    setMenuScrollBtn(menuScrollBtn);
  };

  const updateInputSearchValue = (event) => {
    setInputSearchValue(event.target.value);
  };

  const searchFunction = (history) => {
    if (inputSearchValue !== "") {
      history.push("/products-list");
      setRequestSearch(inputSearchValue);
    }
  };

  return (
    <BrowserRouter>
      <header>
        <HeaderDesktop
          toggleMenuList={toggleMenuList}
          sendMenuScrollBtn={handleMenuScrollBtn}
          updateInputSearchValue={updateInputSearchValue}
          searchFunction={searchFunction}
        />
        <HeaderMobile />
      </header>

      <Switch>
        <Route exact path="/">
          <HomePageStyled
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFromHomePage}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route exact path="/products-list">
          <ProductsListStyled
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFromHomePage}
            menuScrollBtn={menuScrollBtn}
            inputSearchValue={requestSeach}
          />
        </Route>
        <Route exact path="/products-list/:slug/:id">
          <ProductDetailStyled
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFromHomePage}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route path="/cart">
          <CartStyled 
             menuFixedStatus={menuFixedStatus}
          />
        </Route>
      </Switch>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
