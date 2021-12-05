import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

const SQLTrainer = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default SQLTrainer;
