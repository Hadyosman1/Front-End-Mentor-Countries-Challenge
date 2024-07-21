import { useContext, useMemo, useState } from "react";
import { CountriesContext } from "../store/CountriesProvider";

const MainContent = () => {
  const [isDropDownHide, setIsDropDownHide] = useState(true);
  const { data } = useContext(CountriesContext);
  const [filteredByRegions, setFilteredByRegions] = useState("");
  const [searchByName, setSaerchByName] = useState("");

  const regions = useMemo(() => {
    const regions = data.data.map((country) => country.region);
    return [...new Set(regions)];
  }, [data.data]);

  const searchedCountries = data.data.filter((country) =>
    country.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  const handleSearch = (e) => {
    let timeOut;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => setSaerchByName(e.target.value), 800);
  };
  const searchedOrAll = searchedCountries;

  const countriesFilteredByRegions = searchedOrAll.filter(
    (country) => country.region === filteredByRegions
  );

  const countries = () => {
    if (filteredByRegions) {
      return countriesFilteredByRegions;

    } else if (searchedCountries.length) {
      return searchedCountries;
    } else {
      return data.data;
    }
  };

  return (
    <main>
      <div className="container">
        <div className="search-and-filter">
          <label htmlFor="search-input">🔍</label>
          <input
            onChange={handleSearch}
            id="search-input"
            type="search"
            placeholder="search for a country..."
          />
        </div>
        <p className="search-result-length">
          countries {`( ${countries().length} )`}
        </p>

        <div className="drop-down">
          <button onClick={() => setIsDropDownHide(!isDropDownHide)}>
            {filteredByRegions || "Filter by Region"}
            <span>{isDropDownHide ? "🔽" : "🔼"}</span>
          </button>
          <ul
            className={`drop-down-menu ${!isDropDownHide && "show-drop-down"}`}
          >
            <li onClick={() => setFilteredByRegions("")}>All Regions</li>
            {regions.map((re) => (
              <li onClick={() => setFilteredByRegions(re)} key={re}>
                {re}
              </li>
            ))}
          </ul>
        </div>

        <section className="countries-wrapper">
          {countries().map((country) => (
            <div key={country.name} className="card">
              <img src={country.flags.png} alt={country.name} />
              <div className="content">
                <h2>{country.name}</h2>
                <div className="info">
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default MainContent;
