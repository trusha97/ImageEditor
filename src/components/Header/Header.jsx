"use client"

import React, { useState } from "react";
import Paragraph from "@/Typography/text/Paragraph";
import { logo } from "@/utils/image";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";

const languages = [
  { code: "CZ", name: "Cesky" },
  { code: "DE", name: "Deutsch" },
  { code: "GB", name: "English" },
  { code: "ES", name: "Español" },
  { code: "GR", name: "Ελληνικά" },
  { code: "FR", name: "Français" },
  { code: "HU", name: "Magyar" },
  { code: "FI", name: "Suomalainen" },
  { code: "EE", name: "Eesti keel" },
  { code: "IN", name: "हिंदी" },
];

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 👈 new state for burger menu
  const [selectedLang, setSelectedLang] = useState(languages[2]); // Default English

  return (
    <div className="bg-white">
      <nav className="mx-auto flex sm:items-end items-center justify-between py-4 sm:px-12.5 px-4">
        {/* Logo */}
        <div className="flex">
          <Link href="/">
            <Image src={logo} alt="logo" className="sm:h-9 h-6 sm:w-56 w-36" />
          </Link>
        </div>

        {/* Mobile Menu & Language */}
        <div className="flex xl:hidden items-center gap-3">
          {/* Language Selector */}
          <div>
            <button
              onClick={() => setIsLangOpen(true)}
              className="flex items-center gap-1.5 p-2.5 bg-[var(--bgdpwhite)] text-white rounded-[var(--radius)]"
            >
              <ReactCountryFlag
                countryCode={selectedLang.code}
                svg
                style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M8.34634 3.97109L5.22134 7.09609C5.19232 7.12515 5.15785 7.1482 5.11992 7.16393C5.08198 7.17965 5.04131 7.18775 5.00025 7.18775C4.95918 7.18775 4.91851 7.17965 4.88058 7.16393C4.84264 7.1482 4.80818 7.12515 4.77915 7.09609L1.65415 3.97109C1.6104 3.92739 1.5806 3.87168 1.56852 3.81103C1.55644 3.75038 1.56263 3.68751 1.5863 3.63038C1.60997 3.57325 1.65007 3.52442 1.7015 3.49009C1.75294 3.45575 1.8134 3.43745 1.87525 3.4375H8.12525C8.18709 3.43745 8.24756 3.45575 8.29899 3.49009C8.35043 3.52442 8.39052 3.57325 8.41419 3.63038C8.43786 3.68751 8.44405 3.75038 8.43197 3.81103C8.4199 3.87168 8.39009 3.92739 8.34634 3.97109Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
            {isLangOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                <div className="bg-white w-80 rounded-xl shadow-lg p-5 max-h-[400px] overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold font-manrope">
                      {selectedLang.name}
                    </h2>
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                      ✕
                    </button>
                  </div>
                  <ul>
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-2 mb-1 rounded-lg cursor-pointer transition ${
                          selectedLang.code === lang.code
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <ReactCountryFlag
                          countryCode={lang.code}
                          svg
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                          }}
                        />
                        <span>{lang.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="size-6"
            >
              <path
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex lg:gap-x-12 ml-10">
          <Link href="/background-remove-tool">
            <Paragraph
              level={2}
              text="Background Remove Tool"
              className="!font-medium leading-[16px] !text-[var(--headertext)]"
            />
          </Link>
          <Link href="/unblur-tool">
            <Paragraph
              level={2}
              text="Unblur Tool"
              className="!font-medium leading-[16px] !text-[var(--headertext)]"
            />
          </Link>
          <Link href="/pricing">
            <Paragraph
              level={2}
              text="Pricing"
              className="!font-medium leading-[16px] !text-[var(--headertext)]"
            />
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="hidden xl:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => setIsLangOpen(true)}
            className="flex mx-8 items-center gap-1.5 p-2.5 bg-[var(--bgdpwhite)] text-white rounded-[var(--radius)]"
          >
            <ReactCountryFlag
              countryCode={selectedLang.code}
              svg
              style={{ width: "20px", height: "20px", borderRadius: "50%" }}
            />
          </button>

          <Link
            href="/signup"
            className="pr-5 pl-6.5 py-2.5 mx-4 bg-transparent border border-[var(--btnbg)] font-bold text-base leading-5 text-[var(--btnbg)] rounded-[var(--radius)]"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            className="font-bold text-base leading-5 px-7 py-2.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
          >
            Log in
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-white z-40 flex flex-col p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end mb-6 text-gray-700 text-2xl"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-6">
            <Link href="/background-remove-tool" onClick={() => setIsMenuOpen(false)}>
              Background Remove Tool
            </Link>
            <Link href="/unblur-tool" onClick={() => setIsMenuOpen(false)}>
              Unblur Tool
            </Link>
            <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              Sign up
            </Link>
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              Log in
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
