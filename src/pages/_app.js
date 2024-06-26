import "@/styles/globals.css";
import Layout from "./Layout/Layout";
import Authentication from "./Authentication/Authentication";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Authentication><Layout>{getLayout(<Component {...pageProps} />)}</Layout></Authentication>;
}
