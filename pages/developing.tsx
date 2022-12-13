import Image from "next/image";
import sub from "../public/sub.png";
import styles from "../styles/Intro.module.css";
import { Londrina_Outline, Work_Sans } from "@next/font/google";
import Card from "./card";
import projects from "../public/assets/projects.json";
import sketch1 from "../public/personas/sketch1.jpeg";
import NavBar from "./navbar";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function Developing() {
  return (
    <div>
      {/* <NavBar title="ABOUT ME"></NavBar> */}
      <div className={styles.margin + " flex flex-col justify-center pt-10"}>
        <p className={lo.className + " text-start py-10 text-6xl font-bold"}>
          Full scoop coming soon...
        </p>
        <p>
          I&apos;m still working on adding this page. It&apos;ll be worth it, I
          promise.
        </p>
      </div>
    </div>
  );
}
