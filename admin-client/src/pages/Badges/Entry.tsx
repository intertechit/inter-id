import React from "react";

import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Layout from "../../components/Layout";

export default function Entry() {
  return (
    <Layout>
      <Card label="Rozet Girişi">
        <form className="flex flex-col gap-3">
          <div className="flex gap-20">
            <div className="flex flex-col flex-1 mt-5">
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Rozet Adı</span>
                <Input type="text" />
                <div className="flex flex-col gap-3">
                  <span className="font-semibold">Rozet Türü</span>
                  <Input type="text" />
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 mt-5">
              <div className="flex flex-col gap-3">
                <span className="font-semibold">Rozet Sahibi Ekip</span>
                <Input type="text" />
                <div className="flex flex-col gap-3">
                  <span className="font-semibold">Rozet İkonu</span>
                  <Input type="file" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Rozet Onaycıları</span>
            <textarea
              className="rounded-lg transition-colors focus:bg-gray-100 border-gray-200"
              rows={3}
            />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Rozet Gereksinimleri</span>
            <textarea
              className="rounded-lg transition-colors focus:bg-gray-100 border-gray-200"
              rows={3}
            />
          </div>

          <Button className="mr-auto mt-5">Gönder</Button>
        </form>
      </Card>
    </Layout>
  );
}
