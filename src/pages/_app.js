import "../styles/globals.css";
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { appWithTranslation } from "next-i18next";
import 'flowbite';
import Layout from '@/modules/layouts';
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { store } from "../reducer/store";
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress options={{ easing: "ease", speed: 500 }} color="green" />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default appWithTranslation(App)