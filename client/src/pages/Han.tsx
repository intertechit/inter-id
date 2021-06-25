import Layout from "../components/Layout";
import common from "../styles/images/common-icon.png";
import legendary from "../styles/images/Legendary-icon.png";
import rare from "../styles/images/rare-icon.png";
import star from "../styles/images/star.png";
import uncommon from "../styles/images/uncommon-icon.png";
import unique from "../styles/images/unique-icon.png";

export default function Han() {
  return (
    <Layout>
      <div className="main-container-top">
        DENİZ'İN HAN <b>YORUMLARI</b>
      </div>
      <div className="main-container-middle">
        <div className="rozet-yorum-container">
          <div className="yorum">
            <div className="yorum-header">
              <div className="han-rozet-box">
                <div className="gem common">
                  <img src={common} alt="" />
                </div>
                <div className="icon">
                  <img src="publishing-images/rozet/sample-icon.png" alt="" />
                </div>
              </div>

              <div className="rozet-header">
                <h6>Lorem Ipsum</h6>
              </div>

              <div className="rozet-header">
                <span className="common">Common</span>
              </div>

              <div className="yorum-header-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="yorum-header-title">
                Deniz’in <b>Lorem Ipsum</b> rozeti için yapılan yorumlar.{" "}
                <a href="rozete-yorum.html">
                  (Sen de Derya'nın bu rozetine yorum yap)
                </a>
              </div>
            </div>

            <div className="clear"></div>

            <div className="yorum-seperator"></div>

            <div className="user-box">
              <div className="user-name">Artun Manuk Çilingiryan</div>

              <div className="yorum-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="user-yorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel odio eu urna posuere tempus eget eget velit. Aenean et
                libero et lacus aliquam porta id finibus tellus. Etiam tempus
                est elit, at tristique risus volutpat at. Aliquam et turpis
                venenatis, hendrerit dui id, ullamcorper nunc. <br />
                <br />
                <a href="#">Düzenle</a> | <a href="#">Sil</a>
              </div>
            </div>

            <div className="user-box">
              <div className="user-name">Artun Manuk Çilingiryan</div>

              <div className="yorum-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="user-yorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel odio eu urna posuere tempus eget eget velit. Aenean et
                libero et lacus aliquam porta id finibus tellus. Etiam tempus
                est elit, at tristique risus volutpat at. Aliquam et turpis
                venenatis, hendrerit dui id, ullamcorper nunc.{" "}
              </div>
            </div>

            <div className="user-box">
              <div className="user-name">Artun Manuk Çilingiryan</div>

              <div className="yorum-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="user-yorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel odio eu urna posuere tempus eget eget velit. Aenean et
                libero et lacus aliquam porta id finibus tellus. Etiam tempus
                est elit, at tristique risus volutpat at. Aliquam et turpis
                venenatis, hendrerit dui id, ullamcorper nunc.{" "}
              </div>
            </div>
          </div>

          <div className="yorum">
            <div className="yorum-header">
              <div className="han-rozet-box">
                <div className="gem unique">
                  <img src={unique} alt="" />
                </div>
                <div className="icon">
                  <img src="publishing-images/rozet/sample-icon.png" alt="" />
                </div>
              </div>

              <div className="rozet-header">
                <h6>Lorem Ipsum</h6>
              </div>

              <div className="rozet-header">
                <span className="unique">Unique</span>
              </div>

              <div className="yorum-header-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="yorum-header-title">
                Deniz’in <b>Lorem Ipsum</b> rozeti için yapılan yorumlar.{" "}
                <a href="rozete-yorum.html">
                  (Sen de Derya'nın bu rozetine yorum yap)
                </a>
              </div>
            </div>

            <div className="clear"></div>

            <div className="yorum-seperator"></div>

            <div className="user-box">
              <div className="user-name">Artun Manuk Çilingiryan</div>

              <div className="yorum-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="user-yorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel odio eu urna posuere tempus eget eget velit. Aenean et
                libero et lacus aliquam porta id finibus tellus. Etiam tempus
                est elit, at tristique risus volutpat at. Aliquam et turpis
                venenatis, hendrerit dui id, ullamcorper nunc.{" "}
              </div>
            </div>

            <div className="user-box">
              <div className="user-name">Artun Manuk Çilingiryan</div>

              <div className="yorum-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="user-yorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel odio eu urna posuere tempus eget eget velit. Aenean et
                libero et lacus aliquam porta id finibus tellus. Etiam tempus
                est elit, at tristique risus volutpat at. Aliquam et turpis
                venenatis, hendrerit dui id, ullamcorper nunc.{" "}
              </div>
            </div>

            <div className="user-box">
              <div className="user-name">Artun Manuk Çilingiryan</div>

              <div className="yorum-stars">
                <ul>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                  <li>
                    <img src={star} alt="" />
                  </li>
                </ul>
              </div>

              <div className="user-yorum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel odio eu urna posuere tempus eget eget velit. Aenean et
                libero et lacus aliquam porta id finibus tellus. Etiam tempus
                est elit, at tristique risus volutpat at. Aliquam et turpis
                venenatis, hendrerit dui id, ullamcorper nunc.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-container-bottom"></div>
    </Layout>
  );
}
