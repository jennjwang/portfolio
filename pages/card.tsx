import styles from "../styles/Home.module.css";
import { Londrina_Outline, Work_Sans } from "@next/font/google";
import { title } from "process";
import Link from "next/link";

const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function Card(props: {
  title: String;
  description: String;
  url: string;
  image: string;
}) {
  // const classTitle = props.title.substring(0, 3).replace("/", "");
  const url = encodeURI(props.url);
  return (
    <div className={styles.card + " "}>
      <a className={ws.className} href={url}>
        <h2 className="py-2">{props.title} &rarr;</h2>
        <p>{props.description}</p>
        <img className={" p-5"} src={props.image}></img>
      </a>
    </div>
  );
}
