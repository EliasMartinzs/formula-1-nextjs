import React from "react";
import NavRight from "./NavCenter";
import NavBottom from "./NavBottom";

export default function Header() {
  return (
    <div className="absolute top-0 h-20 w-full bg-gradients">
      <NavRight />
      <NavBottom />
    </div>
  );
}
