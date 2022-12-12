import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Development() {
  return (
    <div>
      <div>
        <div className="flex p-10 justify-center text-center">
          <ul className="flex py-10 px-20">
            <li className="mr-6">
              <a href="/">HOME</a>
            </li>
            <li className="mr-6">
              <a href="#background">MOTIVATION</a>
            </li>
            <li className="mr-6">
              <a href="#sketches">SKETCHES</a>
            </li>
          </ul>
          <h1 className={lo.className + " text-center text-8xl font-bold"}>
            DEEPFAKE DETECTION
          </h1>
          <ul className="flex py-10 px-20">
            <li className="mr-6">
              <a href="#wireframes">WIREFRAMES</a>
            </li>
            <li className="mr-6">
              <a href="#prototype">PROTOTYPE</a>
            </li>
            <li className="mr-6">
              <a href="#testing">USER TESTING</a>
            </li>
          </ul>
        </div>
        <Overview></Overview>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="background">
          <span className={lo.className + " " + styles.title}>Motivation</span>
          <p></p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="sketches">
          <span className={lo.className + " " + styles.title}>
            Usability Principles
          </span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="wireframes">
          <span className={lo.className + " " + styles.title}>
            Organization of Components
          </span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="prototype">
          <span className={lo.className + " " + styles.title}>Data</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="testing">
          <span className={lo.className + " " + styles.title}>
            User Testing
          </span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer}>
          <span className={lo.className + " " + styles.title}>
            Looking Back At It
          </span>
        </div>
      </div>
    </div>
  );
}
