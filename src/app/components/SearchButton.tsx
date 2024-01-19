import React from "react";
import { useState, useContext } from "react";

interface SearchButtonProps {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchButton: React.FC<SearchButtonProps> = ({
  onSearchChange,
}) => {
  return (
    <div className="relative">
      {/* Input field */}
      <input
        type="text"
        placeholder="Search for a country..."
        className="input w-full md:w-96 lg:w-120 pl-14 bg-base-100"
        onChange={onSearchChange}
      />
      {/* Search icon */}
      <span className="input-group-text absolute inset-y-0 left-2 flex items-center pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-gray-500"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
    </div>
  );
};
