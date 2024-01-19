// Define the type for the 'country' prop
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SearchButton } from "./SearchButton";
import FilterButton from "./FilterButton";
interface Country {
  numericCode: string;
  name: {
    common: string;
    // Add other name properties if they exist
  };
  population: number;
  region: string;
  capital: string;
  // Add other relevant fields as necessary
  flags: {
    png: string;
  };
}

export default function Countries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");

  const fetchCountries = async () => {
    const response = await fetch("http://localhost:8080/api/countries");
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };


  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="flex justify-between items-center mb-8 w-full">
        <div className="flex-grow">
          <SearchButton onSearchChange={onSearchChange} />
        </div>
        <div className="mr-16">
          <FilterButton />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCountries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;

          return (
            <div key={numericCode} className="bg-base-100 rounded-lg">
              <div className="">
                <Image
                  src={flags.png}
                  width={320}
                  height={230}
                  alt={`Flag of ${name.common}`}
                  priority={true}
                />
              </div>
              <div className="text min-h-[230px] pl-5 rounded-b-lg">
                <h2 className="font-[600] text-xl py-6">{name.common}</h2>
                <div className="space-y-2">
                  <p>
                    <span className="font-[600]">Population: </span>{" "}
                    {population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-[600]">Region: </span>
                    {region}
                  </p>
                  <p>
                    <span className="font-[600]">Capital: </span> {capital}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
