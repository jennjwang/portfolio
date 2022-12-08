import Image from "next/image";
import sub from "../public/sub.png";
import styles from "../styles/Intro.module.css";
import { Londrina_Outline, Work_Sans } from "@next/font/google";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function Intro() {
  return (
    <div className="flex justify-center">
      <div className="flex p-10 pt-10">
        <Image className={styles.img} src={sub} alt="user profile picture" />
        <div className={styles.text}>
          <span
            className={
              lo.className + " text-blue text-start py-10 text-6xl font-bold"
            }
          >
            Nice to meet ya!
          </span>
          <p className={ws.className + " " + styles.descript}>
            I’m [NAME], a student that's really into creating authentic and
            lovable things that folks enjoy using every day. Right now, I'm
            building things at [PLACE]. FYI That's not me on the left.
          </p>
        </div>
      </div>
    </div>
  );
}
