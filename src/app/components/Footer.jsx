import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/loghi/new_logo.png";
import LockIcon from "../../../public/images/lock.svg";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#121212]">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </span>
        <p className=" flex text-slate-600 gap-2">
          Copyright © {currentYear} Davide Trovato. Tutti i diritti riservati
          <Link href="/login">
            <Image src={LockIcon} alt="Login" width={20} height={20} />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
