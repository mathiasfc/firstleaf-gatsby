import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@styles/global.css";

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
};
