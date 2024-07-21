/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [data, setData] = useState({ data: [], isPending: false });

  useEffect(() => {
    if (!data.data.length) {
      fetchCountries(setData);
    }
  }, [data.data]);

  return (
    <CountriesContext.Provider value={{ data, setData }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;

const fetchCountries = async (setData) => {
  try {
    setData((prev) => ({ ...prev, isPending: true }));
    const res = await fetch("data.json");
    const data = await res.json();

    if (res.ok) {
      console.log(data);
      setData((prev) => ({ ...prev, isPending: false, data: data }));
    } else {
      throw new Error("Failed to fetch countries");
    }
  } catch (error) {
    alert(error.message);
  }
};
