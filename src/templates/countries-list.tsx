import React from "react";
import { Link } from "gatsby";

type Country = {
  name: string;
  code: string;
};

type PageContext = {
  countries: Country[];
};

type CountriesListProps = {
  pageContext: PageContext;
};

/**
 * The list of all countries that will be displayed on the /countries page.
 */
const CountriesList: React.FC<CountriesListProps> = ({ pageContext }) => {
  const { countries } = pageContext;

  return (
    <div style={{ padding: "30px" }}>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => {
          const slug = country.name.toLowerCase().replace(/\s+/g, "-");
          return (
            <li key={slug}>
              <Link to={`/countries/${slug}`}>
                {country.name} ({country.code})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountriesList;
