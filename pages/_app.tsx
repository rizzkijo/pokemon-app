import Header from "@/src/modules/commons/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div class="w-container max-w-full mx-auto">
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default App;
