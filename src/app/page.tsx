"use client";
import CountryCard from "./components/CountryCard";
import FilterButton from "./components/FilterButton";
import { SearchButton } from "./components/SearchButton";
import { TopBar } from "./components/TopBar";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
      <TopBar />

      <div className="absolute top-28 left-24">
        <CountryCard />
      </div>
    </div>
  );
}
