import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Iterative() {
  return (
    <div>
      <div>
        <div className="flex p-10 justify-center text-center">
          <ul className="flex py-10 px-20">
            <li className="mr-6">
              <a href="/">HOME</a>
            </li>
            <li className="mr-6">
              <a href="#background">BACKGROUND</a>
            </li>
            <li className="mr-6">
              <a href="#sketches">SKETCHES</a>
            </li>
          </ul>
          <h1 className={lo.className + " text-center text-8xl font-bold"}>
            LUNAJOY
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
          <span className={lo.className + " " + styles.title}>Background</span>
          <p>
            LunaJoy is a precision mental health platform that is specialized in
            women's mental health through all phases of life including
            adolescence, pregnancy, postpartum, infertility, miscarriage, loss,
            perimenopause, and aging. The startup focuses on delivering care by
            creating a specialized workforce to provide targeted psychotherapy,
            medication management + genetic testing, coaching, and holistic
            wellness. We’re designing a mobile app for female identifying
            individuals to manage their mental health and to find the right help
            they need. We believe these users would be most impacted by our app
            because of our focus on the unique health issues that female
            identifying individuals experience through their different phases of
            life.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="sketches">
          <span className={lo.className + " " + styles.title}>Sketches</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="wireframes">
          <span className={lo.className + " " + styles.title}>Wireframes</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="prototype">
          <span className={lo.className + " " + styles.title}>Prototype</span>
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
