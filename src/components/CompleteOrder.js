import styled from "styled-components";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import MenuFixedStyled from "./MenuFixed";

function CompleteOrder({
  className,
  menuFixedStatus,
  menuScrollBtn,
  sendRequestHideMenufixed,
}) {
  const history = useHistory();

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

  return (
    <div className={className}>
      <div id="container">
        <MenuFixedStyled menuFixedStatus={menuFixedStatus} />
        <div id="thank-box">
          <h4 style={{ color: "#40BF55" }}>Đặt hàng thành công!</h4>
          <h4>Cảm ơn quý khách hàng đã tin tưởng Enjoy Computer</h4>
          <img src="/img/thank-you.png" alt="thank you" />
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Quay về Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}

const CompleteOrderStyled = styled(CompleteOrder)`
  #thank-box {
    width: 100%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 30px;
  }

  h4 {
    text-align: center;
    color: #222;
    margin: 0px 0px 15px 0px;
    font-size: 25px;
  }

  button {
    padding: 10px;
    background-color: royalblue;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    margin-top: 15px;
  }
  button:hover {
    background-color: #0042eb;
  }
`;

export default CompleteOrderStyled;
