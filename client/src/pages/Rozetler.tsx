import Layout from "../components/Layout";
import BadgeCard from "../components/shared/BadgeCard";

export default function Rozetler() {
  return (
    <Layout>
      <div className="main-container-top">
        TOPLAM <b>13</b> ROZET
      </div>
      <div className="main-container-middle">
        <div className="game-row">
          <BadgeCard />
          <div className="clear"></div>
        </div>
      </div>
      <div className="main-container-bottom"></div>
    </Layout>
  );
}
