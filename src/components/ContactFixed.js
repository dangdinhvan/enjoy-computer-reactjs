import { useDispatch } from "react-redux";
import { showModalPhoneCall } from "../store/headerDesktopSlice";

export default function ContactFixed() {
  const dispatch = useDispatch();
  return (
    <div id="contact-fixed">
      <div id="phone-location-facebook">
        <div id="phone-fixed" onClick={() => dispatch(showModalPhoneCall())}>
          <img src="/img/phone-fixed.png" alt="phone" />
        </div>
        <div id="location-fixed">
          <img src="/img/location-fixed.png" alt="location" />
        </div>
        <a id="facebook-fixed" href="https://www.facebook.com/dang.dinhvan.5/">
          <img src="/img/facebook-fixed.png" alt="facbook" />
        </a>
      </div>
      <div id="up-messenger">
        <a
          id="up-to-header"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <div>
            <i className="fas fa-angle-up" />
          </div>
        </a>
        <a id="messenger-fixed" href="https://m.me/dang.dinhvan.5/">
          <img src="/img/messenger-fixed.png" alt="messenger" />
        </a>
      </div>
    </div>
  );
}
