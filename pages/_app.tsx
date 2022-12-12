import "../styles/globals.css";
import "../styles/utils.css";
import type { AppProps } from "next/app";
import { Londrina_Outline, Work_Sans } from "@next/font/google";

const ws = Work_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ws.className}>
      <Component {...pageProps} />
    </main>
  );
}
