import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Redesign() {
  return (
    <div>
      <NavBar title="REDESIGN"></NavBar>
      <Overview></Overview>
      <div className={styles.line}></div>
      <div className={styles.bigContainer}>
        <span className={lo.className + " " + styles.title}>Motivation</span>
        <p className={styles.smallContainer}>
          Our interactions with government websites are often memorable for all
          the wrong reasons. Whether you’re trying to change your official
          address, applying for a local permit, or even just checking the
          weather forecast, you likely have to pinch-and-zoom a non-responsive
          design.
          <br></br>
          <br></br>I wanted to redesign the National Weather Service website,
          specifically the page that provides climate data and historical
          weather data records, because these climate data sources are crucial
          to researchers studying climate change and determining future
          environmental expectations.
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer}>
        <span className={lo.className + " " + styles.title}>The Problems</span>
        <p>
          I analyzed the usability of the webpage based on five criteria:
          usability (e.g., including efficiency), learnability, memorability,
          conceptual model, and accessibility.
        </p>
        <div>
          <div className="py-10">
            <span className="text-3xl font-bold pt-5">Usability</span>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
