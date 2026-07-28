"use client"

import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Soujata Exim Logo"
        width={100}
        height={100}
      />
    </div>
  )
}
