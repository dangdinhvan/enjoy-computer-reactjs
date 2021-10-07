import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "lodash";

import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import CompleteOrder from "./components/CompleteOrder";
import Login from "./components/Login";
import ContactFixed from "./components/ContactFixed";
import ModalPhoneCall from "./components/ModalPhoneCall";
import { activeRequestSearchFunction } from "./store/headerDesktopSlice";

function App() {
  const [menuFixedStatus, setMenuFixedStatus] = useState(false);
  const [menuScrollBtn, setMenuScrollBtn] = useState();
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [keywordsMatched, setKeywordsMatched] = useState([]);

  const requestSearchFunction = useSelector(
    (state) => state.headerDesktop.requestSearchFunction
  );
  const modalPhoneCallStatus = useSelector(
    (state) => state.headerDesktop.modalPhoneCallStatus
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

  const callApiSuggestSearch = useCallback(
    debounce((input) => {
      if (input !== "") {
        fetch(`https://enjoycomputer.herokuapp.com/keyword`)
          .then((response) => {
            return response.json();
          })
          .then((keywords) => {
            const regex = new RegExp(input, "gi");
            let matches = keywords.filter((keywords) => keywords.match(regex));
            let matchesLimit = matches.slice(0, 5);
            setKeywordsMatched(matchesLimit);
          });
      }
    }, 300),
    []
  );

  const updateInputSearchValue = (event) => {
    setInputSearchValue(event.target.value);
    callApiSuggestSearch(event.target.value);
    if (event.target.value === "") {
      setKeywordsMatched(hotSearch.current);
    }
  };

  const searchFunction = (history) => {
    if (inputSearchValue !== "") {
      history.push("/products-list");
      dispatch(activeRequestSearchFunction());
    }
  };

  const searchFromSuggestion = (keywordSuggestion, history) => {
    history.push("/products-list");
    setInputSearchValue(keywordSuggestion);
    dispatch(activeRequestSearchFunction());
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
          <HomePage
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route exact path="/products-list">
          <ProductsList
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
            inputSearchValue={inputSearchValue}
            requestSearchFunction={requestSearchFunction}
          />
        </Route>
        <Route exact path="/products-list/:slug/:id">
          <ProductDetail
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route path="/cart">
          <Cart
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route path="/complete-order">
          <CompleteOrder
            menuFixedStatus={menuFixedStatus}
            sendRequestHideMenufixed={checkRequestFadeMenufixed}
            menuScrollBtn={menuScrollBtn}
          />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

      <ModalPhoneCall modalPhoneCall={modalPhoneCallStatus} />
      <ContactFixed />

      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
