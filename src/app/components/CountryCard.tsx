export default function CountryCard() {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src="https://via.placeholder.com/300x200" alt="" />
        </div>
        <div className="card__content">
          <h2 className="card__title">Country Name</h2>
          <p className="card__text">Population: 123456</p>
          <p className="card__text">Region: Asia</p>
          <p className="card__text">Capital: New Delhi</p>
        </div>
      </div>
    </>
  );
}
