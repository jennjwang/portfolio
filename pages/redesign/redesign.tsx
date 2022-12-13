import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";
import { HomeIcon } from "@heroicons/react/outline";
import web from "../../public/redesign/web.png";
import phone_lo from "../../public/redesign/phone_lo.png";
import ipad_lo from "../../public/redesign/ipad_lo.png";
import desktop from "../../public/redesign/desktop.png";
import comp from "../../public/redesign/comp.png";
import comp2 from "../../public/redesign/comp2.png";
import icons from "../../public/redesign/icons.png";
import phone from "../../public/redesign/phone.png";
import palette from "../../public/redesign/palette.png";
import ipad from "../../public/redesign/ipad.png";
import Image from "next/image";
import Link from "next/link";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Redesign() {
  return (
    <div>
      <div className="flex p-10 justify-center text-center">
        <ul className="flex py-10">
          <li className="mr-6">
            <Link href="/">
              <HomeIcon className="h-6 w-6 mx-2" />
            </Link>
          </li>
          <li className="mr-6">
            <Link href="#motivation">MOTIVATION</Link>
          </li>
          <li className="mr-6">
            <Link href="#problems">PROBLEMS</Link>
          </li>
        </ul>
        <h1 className={lo.className + " text-center px-16 text-8xl font-bold"}>
          NWS REDESIGN
        </h1>

        <ul className="flex py-10">
          <li className="mr-6">
            <Link href="#low-fi">LOW-FI</Link>
          </li>
          <li className="mr-6">
            <Link href="#high-fi">HIGH-FI</Link>
          </li>
          <li className="mr-6">
            <Link href="#responsive">RESPONSIVE</Link>
          </li>
        </ul>
      </div>
      <Overview
        highlights={[
          "Completed the workflow of redesigning the National Weather Service website. Analyzed and identified flaws in the existing interface.",
          "Created a visual design guide to ensure consistency in font choice and color use, designed low-fidelity and high-fidelity prototypes for various screen sizes, and built a responsive website based on those prototypes.",
        ]}
        tldr="I redesigned the National Weather Service website to add mobile responsiveness and improve its usability. A few design principles that I considered include usability, memorability, and learnability, in restructuring the page with variations to screen sizes and creating a cleaner interface with clear components and navigation elements."
      ></Overview>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="motivation">
        <span className={lo.className + " " + styles.title}>Motivation</span>
        <p>
          Our interactions with government websites are often memorable for all
          the wrong reasons. Whether you’re trying to change your official
          address, applying for a local permit, or even just checking the
          weather forecast, you likely have to pinch-and-zoom a non-responsive
          design.
          <br></br>
          <br></br>I wanted to redesign the National Weather Service website,
          specifically the page that provides climate data and historical
          weather data records, because these climate data sources are crucial
          to researchers studying climate change and determining future
          environmental expectations.
        </p>
        <div className={"pt-10 pb-6"}>
          <div className={styles.wrapper}>
            <iframe
              sandbox="allow-scripts"
              className={styles.frame + " border-6"}
              src="https://www.nws.noaa.gov/climate.php/"
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="problems">
        <span className={lo.className + " " + styles.title}>The Problems</span>
        <p>
          I analyzed the usability of the webpage based on five criteria:
          usability (e.g., including efficiency), learnability, memorability,
          conceptual model, and accessibility.
        </p>
        <div className="grid grid-cols-2 gap-5 py-10">
          <div className="px-5">
            <span className="text-3xl font-bold pt-5">Usability</span>
            <ul className={styles.bullets + " pt-5"}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  The website doesn&apos;t proportionally resize to different
                  size screens.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Misalignment in the side menu: the search and caption above
                  the search field are centered, while the rest of the menu is
                  left-aligned
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Too many options in the side menu, resulting in overcrowding
                  Ineffective use of space + poor alignment
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  The sidebar menu is cut off or the text has to wrap around,
                  making it difficult to read
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Font sizes are the same. No clear indication of the title vs
                  text/page section
                </p>
              </li>
            </ul>
          </div>
          <div className="px-5">
            <span className="text-3xl font-bold pt-5">Learnability</span>
            <ul className={styles.bullets + " pt-5"}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Inconsistency in menu font colors make it difficult to tell
                  which is a menu item. There’s the tan text as well as white
                  text
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  There&apos;s no clear way to find help.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  It&apos;s unclear which icons are clickable.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Side menu and top menu conflict in their use. It&apos;s
                  unclear how they differ in their use + priorities
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Inconsistency in the nav bar and footer styling.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Inconsistency in link colors. There are links in tan, blue,
                  white, and gray that change to different colors when hovered
                  over.
                </p>
              </li>
            </ul>
          </div>
          <div className="py-10 px-5">
            <span className="text-3xl font-bold pt-5">Accessibility</span>
            <ul className={styles.bullets + " pt-5"}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  No page regions or ARIA landmarks were found.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Missing first level heading - a page does not have a first
                  level heading.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Empty form label X Language missing or invalid.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Very small text in footer.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Many picture for aesthetic purposes that are missing
                  alternative text
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Overall, there seemed to be a problem with the organization of
                  the page which raised many accessibility issues. This issue is
                  especially apparent in the layout of the horizontal navigation
                  bar and the side menu.
                </p>
              </li>
            </ul>
          </div>
          <div className="py-10 px-5">
            <span className="text-3xl font-bold pt-5">Conceptual Model</span>
            <ul className={styles.bullets + " pt-5"}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Unconventional order of items in the side menu. The search bar
                  is weirdly placed at the top. Sign up link is usually at the
                  bottom along with contact us.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Lack of information conveyed through menu items (need drop
                  down)
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Lack of information about data records displayed
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Fake links (tan-colored headers) for Text Bulletins.{" "}
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Broken links (404s)
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Ambiguous nav bar item titles
                </p>
              </li>
            </ul>
          </div>
          <div className="px-5">
            <span className="text-3xl font-bold pt-5">Memorability</span>
            <ul className={styles.bullets + " pt-5"}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Search failure for local forecast by “City, St.” The specific
                  formatting for input to search field relies on recall instead
                  of intuition.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Abbreviations are hard to understand
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer + " " + styles.trans} id="low-fi">
        <span className={lo.className + " " + styles.title}>
          LOW-FIDELITY WIREFRAME
        </span>
        <div className={styles.low}>
          <Image src={web} alt={""} />
          <Image src={ipad_lo} alt={""} />
          <Image src={phone_lo} alt={""} />
        </div>
        To address the usability issues identified, I used Balsamiq to create 3
        wireframes, one for each of the screen sizes (mobile, tablet, desktop).
        For each wireframe, I tried to create a single, clear, interactable menu
        bar with fewer elements by combining sidebar with top menu and grouping
        items. I sectioned off page regions, with large headings and interactive
        cards with data sources and a description for each. Finally, I added a
        help button with navigation instructions.
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer + " " + styles.trans}>
        <span className={lo.className + " " + styles.title}>
          VISUAL DESIGN STYLE GUIDE
        </span>
        I created a visual design style guide with clear documentation to make
        my design work more consistent and makes handoffs to developers easier.
        I used Figma to display the main colors, typography, and reusable
        components’ different states (buttons on hover, click, etc.) For
        interactive elements (e.g., elements that change on hover, on click), I
        made sure to keep their interactions consistent throughout the product
        to keep the user experience coherent.
        <div className="pt-10">
          <div className={styles.guide}>
            <div>
              <span className={" text-3xl font-bold pt-5"}>Color Palette</span>
              <Image className={styles.palette} src={palette} alt={""} />
            </div>
            <div>
              <span className="text-3xl font-bold pt-5">
                Typography / Icons
              </span>
              <Image src={icons} alt={""} />
            </div>
          </div>
          <div>
            <span className={"text-3xl font-bold pt-5"}>
              Interactable Components
            </span>
            <div className="flex">
              <Image
                src={comp2}
                className={styles.comp2 + " mt-20 -ml-6"}
                alt={""}
              />
              <Image src={comp} className={styles.comp} alt={""} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="high-fi">
        <span className={lo.className + " " + styles.title}>
          HIGH-FIDELITY WIREFRAME
        </span>
        Based on the low-fidelity wireframes, I used Figma to create a total of
        3 high-fidelity prototypes of the screen, one for each of the screen
        sizes (mobile, tablet, desktop). To design a website that is actually
        responsive, I reused most of the components between screen sizes, rather
        than designing three fairly different interfaces for different screen
        sizes. For each prototype, I annotated the different elements so that a
        developer would be able to take your designs and reproduce them without
        needing additional explanation.
        <div>
          <div className={styles.hifi}>
            <div className={styles.phone}>
              <span className={" text-3xl font-bold pt-5"}>Mobile</span>
              <Image src={phone} alt={""} />
            </div>
            <div className={styles.ipad}>
              <span className={" text-3xl font-bold pt-5"}>Tablet</span>
              <Image className=" pt-8" src={ipad} alt={""} />
            </div>
            <div>
              <span className={" text-3xl font-bold pt-5"}>Desktop</span>
              <Image
                className={styles.desktop + " pt-8"}
                src={desktop}
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="responsive">
        <span className={lo.className + " " + styles.title}>
          RESPONSIVE REDESIGN
        </span>
        Using the final high-fidelity prototypes, I created the final responsive
        prototype using HTML and CSS! Buttons or navigational elements can be
        replaced with dummy elements. Between the high-fidelity prototypes and
        actual website, I changed a few aspects of the design to clarify the
        role of certain elements, such as removing the underlining of nav bar
        items and adding a downwards carrot next to it to indicate a dropdown.
        <br></br> <br></br>
        <Link href="https://crazykangaroo001.github.io/redesigned-site/">
          Visit the <u>live site!</u>
        </Link>
        <div className="pt-10">
          <div className={styles.wrapper}>
            <iframe
              className={styles.rframe + " border-6"}
              width="100%"
              src="https://crazykangaroo001.github.io/redesigned-site/"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer}>
        <span className={lo.className + " " + styles.title}>
          LOOKING BACK AT IT
        </span>
        <p>
          Redesigning a government website was certainly difficult. Not only did
          I have to design three separate layouts for varying screen sizes and
          implement mobile responsiveness for the site, but I also had to
          consider the original intent of the designer and the users&apos;
          perspective in accessing this site. <br></br>
          <br></br>I understood how each design decision impacted the principles
          of usability. Even a simple change in font size can signify a
          difference in the priority of the content, and a visual design can to
          help ensure consistency across texts in terms of expression,
          presentation and referencing. From interacting with and redesigning an
          outdated government website, I understood how the importance of these
          design principles — usability, learnability, memorability, and
          accessibility — in curating the ultimate experience of the users.
        </p>
      </div>
    </div>
  );
}
