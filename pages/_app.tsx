//@ts-ignore
//@ts-nocheck
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../State/store";
import Web3ContextWrapped from "../context/Web3Context";
import { Toaster } from "react-hot-toast";
import NextNprogress from "nextjs-progressbar";
import { MoralisProvider } from "react-moralis";
import { ThemeProvider } from "styled-components";
import theme from "../ThemeConfig";
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
    __REDUX_DEVTOOLS_EXTENSION__?: any;
  }
}

const App = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: 
            ${theme.body}
          }
        }
      `}</style>
      <NextNprogress
        color="#2F57F7"
        startPosition={0.5}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <MoralisProvider
        initializeOnMount
        appId={process.env.NEXT_PUBLIC_MORALIS_APPID}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVERURL}
      >
        <Web3ContextWrapped>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Web3ContextWrapped>
      </MoralisProvider>
    </>
  );
};

export default App;
