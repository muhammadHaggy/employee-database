import { type AppType } from "next/dist/shared/lib/utils";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import "../styles/globals.css";
const queryClient = new QueryClient()
const MyApp: AppType = ({ Component, pageProps }) => {

  return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />;
      </QueryClientProvider>
  )
};

export default MyApp;
