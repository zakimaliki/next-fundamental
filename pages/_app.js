import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Foot from "../components/Foot";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";
import { wrapper, store } from "../configs/redux/store";
import { Provider } from "react-redux";



function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
      <Navbar />
      <NextNProgress />
      <Component {...pageProps} />
      {/* <Foot/> */}
      </Provider>
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
