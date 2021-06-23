import { ReactNode } from "react";
import { useHistory } from "react-router";

import useTheme from "../../hooks/useTheme";

interface LayoutProps {
  children: ReactNode;
}

export default function index({ children }: LayoutProps) {
  const theme = useTheme();
  const history = useHistory();

  return (
    <div className="gamification-main-container">
      <div className="game-row">
        <div className="logo">
          <img
            src="/images/logo.png"
            alt=""
            onClick={() => history.push("kullanici-duzenleme.html")}
          />
        </div>
        <div className="dark-theme" onClick={() => theme.setDark(true)}>
          <img src="/images/dark-gem.png" width="30" height="31" alt="" />
        </div>
        <div className="light-theme" onClick={() => theme.setDark(false)}>
          <img src="/images/light-gem.png" width="30" height="31" alt="" />
        </div>

        <div className="user-autosearch">
          <input
            type="text"
            id="search-in"
            placeholder="Aradığınız kişinin adını veya aradığınız rozeti yazın."
          ></input>
          <img src="images/icon-searchbar-down.png" alt="" />
          <ul id="myUL" className="result-list">
            <li>
              <a href="#">Erbuğ Kaya</a>
            </li>
            <li>
              <a href="#">Hasan Taşdelen</a>
            </li>
            <li>
              <a href="#">Artun Manuk Çilingiryan</a>
            </li>
            <li>
              <a href="#">Selin Yavaş</a>
            </li>
            <li>
              <a href="#">Oğuz Tarhan</a>
            </li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
      <div className="header-container">
        <div className="user-image">
          <img
            src="publishing-images/user/user-tempjpg"
            width="1060"
            height="1119"
            alt=""
          />
        </div>

        <div className="user-organisation">
          <ul>
            <li>
              Kadir Mustafa Öztürk
              <ul>
                <li>
                  Erbuğ Kaya
                  <ul>
                    <li>Deniz Can Huzur Melekoğlu</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="user-name-title">
          <h6>Deniz Melekoğlu</h6>
          <span>
            Görsel Tasarım ve Kullanıcı Deneyimi <br></br> Görsel Tasarım Uzmanı
          </span>
        </div>

        <div className="user-mail-tel">
          deniz.melekoglu@intertech.com.tr
          <br></br>
          (531) 699 71 70
        </div>
      </div>

      <div className="main-content">
        <div className="menu">
          <ul>
            <li className="active">
              <a href="rozetlerim.html">
                <span>ROZETLERİ</span>
              </a>
            </li>
            <li>
              <a href="han.html">
                <span>HAN</span>
              </a>
            </li>
            <li>
              <a href="siralamlar.html">
                <span>SIRALAMALAR</span>
              </a>
            </li>
            <li>
              <a href="tum-rozetler.html">
                <span>TÜM ROZETLER</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="main-container-top">
          <b></b>
        </div>
        <div className="main-container-middle">{children}</div>
        <div className="main-container-bottom"></div>
      </div>

      <div className="game-footer">@ Intertech 2021</div>
    </div>
  );
}
