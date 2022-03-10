import { AppProps } from "next/app";
import "../styles/index.scss";
import "../styles/ant_theme.less";

function MyApp({ Component, pageProps }: AppProps<any>) {
  return <Component pageProps={pageProps} />;
}

export default MyApp;
