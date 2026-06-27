"use client";

import { CHECKOUT_URL } from "./config";

export default function CheckoutButton({ children, className = "btn" }) {
  const onClick = () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout");
    }
  };

  return (
    <a href={CHECKOUT_URL} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
