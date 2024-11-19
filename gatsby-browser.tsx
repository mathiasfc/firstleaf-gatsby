import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
import "@styles/global.css";

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <html lang="en" />
        <title>Firstleaf - Gatsby Challenge</title>
        <meta
          name="description"
          content="A Gatsby challenge provided by the Firstleaf team."
        />
      </Helmet>
      {element}
    </QueryClientProvider>
  );
};
