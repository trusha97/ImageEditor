





"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";

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

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[2]); // Default English

  return (
    <div>
      {/* Open Modal Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        <ReactCountryFlag
          countryCode={selectedLang.code}
          svg
          style={{ width: "20px", height: "20px", borderRadius: "50%" }}
        />
        <span>{selectedLang.name}</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white w-80 rounded-xl shadow-lg p-5 max-h-[400px] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold font-manrope">
                {selectedLang.name}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            {/* Language List */}
            <ul>
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 mb-1 rounded-lg cursor-pointer transition ${selectedLang.code === lang.code
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                    }`}
                >
                  <ReactCountryFlag
                    countryCode={lang.code}
                    svg
                    style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                  />
                  <span>{lang.name}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

