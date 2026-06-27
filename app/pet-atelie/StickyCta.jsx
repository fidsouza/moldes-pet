"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky${show ? " show" : ""}`}>
      <div className="wrap">
        <div className="l">
          <b>Pet Ateliê</b>
          <small>100 moldes + 7 bônus + garantia de 7 dias</small>
        </div>
        <div className="price">R$10</div>
        <a href="#oferta" className="btn">QUERO AGORA</a>
      </div>
    </div>
  );
}
