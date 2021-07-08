import React from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

export default function Login() {
  return (
    <div className="container flex justify-center items-center h-full">
      <Card className="w-96">
        <h1 className="text-center font-semibold text-4xl mb-9">Giriş Yap</h1>
        <form className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Kullanıcı Adı</span>
            <Input type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-semibold">Şifre</span>
            <Input type="password" />
          </div>
          <Button>Giriş Yap</Button>
        </form>
      </Card>
    </div>
  );
}
