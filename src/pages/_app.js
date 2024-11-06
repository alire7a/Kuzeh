import "@/styles/globals.scss";
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight
import "@fontsource/inter/400-italic.css"; // Specify weight and style


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
