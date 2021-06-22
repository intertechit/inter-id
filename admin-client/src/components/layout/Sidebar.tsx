import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import { Navigation } from "react-minimal-side-navigation";
import { useHistory } from "react-router";

export default function Sidebar() {
  const history = useHistory();

  return (
    <div className="xp-leftbar">
      <div className="xp-sidebar">
        <div className="xp-logobar text-center">
          <a href={undefined} className="xp-logo">
            .id Dashboard
          </a>
        </div>

        <div className="xp-navigationbar">
          <ul className="xp-vertical-menu">
            <Navigation
              // you can use your own router's api to get pathname
              activeItemId="rozetler"
              onSelect={({ itemId }) => {
                if (
                  itemId != "rozetler" &&
                  itemId != "yorumlar" &&
                  itemId != "siralamalar"
                ) {
                  history.push(itemId);
                }
              }}
              items={[
                {
                  title: "Rozetler",
                  itemId: "rozetler",
                  subNav: [
                    {
                      title: "Rozet Giriş",
                      itemId: "/rozet-ekle",
                    },
                    {
                      title: "Rozet Düzenleme",
                      itemId: "/rozet-duzenleme",
                    },
                    {
                      title: "Legendary Rozetler",
                      itemId: "/legendary-rozetler",
                    },
                    {
                      title: "Unique Rozetler",
                      itemId: "/unique-rozetler",
                    },
                    {
                      title: "Rare Rozetler",
                      itemId: "/rare-rozetler",
                    },
                    {
                      title: "Uncommon Rozetler",
                      itemId: "/uncommon-rozetler",
                    },
                    {
                      title: "Common Rozetler",
                      itemId: "/common-rozetler",
                    },
                    {
                      title: "Tüm Rozetler",
                      itemId: "/tum-rozetler",
                    },
                  ],
                },
                {
                  title: "Yorumlar",
                  itemId: "yorumlar",
                  subNav: [
                    {
                      title: "Tüm Yorumlar",
                      itemId: "/tum-yorumlar",
                    },
                    {
                      title: "Son Yorumlar",
                      itemId: "/son-yorumlar",
                    },
                  ],
                },
                {
                  title: "Sıralamalar",
                  itemId: "siralamalar",
                  subNav: [
                    {
                      title: "Yeni Sıralama Oluştur",
                      itemId: "/yeni-siralama",
                    },
                    {
                      title: "Rozet Toplayıcılar",
                      itemId: "/rozet-toplayicilar",
                    },
                    {
                      title: "Yıldızlar",
                      itemId: "/yildizlar",
                    },
                    {
                      title: "Legendary Rozet Sahipleri",
                      itemId: "/legendary-rozet-sahipleri",
                    },
                    {
                      title: "Unique Rozet Sahipleri",
                      itemId: "/unique-rozet-sahipleri",
                    },
                    {
                      title: "Rare Rozet Sahipleri",
                      itemId: "/rare-rozet-sahipleri",
                    },
                    {
                      title: "Uncommon Rozet Sahipleri",
                      itemId: "/uncommon-rozet-sahipleri",
                    },
                    {
                      title: "Common Rozet Sahipleri",
                      itemId: "/common-rozet-sahipleri",
                    },
                  ],
                },
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
