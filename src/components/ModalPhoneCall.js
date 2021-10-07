import { useDispatch } from "react-redux";
import { hideModalPhoneCall } from "../store/headerDesktopSlice";

export default function ModalPhoneCall({ modalPhoneCall }) {
  const dispatch = useDispatch();
  return (
    <div id="phone-container" className={modalPhoneCall}>
      <div id="phone-box" className={modalPhoneCall}>
        <div className="phone-box-title">
          <div id="close-btn-box">
            <button
              className="close-modal-icon icon-close"
              onClick={() => dispatch(hideModalPhoneCall())}
            >
              ×
            </button>
          </div>
          <div>
            <p>Liên hệ với chúng tôi theo hotline:</p>
          </div>
        </div>
        <div className="phone-box-body">
          <a className="phone-call-item">
            <div className="phone-call-item-img">
              <img src="/img/icon-call.png" alt="icon-call" />
            </div>
            <div>
              <p className="phone-call-item-title">
                Tư vấn mua hàng (8h - 21h)
              </p>
              <p className="phone-call-item-number">19007777</p>
            </div>
          </a>
          <a className="phone-call-item">
            <div className="phone-call-item-img">
              <img src="/img/icon-call.png" alt="icon-call" />
            </div>
            <div>
              <p className="phone-call-item-title">CSKH (8h - 21h)</p>
              <p className="phone-call-item-number">19006868</p>
            </div>
          </a>
        </div>
        <div id="phone-box-footer">
          <p>Hoặc vui lòng để lại số điện thoại, chúng tôi sẽ gọi lại sau.</p>
          <div id="call-back">
            <div>
              <i className="fas fa-phone-alt" />
              <input type="text" placeholder="Số điện thoại của bạn" />
            </div>
            <button>Yêu cầu gọi lại</button>
          </div>
        </div>
      </div>
    </div>
  );
}
