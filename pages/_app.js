import "../styles.css";
// always import styles at the app level

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
