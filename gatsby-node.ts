import axios from "axios";
import path from "path";
import { GatsbyNode } from "gatsby";
import { Country } from "src/types/Country";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;

  const result = await axios.get("https://restcountries.com/v3.1/all");
  const countries: Country[] = result.data;

  const countriesList = countries.map((country) => ({
    name: country.name.common,
    code: country.cca3,
  }));

  // Create the countries list page
  createPage({
    path: "/countries",
    component: path.resolve("./src/templates/countries-list.tsx"),
    context: {
      countries: countriesList,
    },
  });

  // Create individual pages for each country
  countries.forEach((country) => {
    const slug = country.name.common.toLowerCase().replace(/\s+/g, "-");

    createPage({
      path: `/countries/${slug}`,
      component: path.resolve("./src/templates/country-detail.tsx"),
      context: {
        cca3: country.cca3,
      },
    });
  });
};

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const result = await axios.get("https://restcountries.com/v3.1/all");

  const countries: Country[] = result.data;

  countries.forEach((country) => {
    const countryNode = {
      ...country,
      id: country.cca3,
      internal: {
        type: "Country",
        contentDigest: createContentDigest(country),
      },
    };

    // Add the node to Gatsby's Data Layer
    createNode(countryNode);
  });
};
