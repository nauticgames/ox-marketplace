import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { MoralisProvider } from "react-moralis";
import Web3EnabledWrapped from "../hoc/Web3EnabledWrapped";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="3UDfnGpTjVGM0stnzIA2Wgnj2O7IoNfC2uWkzEln"
      serverUrl="https://38epkbtvvfvk.usemoralis.com:2053/server"
    >
      <Web3EnabledWrapped>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Web3EnabledWrapped>
    </MoralisProvider>
  );
}

export default MyApp;
