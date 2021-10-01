import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import HomePageStyled from "./components/HomePage";
import ProductsListStyled from "./components/ProductsList";
import ProductDetailStyled from "./components/ProductDetail";
import CartStyled from "./components/Cart";
import { activeRequestSearchFunction } from "./store/headerDesktopSlice";

function App() {
  const [menuFixedStatus, setMenuFixedStatus] = useState(false);
  const [menuScrollBtn, setMenuScrollBtn] = useState();
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [keywordsMatched, setKeywordsMatched] = useState([]);

  const requestSearchFunction = useSelector(
    (state) => state.headerDesktop.requestSearchFunction
  );

  const dispatch = useDispatch();

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

  const checkRequestFadeMenufixed = (request) => {
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
          let matchesLimit = matches.slice(0, 5);
          setKeywordsMatched(matchesLimit);
        });
    } else {
      setKeywordsMatched(hotSearch.current);
    }
    setInputSearchValue(event.target.value);
  };

  const searchFunction = (history) => {
    if (inputSearchValue !== "") {
      history.push("/products-list");
      dispatch(activeRequestSearchFunction());
    }
  };

  const searchFromSuggestion = (keywordSuggestion, history) => {
    if (keywordSuggestion !== "") {
      history.push("/products-list");
      setInputSearchValue(keywordSuggestion);
      dispatch(activeRequestSearchFunction());
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
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route exact path="/products-list">
          <ProductsListStyled
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
            inputSearchValue={inputSearchValue}
            requestSearchFunction={requestSearchFunction}
          />
        </Route>
        <Route exact path="/products-list/:slug/:id">
          <ProductDetailStyled
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route path="/cart">
          <CartStyled
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
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
