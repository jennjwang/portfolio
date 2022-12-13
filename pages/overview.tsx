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
          <p>{props.tldr}</p>
        </div>
        <div className={styles.container + " flex flex-col px-10"}>
          <span
            className={lo.className + " text-6xl pb-5 text-center font-bold"}
          >
            Highlights
          </span>
          <ul>
            {props.highlights?.map((item: string, index: number) => {
              return (
                <li className={styles.bullets} key={index}>
                  <p className={styles.text + " text-base font-normal"}>
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
