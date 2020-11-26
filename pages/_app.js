import "../styles.css";
// always import styles at the app level
// otherwise import using [name].module.css at the component level (e.g. pages/pokemon/Pokemon.module.css)

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      break;
    case "LCP":
      break;
    case "CLS":
      break;
    case "FID":
      break;
    case "TTFB":
      break;
    case "Next.js-hydration":
      break;
    case "Next.js-route-change-to-render":
      break;
    case "Next.js-render":
      // could drop anything in here
      break;
    default:
      break;
  }
}
