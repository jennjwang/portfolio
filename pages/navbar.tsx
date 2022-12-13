import { Londrina_Outline, Work_Sans } from "@next/font/google";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/outline";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });
const ws = Work_Sans({ weight: "400", subsets: ["latin"] });

export default function NavBar(props: any) {
  return (
    <div className="flex p-10 justify-center text-center">
      <ul className="flex pt-10 px-20">
        <li className="mr-6">
          <Link className={ws.className} href="/">
            <HomeIcon className="h-6 w-6 mx-2" />
          </Link>
        </li>
        <li className="mr-6">
          <Link className={ws.className} href="/developing">
            ABOUT
          </Link>
        </li>
        <li className="mr-6">
          <Link className={ws.className} href="#contact">
            CONTACT
          </Link>
        </li>
      </ul>
      {/* <Link className={ws.className} href="/"> */}
      <h1 className={lo.className + " text-center text-8xl font-bold"}>
        {props.title}
      </h1>
      {/* </Link> */}

      <ul className="flex py-10 px-20">
        <li className="mr-6">
          <Link className={ws.className} href="#projects">
            PROJECTS
          </Link>
        </li>
        <li className="mr-6">
          <Link className={ws.className} href="/developing">
            WRITING
          </Link>
        </li>
        <li className="mr-6">
          <Link className={ws.className} href="/developing">
            RESUME
          </Link>
        </li>
      </ul>
    </div>
  );
}
