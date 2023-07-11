import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavCenter() {
  return (
    <div className="w-52 h-20">
      <Link href="/">
        <Image
          src="/filogowhite.png"
          alt="logof1"
          fill
          className="object-contain"
        />
      </Link>
    </div>
  );
}
