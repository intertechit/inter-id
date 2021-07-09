import React from "react";

import Card from "../components/Card";
import Comment from "../components/Comments/Comment";
import Layout from "../components/Layout";
import Stars from "../components/Stars";

export default function Comments() {
  return (
    <Layout>
      <div className="mb-3">
        <h2 className="font-semibold mb-3">Deniz Melekoğlu</h2>
        <hr />
      </div>
      <Card>
        <div className="mb-3">
          <h2 className="font-semibold mb-3">Krediler Rozeti</h2>
          <Stars score={5} className="my-3" size="sm" />
          <hr />
        </div>
        <div className="flex flex-col gap-8">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </Card>
    </Layout>
  );
}
