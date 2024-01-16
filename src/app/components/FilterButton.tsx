export default function FilterButton() {
  return (
    <>
      <div className="filter">
        <div className="filter__search">
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="filter__select">
          <select name="" id="">
            <option value="">Filter by Region</option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
}
