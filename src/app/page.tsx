"use client";
import CountryCard from "./components/CountryCard";
import { TopBar } from "./components/TopBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCard from "./components/SingleCard";

export default function Home() {
  return (

  <BrowserRouter>
    <TopBar />
    <Routes>
      <Route path="/" element={<CountryCard />} />
      <Route path="/:name" element={<SingleCard />} />
    </Routes>
  </BrowserRouter>
    
  );
}
