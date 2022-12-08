import Image from "next/image";
import sub from "../public/sub.png";
import styles from "../styles/Intro.module.css";
import { Londrina_Outline, Work_Sans } from "@next/font/google";
import Card from "./card";
import projects from "../public/assets/projects.json";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const ws = Work_Sans({ weight: "400", subsets: ["latin"] });
export default function Projects() {
  return (
    <div
      className={styles.margin + " flex flex-col justify-center w-4/5 pt-10"}
    >
      <p className={lo.className + " text-start py-10 text-6xl font-bold"}>
        Check These Out:
      </p>
      <div className="grid grid-cols-3 gap-x-0">
        {projects.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
