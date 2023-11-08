import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/loghi/new_logo.png";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </span>
        <p className="text-slate-600">Copyright © {currentYear} Davide Trovato. Tutti i diritti riservati</p>
      </div>
    </footer>
  );
};

export default Footer;
