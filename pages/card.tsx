import styles from "../styles/Home.module.css";
import { Work_Sans } from "@next/font/google";
import { title } from "process";
import Link from "next/link";

const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function Card(props: { title: String; description: String }) {
  const classTitle = props.title.substring(0, 3).replace("/", "");
  return (
    // <Link href="/personas/personas">
    <div className={styles.card + " " + classTitle}>
      <a className={ws.className} href="/personas/personas">
        <h2 className="py-2">{props.title}&rarr;</h2>
        <p>{props.description}</p>
      </a>
    </div>
    // </Link>
  );
}
