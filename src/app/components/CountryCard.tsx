import React, { useState, useEffect, use } from "react";
import Countries from "./Countries";

export default function CountryCard() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const regions = [
    {
      name: "Africa",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/countries");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      }
    };
    getCountries();
  }, []);

  async function getSearchCountry() {
    try {
      const res = await fetch(
        `http://localhost:8080/api/countries/name/${searchCountry}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function filterByRegion(region: string) {
    try {
      const res = await fetch(
        `http://localhost:8080/api/countries/region/${region}`
      );
      const data = await res.json();

      setCountries(data);
    } catch (err) {
      console.error(err);
    }
  }

  function onSearchCountry(event) {
    event.preventDefault();
    getSearchCountry();
  }

  function handleFilterByRegion(event) {
    event.preventDefault();
    filterByRegion();
  }

  return (
    <>
      <section className="container mx-auto p-8">
        {/* Search and filter buttons */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <form
            onSubmit={onSearchCountry}
            autoComplete="off"
            className="max-w-4xl md:flex-1"
          >
            <input
              type="text"
              name="search"
              placeholder="Search for a country..."
              required
              className=" w-full py-3 px-4 bg-base-100 shadow rounded outline-none "
              value={searchCountry}
              onChange={(event) => setSearchCountry(event.target.value)}
            ></input>
          </form>

          <form onSubmit={handleFilterByRegion}>
            <select
              name="filter-by-region"
              id="filter"
              className="w-52 py-3 px-4 outline-none shadow rounded bg-base-100 "
              value={regions.name}
              onChange={(event) => filterByRegion(event.target.value)}
            >
              {regions.map((region, index) => (
                <option key={index} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {countries.map((country) => (
            <Countries key={country.name.common} {...country} />
          ))}
        </div>
      </section>
    </>
  );
}
