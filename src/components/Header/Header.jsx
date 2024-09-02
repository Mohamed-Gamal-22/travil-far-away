import React from "react";
import style from "./Header.module.css";

export default function Header() {
  return (
    <h1
      className={` text-center py-3 text-[#ECFFF8] font-extrabold text-[27px] bg-[#4C191B] ${style.space}`}
    >
      🌴 Travil far away 🏖️
    </h1>
  );
}
