import React from "react";
import { FiTrash2 } from "react-icons/fi";

import Stars from "../Stars";

export default function Comment() {
  return (
    <div className="flex gap-5 items-center pr-36">
      <img
        src="/images/comment-example.jpg"
        alt="example"
        className="rounded-full w-16 h-16"
      />
      <div>
        <div className="flex gap-3 items-center">
          <h2 className="font-semibold">Elif Mutlu</h2>
          <Stars score={5} size="sm" />
          <button className="mr-5 text-red-500">
            <FiTrash2 size={20} />
          </button>
        </div>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </div>
      <div></div>
    </div>
  );
}
