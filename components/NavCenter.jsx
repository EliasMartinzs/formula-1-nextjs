import Image from "next/image";
import React from "react";

export default function NavCenter() {
  return (
    <div className="w-52 h-20">
      <Image
        src="/filogowhite.png"
        alt="logof1"
        fill
        className="object-contain"
      />
    </div>
  );
}
