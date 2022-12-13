import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./navbar";
import Intro from "./intro";
import Projects from "./project";
import Contact from "./contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="UIUX CS1300 final portfolio" />
      </Head>
      <NavBar title="ANONYMOUS"></NavBar>
      <Intro></Intro>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
