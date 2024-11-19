import React from "react";
import { graphql, Link } from "gatsby";

type CountryDetailProps = {
  data: {
    allCountry: {
      edges: Array<{
        node: {
          id: string;
          name: {
            common: string;
          };
          capital: string[];
          population: number;
          region: string;
          flags: {
            png: string;
          };
        };
      }>;
    };
  };
};

const CountryDetail: React.FC<CountryDetailProps> = ({ data }) => {
  const country = data.allCountry.edges[0]?.node;

  if (!country) {
    return <div>No country data available.</div>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <Link to={"/countries"}>{`< Back`}</Link>
      <h1>{country.name.common || "Unknown Country"}</h1>
      <p>Capital: {country.capital[0] || "Unknown"}</p>
      <p>Population: {country.population ?? "Unknown"}</p>
      <p>Region: {country.region || "Unknown"}</p>
      {country.flags?.png && (
        <img
          height={60}
          width={60}
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
        />
      )}
    </div>
  );
};

export const query = graphql`
  query ($cca3: String!) {
    allCountry(filter: { cca3: { eq: $cca3 } }) {
      edges {
        node {
          id
          name {
            common
          }
          capital
          population
          region
          flags {
            png
          }
        }
      }
    }
  }
`;

export default CountryDetail;
