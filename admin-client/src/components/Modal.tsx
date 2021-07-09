import React from "react";
import { createPortal } from "react-dom";

import Card, { CardProps } from "./Card";

interface ModalProps extends CardProps {
  visible: boolean;
}

export default function Modal({ visible, children, ...rest }: ModalProps) {
  return createPortal(
    <>
      {visible ? (
        <div className="absolute w-full h-full inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <Card {...rest}>{children}</Card>
        </div>
      ) : null}
    </>,
    document.getElementById("root-modal")
  );
}
