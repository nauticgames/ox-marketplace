import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../State/store";
import Web3ContextWrapped from "../context/Web3Context";
import { Toaster } from "react-hot-toast";
import NextNprogress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import theme from "../ThemeConfig";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { MoralisProvider } from "react-moralis";
import ModalsProvider from "../providers/ModalProvider";

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
          background-color: #f5f5f5
          }
        }
      `}</style>
      <NextNprogress
        color="#2F57F7"
        startPosition={0.5}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ easing: "ease", speed: 200 }}
      />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_MORALIS_APPID}
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVERURL}
        initializeOnMount
      >
        <Web3ContextWrapped>
          <Provider store={store}>
            <ModalsProvider>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </ModalsProvider>
          </Provider>
        </Web3ContextWrapped>
      </MoralisProvider>
    </>
  );
};

export default App;
