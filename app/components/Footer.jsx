import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center">
        <span><Image src="/images/logo.png" width={80}
          height={80} alt='foto'></Image></span>
      </div>
    </footer>
  )
}

export default Footer;