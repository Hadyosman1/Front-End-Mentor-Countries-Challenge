import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CountriesContext } from "../store/CountriesProvider";

const SingleCountry = () => {
  const { name: countryName } = useParams();
  const { data } = useContext(CountriesContext);
  const country = data.data.find((country) => country.name === countryName);
  const borderCountries = () => {
    let countries = [];
    country?.borders?.forEach((borderCode) => {
      const borderCountry = data.data.find(
        (border) => border.alpha3Code === borderCode
      );
      if (borderCountry) countries.push(borderCountry.name);
    });
    return countries;
  };

  return (
    <section className="container single-country-wrapper">
      <Link className="go-back-btn" to="/">
        <span>⬅</span>
        Back
      </Link>

      <div className="single-country-datail">
        <img src={country?.flag} alt={country?.name} />
        <div className="content">
          <h2>{country?.name}</h2>
          <div className="lists">
            <ul>
              <li>
                <b>Native Name:</b> {country?.nativeName}
              </li>
              <li>
                <b>Population:</b> {country?.population}
              </li>
              <li>
                <b>Region:</b> {country?.region}
              </li>
              <li>
                <b>Sub Region:</b> {country?.subregion}
              </li>
              <li>
                <b>Capital:</b> {country?.capital}
              </li>
            </ul>
            <ul>
              <li>
                <b>Top Level Domain:</b> {country?.topLevelDomain.join("|")}
              </li>
              <li>
                <b>Currencies: </b>
                {country?.currencies.map((cur) => (
                  <span key={cur.name}>{cur.name}</span>
                ))}
              </li>
              <li>
                <b>Languages: </b>
                {country?.languages.map((lan) => lan.name).join(", ")}
              </li>
            </ul>
          </div>

          <div className="border-countries-wrapper">
            <b>Border Countries: </b>
            <div className="border-countries">
              {borderCountries().length
                ? borderCountries().map((borCur) => (
                    <Link key={borCur} to={`/single-country/${borCur}`}>
                      {borCur}
                    </Link>
                  ))
                : "There Is No Border Countries."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCountry;
