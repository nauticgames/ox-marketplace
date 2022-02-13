import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Web3EnabledWrapped from "../hoc/Web3EnabledWrapped";
import { Toaster } from "react-hot-toast";
import NextNprogress from "nextjs-progressbar";
import { MoralisProvider } from "react-moralis";
import { useEffect } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: 
            #f5f5f5
          }
        }
      `}</style>
      <MoralisProvider
        initializeOnMount
        appId={process.env.NEXT_PUBLIC_MORALIS_APPID}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVERURL}
      >
        <Web3EnabledWrapped>
          <Provider store={store}>
            <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
            <NextNprogress
              color="#2F57F7"
              startPosition={0.5}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </Provider>
        </Web3EnabledWrapped>
      </MoralisProvider>
    </>
  );
}

export default MyApp;
