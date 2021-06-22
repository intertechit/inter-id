import useTheme from "./hooks/useTheme";

export default function App() {
  const theme = useTheme();

  return (
    <div>
      <div className="gamification-main-container">
        <div className="game-row">
          <div className="logo">
            <img src="/images/logo.png" alt="" />
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
            />
            <img src="/images/icon-searchbar-down.png" alt="" />
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
              src="/publishing-images/user/user-tempjpg"
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
              Görsel Tasarım ve Kullanıcı Deneyimi <br /> Görsel Tasarım Uzmanı
            </span>
          </div>

          <div className="user-mail-tel">
            deniz.melekoglu@intertech.com.tr
            <br />
            (531) 699 71 70
          </div>
        </div>

        <div className="main-content">
          <div className="menu">
            <ul>
              <li className="active">
                <a href="rozetleri.html">
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
            <b>DENİZ'İN KREDİLER ROZETİNE YORUM YAPIYORSUN.</b>
          </div>
          <div className="main-container-middle">
            <div className="rozet-yorum-yap">
              <strong>Rozetin Tam Adı:</strong> Krediler
              <br />
              <br />
              <strong>Rozetin Derecesi:</strong>{" "}
              <span className="common">Unique</span>
              <br />
              <br />
              <br />
              Deniz'in rozetine kaç yıldız verirsin?
              <br />
              <select className="form-control" name="stars" id="stars">
                <option value="1">1 Yıldız</option>
                <option value="2">2 Yıldız</option>
                <option value="3">3 Yıldız</option>
                <option value="4">4 Yıldız</option>
                <option value="5">5 Yıldız</option>
              </select>
              <br />
              <br />
              Deniz'in rozetine yorum yap.
              <br />
              <textarea className="form-control"></textarea>
              <br />
              <br />
              <button type="submit" className="btn btn-success">
                Gönder
              </button>
            </div>

            <div className="clear"></div>
          </div>
          <div className="main-container-bottom"></div>
        </div>

        <div className="game-footer">@ Intertech 2021</div>
      </div>
    </div>
  );
}
