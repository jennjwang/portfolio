import Image from "next/image";
import sub from "../public/sub.png";
import styles from "../styles/Intro.module.css";
import { Londrina_Outline, Work_Sans } from "@next/font/google";
import Card from "./card";
import projects from "../public/assets/projects.json";
import sketch1 from "../public/personas/sketch1.jpeg";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function Projects() {
  // projects.forEach((item) => {
  //   item.image = process.env.PUBLIC_URL + "/" + item.image;
  //   console.log(item.image);
  // });

  return (
    <div className={styles.margin + " flex flex-col justify-center pt-10"}>
      <p className={lo.className + " text-start py-10 text-6xl font-bold"}>
        Check These Out:
      </p>
      <div className="grid grid-cols-3 gap-x-0">
        {projects.map((item, index) => {
          return (
            <Card
              key={index}
              image={item.image}
              url={item.href}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}
