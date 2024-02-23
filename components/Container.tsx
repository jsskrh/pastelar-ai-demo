"use client";

import { useEffect, useState } from "react";
import Card from "./Card";
import Success from "./Success";

const Container = () => {
  const [show, setShow] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setHidden(true);
      }, 1000);
    }
  }, [show]);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2">
        <Card show={show} setShow={setShow} hidden={hidden} />
      </div>
      <Success show={!show} />
    </>
  );
};

export default Container;
