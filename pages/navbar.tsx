import { Londrina_Outline, Work_Sans } from "@next/font/google";
import Link from "next/link";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function NavBar() {
  return (
    <div className="flex p-10 justify-center text-center">
      <ul className="flex py-10 px-40">
        <li className="mr-6 text-xs">
          {/* <a className="" href="#"> */}
          HOME
          {/* </a> */}
        </li>
        <li className="mr-6 text-xs">
          {/* <a className="" href="#"> */}
          ABOUT
          {/* </a> */}
        </li>
        <li className="mr-6 text-xs">
          {/* <a className="text-xs" href="#"> */}
          CONTACT
          {/* </a> */}
        </li>
      </ul>
      <Link className={ws.className} href="/personas/personas">
        <h1 className={lo.className + " text-center text-8xl font-bold"}>
          ANNONYMOUS
        </h1>
      </Link>

      <ul className="flex py-10 px-40">
        <li className="mr-6 text-xs">
          {/* <a className="" href="#"> */}
          SCHOOL
          {/* </a> */}
        </li>
        <li className="mr-6 text-xs">
          {/* <a className="" href="#"> */}
          WORK
          {/* </a> */}
        </li>
        <li className="mr-6 text-xs">
          {/* <a className="text-xs" href="#"> */}
          FUN
          {/* </a> */}
        </li>
      </ul>
    </div>
  );
}
