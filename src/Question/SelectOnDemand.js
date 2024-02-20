import { Fragment, useEffect, useState } from "react";

const SelectOnDemand = () => {
  const [selectedCounty, setSelectedCounty] = useState("INDIA");
  const [city, setSelectedCity] = useState([]);
  useEffect(() => {
    prepareSelectedCity();
  }, [selectedCounty]);

  const countryArray = [
    {
      county: "INDIA",
      city: [
        "Banlgalore",
        "Delhi",
        "Mumbai",
        "Chennai",
        "Hyderabad",
        "kolkata",
      ],
    },
    {
      county: "USA",
      city: [
        "New York",
        "San-hose",
        "California",
        "Baltimore",
        "Oakland",
        "Seattle",
      ],
    },
    {
      county: "Bangladesh",
      city: ["Dhaka", "Chattogram", "Gazipur"],
    },
  ];
  const handleCountyChange = (e) => {
    setSelectedCounty(e.target.value);
  };

  const prepareContryDropDown = () => {
    return (
      <Fragment>
        <select onChange={handleCountyChange}>
          {countryArray.map((item, index) => {
            const county = item.county;
            return (
              <option value={county} key={`option-${index}`}>
                {county}
              </option>
            );
          })}
        </select>
      </Fragment>
    );
  };
  const prepareSelectedCity = () => {
    const findAt = countryArray.findIndex(
      (item) => item.county === selectedCounty
    );
    const city = countryArray[findAt].city;
    console.log(findAt, city);

    setSelectedCity(city);
  };
  const prepareCountySpecificCityDropDown = () => {
    return (
      <Fragment>
        <select>
          {city.map((item, index) => {
            return (
              <option value={item} key={`${item}-${index}`}>
                {item}
              </option>
            );
          })}
        </select>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <h1> Interview Question - SelectOnDemand</h1>
      <hr></hr>
      {prepareContryDropDown()}
      {prepareCountySpecificCityDropDown()}
    </Fragment>
  );
};
export default SelectOnDemand;
