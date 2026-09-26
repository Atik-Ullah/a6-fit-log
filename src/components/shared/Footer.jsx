import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <div className="flex justify-between container mx-auto">
      <div className="flex gap-2">
        <Image src={logo} alt="Logo"></Image>
        <p className="text-white font-semibold">FITLOG</p>
      </div>
      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  );
};

export default Footer;
