"use client";

import React, { useContext } from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WorkoutContext } from "@/context/WorkoutContext";

const Navbar = () => {
  const { saveWorkouts, todayPlan } = useContext(WorkoutContext);
  const pathName = usePathname();
  return (
    <div className="navbar bg-black-100 shadow-sm container mx-auto py-4 m-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/" className={pathName === "/" ? "bg-red-500" : ""}>
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/">My Plan</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <Image src={logo} alt="Logo"></Image>
          <h2 className="text-white font-bold">FITLOG</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className={pathName === "/" ? "text-[#C2F800]" : ""}>
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href="/my-plan"
              className={pathName === "/my-plan" ? "text-[#C2F800]" : ""}
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 navbar-end">
        {/* Plan */}
        <Link href="/my-plan">
          <div className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-xs font-medium text-black">
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
              {todayPlan.length}
            </span>
          </div>
        </Link>
        {/* Saved */}
        <div className="flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300">
          <span>Saved</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-[10px] text-gray-300">
            {saveWorkouts.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
