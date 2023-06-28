import "@/styles/bootstrap.min.css";
import "@/styles/animate.min.css";
import "@/styles/fontawesome-all.min.css";
import "@/styles/react-odometer-theme.css";
import "@/styles/default.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const bootstrapJs = dynamic(import("bootstrap/dist/js/bootstrap.bundle.min"), {
  ssr: false,
  loading: () => 0,
});

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  return <Component {...pageProps} />;
}
