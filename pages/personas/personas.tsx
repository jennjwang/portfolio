import Intro from "../intro";
import Image from "next/image";
import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";
import pm1 from "../../public/personas/pm1.png";
import pm2 from "../../public/personas/pm2.jpeg";
import pm3 from "../../public/personas/pm3.jpeg";
import pm4 from "../../public/personas/pm4.jpeg";
import pm5 from "../../public/personas/pm5.jpeg";
import pm6 from "../../public/personas/pm6.jpeg";
import pm7 from "../../public/personas/pm7.jpeg";
import sam from "../../public/personas/sam.png";
import jill from "../../public/personas/jill.png";
import sketch1 from "../../public/personas/sketch1.jpeg";
import sketch2 from "../../public/personas/sketch2.jpeg";
import sketch3 from "../../public/personas/sketch3.jpeg";
import sketch4 from "../../public/personas/sketch4.jpeg";
import sketch5 from "../../public/personas/sketch5.png";
import sketch6 from "../../public/personas/sketch6.jpeg";
import { HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function personas() {
  return (
    <div>
      <div className="flex p-10 justify-center text-center">
        <ul className="flex py-10 px-10">
          <li className="mr-6">
            <Link href="/">
              <HomeIcon className="h-6 w-6 mx-2" />
            </Link>
          </li>
          <li className="mr-6">
            <Link href="#interface">INTERFACE</Link>
          </li>
          <li className="mr-6">
            <Link href="#motivation">MOTIVATION</Link>
          </li>
          <li className="mr-6">
            <Link href="#interviews">INTERVIEWS</Link>
          </li>
        </ul>
        <h1 className={lo.className + " text-center text-8xl font-bold"}>
          PERSONAS
        </h1>
        <ul className="flex py-10 px-20">
          <li className="mr-6">
            <Link href="#personas">EMPATHY MAPS</Link>
          </li>
          <li className="mr-6">
            <Link href="#storyboard">STORYBOARD</Link>
          </li>
        </ul>
      </div>
      <Overview
        tldr="To better understand the perspective of a parking meter user, I
            observed and interviewed individuals about their experiences using
            parking meters on South Main St. in Providence. Based on these
            users, I created personas and illustrated a storyboard for one of
            these personas."
        highlights={[
          "Constructed two personas by creating a four-quadrant empathy map, describing what they think, feel, say, and do based on three user interviews",
          "Captured the persona’s user journey using a parking meter from start to end in a storyboard.",
        ]}
      ></Overview>
      <div className={styles.line + " py-5"}></div>
      <div className={styles.bigContainer} id="interface">
        <span className={lo.className + " text-center pb-8 text-6xl font-bold"}>
          The Parking Meter Interface
        </span>
        <p>
          Steps away from the Keeney Quad and Plant City, the parking meters on
          South Main St. are a public interface located between Financial
          District and College Hill. The meters offer two payment methods –
          credit card or coins. There is a screen on the top of the meter, with
          buttons on both sides, and a strip of red, yellow, green, and clear
          tiny light bulbs inside the screen on the left. As users interact with
          the meters through the buttons, they scroll through the six displays
          shown below.
        </p>
        <div className="flex flex-row pt-10 justify-center">
          <Image className="" src={pm1} width="380" alt="" />
          <div className="flex flex-row gap-10 flex-wrap justify-end">
            <div className={styles.w20}>
              <Image src={pm2} width="200" alt={""} />
              <figcaption className="text-xs flex flex-wrap -mt-7 text-white px-2">
                <p>Select time: 2:00 Cost: $2.50</p>
              </figcaption>
            </div>
            <div className={styles.w20}>
              <Image src={pm3} width="200" alt={""} />
              <figcaption className="text-xs flex flex-wrap -mt-7 text-white px-2">
                <p>Card Payment Insert Card</p>
              </figcaption>
            </div>
            <div className={styles.w20}>
              <Image src={pm4} width="200" alt={""} />
              <figcaption className="text-xs flex flex-wrap -mt-10 text-white px-2">
                <p>Welcom to Providence $1.25hr 2hr Max</p>
              </figcaption>
            </div>
            <div className={styles.w20}>
              <Image src={pm5} width="200" alt={""} />
              <figcaption className="text-xs flex flex-wrap -mt-10 text-white px-2">
                <p>Enforced Mon to Sat 8:00am-6:00pm. No limit after 6pm</p>
              </figcaption>
            </div>
            <div className={styles.w20}>
              <Image src={pm6} width="200" alt={""} />
              <figcaption className="text-xs flex flex-wrap -mt-7 text-white px-2">
                <p>Confirm; Cancel</p>
              </figcaption>
            </div>
            <div className={styles.w20}>
              <Image src={pm7} width="200" alt={""} />
              <figcaption className="text-xs flex flex-wrap -mt-10 text-white px-2">
                <p>Maximum Time Duration: 03:58 Cost: $5.00</p>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="motivation">
        <span className={lo.className + " text-center pb-5 text-6xl font-bold"}>
          Motivation
        </span>
        <p>
          My objective was to go out about in the real world, look at publicly
          accessible interfaces, and observe real users interacting with them. I
          interviewed these individuals about their experiences, created
          personas based on these users, and illustrated a storyboard for one of
          these personas. In stepping out of my own shoes, I recognized that
          different people have different needs and expectations when it comes
          to paying for parking.
        </p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="interviews">
        <span className={lo.className + " text-center pb-5 text-6xl font-bold"}>
          User Interviews
        </span>
        <div className="flex flex-row gap-x-12">
          <div className="flex flex-col gap-y-5">
            <span className="text-3xl font-bold pt-5">User 1 - Marvin</span>
            <ul className={styles.bullets}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Marvin is a Providence resident who is parking for 45 minutes
                  to get a haircut nearby. He attempted to pay for parking by
                  card.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Marvin said he was{" "}
                  <span className={styles.highlight}>
                    {" "}
                    confused about the process{" "}
                  </span>{" "}
                  and the only way he figured it out was{" "}
                  <span className={styles.highlight}>
                    experimenting with the buttons.
                  </span>{" "}
                  He didn’t know what each button meant until he started
                  pressing them and running through the different displays.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Marvin was{" "}
                  <span className={styles.h2}>
                    unable to reduce the time because the screens kept switching
                    to the next one from the down arrows{" "}
                  </span>
                  and ended up paying for the default of 2 hours. He{" "}
                  <span className={styles.h2}>
                    wished that they would allow him to select the time limit
                    before going to the payment method
                  </span>
                  , but he was <span className={styles.h2}>in a rush </span>to
                  get to his appointment.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  He thought the{" "}
                  <span className={styles.highlight}>
                    information on the displays were useful
                  </span>
                  , but the{" "}
                  <span className={styles.h2}>
                    number of displays he had to press through made it felt
                    unnecessary and distracting.
                  </span>
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Marvin{" "}
                  <span className={styles.h2}>tried to set a time range </span>
                  for his parking and reduced his parking time{" "}
                  <span className={styles.h2}>
                    by hitting the down arrow, but the screen switched to a
                    different display.
                  </span>
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  It{" "}
                  <span className={styles.h2}>
                    became clear to him what the purpose of lights next to the
                    meter screen was once the green light started flashing.
                  </span>{" "}
                  But he didn’t notice that the lights were there at first.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-5">
            <span className="text-3xl font-bold pt-5">User 2 - Jack</span>
            <ul className={styles.bullets}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Jack is a construction worker for Brown who is parking on
                  College Hill for the first time. He was hoping to park for 2
                  hours, and he tried paying with coins first but then ran out,
                  so he paid with a credit card.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Jack concluded that his experience using the Providence
                  parking meter was <span className={styles.h2}>horrible </span>
                  because 1){" "}
                  <span className={styles.highlight}>
                    the interface did not provide any instructions
                  </span>{" "}
                  on its display for the credit card payment method, and 2){" "}
                  <span className={styles.highlight}>
                    he was unsure which parking meter corresponded to his spot
                  </span>
                  , which is why he paid twice at different meters.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Jack{" "}
                  <span className={styles.h2}>
                    had to insert and remove the card a few times
                  </span>{" "}
                  before seeing any changes. He saw the message with the maximum
                  parking time limit and thought it was{" "}
                  <span className={styles.highlight}>useful information</span>,
                  but he remained confused because there were{" "}
                  <span className={styles.highlight}>
                    no prompts on what to do next.
                  </span>
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  He also was worried about getting a ticket because{" "}
                  <span className={styles.h2}>
                    he wasn’t sure if his payment went through. He had to keep
                    pressing the buttons and scroll through multiple screens
                    before seeing a confirmation.
                  </span>
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  He{" "}
                  <span className={styles.highlight}>
                    prefers the parking app Boston uses{" "}
                  </span>
                  to pay for the meters because it’s more convenient, and he
                  could connect it to his payment method easily. Next time he
                  parks here, he’ll use the app instead.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-5">
            <span className="text-3xl font-bold pt-5">User 3 - Susan</span>
            <ul className={styles.bullets}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Susan is a parent of a high school senior from Massachusetts
                  who is visiting Brown. She was parking for 2 hours and paid
                  for parking by coins.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Susan said she{" "}
                  <span className={styles.highlight}>
                    always remembers to bring coins{" "}
                  </span>
                  for parking because paying by card has been a nightmare in
                  most cities she’s visited.{" "}
                  <span className={styles.highlight}>“They never work,”</span>
                  she said.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  <span className={styles.highlight}>
                    The only difficulty she encountered was reading the display
                  </span>
                  because the meter was taller than she was, and the light
                  reflected off the screen.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  She was also{" "}
                  <span className={styles.highlight}>
                    unsure where the display on the meter was{" "}
                  </span>
                  at first because there were two dark sections, with one larger
                  than the other, but there were no messages on the larger
                  screen. She thought the green light was helpful in signaling
                  that her parking was valid.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Susan was{" "}
                  <span className={styles.highlight}>
                    squinting to see the screen and had to stand over the meter
                    on her tippy toes to read the display.
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="personas">
        <span className={lo.className + " text-center pb-5 text-6xl font-bold"}>
          Personas & Empathy Maps
        </span>
        <div className="flex flex-row gap-x-12">
          <div className={styles.w40 + " flex flex-col gap-y-5"}>
            <span className="text-3xl font-bold pt-5">
              Persona 1 - Struggling Sam
            </span>
            <Image src={sam} alt={""} />
            <div>
              Sam is a local resident parking for 45 minutes for a haircut
              appointment. <br></br>
              <br></br>
              The problems he faces with the interface include:
              <br></br>
              <br></br>
              <ol>
                <li>
                  1) Sam is struggling to make a credit card payment.The meter
                  is unresponsive when he inserts and removes his card.
                  <br></br>
                  <br></br>
                </li>
                <li>
                  2) Sam needs to scroll through many screens before completing
                  his payment.
                  <br></br>
                  <br></br>
                </li>
                <li>
                  3) Sam is unable to reduce the time for parking. Sam is
                  primarily based on the users Marvin and Jack.
                  <br></br>
                  <br></br>
                </li>
              </ol>{" "}
              The sources of his experiences are highlighted in blue above from
              Marvin and Jack’s summaries. Marvin and Jack both experienced
              issues paying by card, as the parking meter was slow in its
              response to the payment method. In particular, Marvin encountered
              difficulties changing the time limit for his parking and was
              frustrated by the number of displays he had to scroll through
              while on a time crunch.
            </div>
          </div>
          <div className={styles.w40 + " flex flex-col gap-y-5"}>
            <span className="text-3xl font-bold pt-5">
              Persona 2 - Clueless Chole
            </span>
            <Image src={jill} alt={""} />
            <div>
              Chloe is from out of state and she’s visiting Brown. It’s her
              first time parking in Providence.
              <br></br>
              <br></br>
              The problems she encounters with the interface include:
              <br></br>
              <br></br>
              <ol>
                <li>
                  1) The interface doesn’t provide enough guidance for Chloe to
                  complete the process of paying by card. She is unfamiliar with
                  the interface and needs more instructions.
                  <br></br>
                  <br></br>
                </li>
                <li>
                  2) Chloe is unsure which parking meter corresponds to her
                  parking spot and can’t find that information on the interface.
                  <br></br>
                  <br></br>
                </li>
                <li>
                  3) Chloe can’t read the display because the screen is too dark
                  and the light is reflecting off of the screen.
                  <br></br>
                  <br></br>
                </li>
              </ol>
              Chloe is primarily based on the users Jack and Susan. The sources
              of her experiences are highlighted in yellow above from Jack and
              Susan’s summaries. Jack and Susan are both parking in Providence
              for the first time, and many of their issues arise from an
              unfamiliarity with interface and revolve around the physical
              design of its features. However, because they are both unaware of
              the parking process in Providence, there were also features of the
              parking meter that they found useful.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer} id="storyboard">
        <span
          className={lo.className + " text-center pb-10 text-6xl font-bold"}
        >
          Storyboard
        </span>
        <div className={styles.trans + " pt-5 grid grid-cols-3 gap-10"}>
          <div>
            <Image src={sketch1} className="pb-5" alt={""} />
            Sam walks up to the parking meter to pay for parking for 45 minutes.
            He presses the down arrow button to arrive at the time limit screen,
            as shown in the drawing.
          </div>
          <div>
            <Image src={sketch2} className="pb-5" alt={""} />
            He tries to press the down arrow button to reduce the time limit for
            parking but instead the screen switches to display asking him to
            insert card payment. He tries to scroll back to the previous screen,
            but when he presses the down arrow button, the screen switches to
            the next one again.
          </div>
          <div>
            <Image src={sketch3} className="pb-5" alt={""} />
            He plans, designs, and oversees the construction of buildings. To
            practice, architecture means to provide services in connection with
            the creation of buildings and the space within the site surrounding
            the buildings that have human occupancy or use as their purpose.
          </div>
          <div>
            <Image src={sketch4} className="pb-5" alt={""} />
            He then inserts and removes his card repeatedly and continues
            pressing the buttons until finally the screen changed.
          </div>
          <div>
            <Image src={sketch5} alt={""} />
            <p className="-mt-10">
              The screens changed from displaying information regarding the
              maximum parking limit to the rate per hour to the enforced time
              limits (shown above). Sam continues pressing the down arrow button
              to scroll through these screens before arriving at the
              confirmation screen for his payment.
            </p>
          </div>
          <div>
            <Image src={sketch6} className="pb-5" alt={""} />
            Finally, he presses the green button to confirm his payment, and the
            green light bulb begins flashing.
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.bigContainer}>
        <span
          className={lo.className + " text-center pb-10 text-6xl font-bold"}
        >
          Looking Back At It
        </span>
        Although walking up to strangers and asking for interviews was a
        daunting task, this project highlighted the importance of these
        interviews and the role of personas and storyboards in helping designers
        create understanding and empathy with the end-users. I really understood
        how personas can put a “face” to the user story and allow design to gain
        different perspectives. I also appreciated how storyboards helped me
        capture the experience of a user at the parking meter.
      </div>
    </div>
  );
}
