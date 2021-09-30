import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
  const [keywordsMatched, setKeywordsMatched] = useState([]);
  const [requestSeachFromSuggestion, setRequestSearchFromSuggestion] = useState("");

  const hotSearch = useRef([]);

  useEffect(() => {
    fetch("https://enjoycomputer.herokuapp.com/hotSearch")
      .then((response) => {
        return response.json();
      })
      .then((hotSearchJson) => {
        setKeywordsMatched(hotSearchJson);
        hotSearch.current = hotSearchJson;
      });
  }, []);

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
    if (event.target.value !== "") {
      fetch(`https://enjoycomputer.herokuapp.com/keyword`)
        .then((response) => {
          return response.json();
        })
        .then((keywords) => {
          const regex = new RegExp(`${event.target.value}`, "gi");
          let matches = keywords.filter((keywords) => keywords.match(regex));
          setKeywordsMatched(matches);
        });
    } else {
      setKeywordsMatched(hotSearch.current);
    }
    setInputSearchValue(event.target.value);
  };

  const searchFunction = (history) => {
    if (inputSearchValue !== "") {
      history.push("/products-list");
      setRequestSearch(inputSearchValue);
    }
  };

  const searchFromSuggestion = (keywordSuggestion, history) => {
    history.push("/products-list");
    setRequestSearch(keywordSuggestion);
  };

  return (
    <BrowserRouter>
      <header>
        <HeaderDesktop
          toggleMenuList={toggleMenuList}
          sendMenuScrollBtn={handleMenuScrollBtn}
          updateInputSearchValue={updateInputSearchValue}
          searchFunction={searchFunction}
          suggestionKeywords={keywordsMatched}
          inputSearchValueProp={inputSearchValue}
          searchFromSuggestion={searchFromSuggestion}
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
          <CartStyled menuFixedStatus={menuFixedStatus} />
        </Route>
      </Switch>

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
