import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "next/image";

export default function SingleCard() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/countries/name/${name}`
        );
        const data = await res.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountry();
  }, [name]);

  return (
    <>
      <section className="p-8 md:py-0 max-w-7xl mx-auto">
        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
          >
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>

            <article>
              <h1 className="mb-8 font-bold  text-4xl lg:text-6xl">
                {item.name.official}
              </h1>

              <ul className="my-4 flex flex-col items-start justify-start gap-2 ">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
              </ul>

              {item.borders && (
                <>
                  <h3 className=" font-bold text-lg mb-2 ">Borders:</h3>
                  <ul className="flex flex-wrap items-start justify-start gap-2">
                    {item.borders.map((border, index) => (
                      <li
                        key={index}
                        className=" p-2 rounded text-xs tracking-wide shadow "
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                to="/"
                className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
