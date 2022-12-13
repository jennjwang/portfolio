import styles from "../styles/Intro.module.css";
import { Londrina_Outline } from "@next/font/google";
import { InboxIcon } from "@heroicons/react/outline";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div
      className={styles.out + " flex flex-col justify-center pt-10"}
      id="contact"
    >
      <span className={lo.className + " text-start py-10 text-6xl font-bold"}>
        Heading Out?
      </span>
      <div className="flex flex-row justify-between">
        <div className={styles.outText}>
          <p>
            Thanks for stopping by. Hope ya had a good time! You can always hit
            me up and we can talk about anything.
          </p>
        </div>
        <div className="-mt-10">
          <div className={styles.button + " flex justify-center"}>
            <InboxIcon width={"20px"}></InboxIcon>
            <p className="pl-2 font-bold text-xl">hello@annoymous.com</p>
          </div>
          <button className={styles.button + " flex justify-center"}>
            <p className="pl-2 font-bold text-xl">
              Connect with me on Linkedin
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
