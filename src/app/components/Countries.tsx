// Define the type for the 'country' prop

import Image from "next/image";
import { Link } from "react-router-dom";

interface CountriesProps {
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

export default function Countries({
  flags,
  name,
  population,
  region,
  capital,
}: CountriesProps) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-base-100 rounded-lg shadow overflow-hidden hover:bg-base-200">
          <Image
            src={flags.png}
            alt=""
            className="md:h-44 w-full object-cover"
            width={320}
            height={213}
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{name.common}</h3>
            <ul className="flex flex-col items-start justify-start">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Capital: {capital}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
