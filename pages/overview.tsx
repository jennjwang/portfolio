import { Londrina_Outline } from "@next/font/google";
import styles from "../styles/Project.module.css";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Overview(props: any) {
  return (
    <div className="flex justify-center flex-col">
      <div className={styles.line + " py-5"}></div>
      <div className="flex flex-row justify-center pb-10">
        <div className={styles.container + " flex flex-col px-10"}>
          <span
            className={lo.className + " pb-5 text-6xl text-center font-bold"}
          >
            TLDR;
          </span>
          <p>
            To better understand the perspective of a parking meter user, I
            observed and interviewed individuals about their experiences using
            parking meters on South Main St. in Providence. Based on these
            users, I created personas and illustrated a storyboard for one of
            these personas.
          </p>
        </div>
        <div className={styles.container + " flex flex-col px-10"}>
          <span
            className={lo.className + " text-6xl pb-5 text-center font-bold"}
          >
            Highlights
          </span>
          <ul>
            <li className={styles.bullets}>
              <p className={styles.text + " text-base font-normal"}>
                Constructed two personas by creating a four-quadrant empathy
                map, describing what they think, feel, say, and do based on
                three user interviews
              </p>
            </li>
            <li className={styles.bullets}>
              <p className={styles.text + " text-base font-normal"}>
                Captured the persona’s user journey using a parking meter from
                start to end in a storyboard.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
