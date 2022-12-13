import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";
import bs2 from "../../public/iterative/bs2.jpg";
import bs3 from "../../public/iterative/bs3.jpg";
import bs4 from "../../public/iterative/bs4.jpg";
import bs5 from "../../public/iterative/bs5.jpg";
import bs6 from "../../public/iterative/bs6.png";
import bs7 from "../../public/iterative/bs7.png";
import bs8 from "../../public/iterative/bs8.png";
import bs9 from "../../public/iterative/bs9.png";
import bs10 from "../../public/iterative/bs10.png";
import bs11 from "../../public/iterative/bs11.png";
import bs12 from "../../public/iterative/bs12.png";
import bs13 from "../../public/iterative/bs13.png";
import bs14 from "../../public/iterative/bs14.png";
import Image from "next/image";
import Link from "next/link";
import s1 from "../../public/iterative/s1.png";
import s2 from "../../public/iterative/s2.png";
import s3 from "../../public/iterative/s3.png";
import s4 from "../../public/iterative/s4.png";
import s5 from "../../public/iterative/s5.png";
import w1 from "../../public/iterative/w1.png";
import w2 from "../../public/iterative/w2.png";
import w3 from "../../public/iterative/w3.png";
import { HomeIcon } from "@heroicons/react/outline";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Iterative() {
  return (
    <div>
      <div>
        <div className="flex p-10 justify-center text-center">
          <ul className="flex py-10 px-20">
            <li className="mr-6">
              <Link href="/">
                <HomeIcon className="h-6 w-6 mx-2" />
              </Link>
            </li>
            <li className="mr-6">
              <Link href="#background">BACKGROUND</Link>
            </li>
            <li className="mr-6">
              <Link href="#sketches">SKETCHES</Link>
            </li>
            <li className="mr-6">
              <Link href="#wireframes">WIREFRAMES</Link>
            </li>
          </ul>
          <h1 className={lo.className + " text-center text-8xl font-bold"}>
            LUNAJOY
          </h1>
          <ul className="flex py-10 px-20">
            <li className="mr-6">
              <Link href="#prototype">PROTOTYPES</Link>
            </li>
            <li className="mr-6">
              <Link href="#crit">CRITIQUE</Link>
            </li>
            <li className="mr-6">
              <Link href="#testing">USER TESTING</Link>
            </li>
          </ul>
        </div>
        <Overview
          tldr="In a group of four, I designed an interactive interface for LunaJoy, an emerging startup that provides mental health care for women. We iteratively designed the application and conducted usability testing through a remote user testing service. "
          highlights={[
            "Created an interactive, high-fidelity prototype after sketching out the interface and combining sketches into a wireframe.",
            "Conducted user testing and completed the design iteration process, incorporating feedback from our in-class critique.",
          ]}
        ></Overview>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="background">
          <span className={lo.className + " " + styles.title}>Background</span>
          <p>
            LunaJoy is a precision mental health platform that is specialized in
            women&apos;s mental health through all phases of life including
            adolescence, pregnancy, postpartum, infertility, miscarriage, loss,
            perimenopause, and aging. The startup focuses on delivering care by
            creating a specialized workforce to provide targeted psychotherapy,
            medication management + genetic testing, coaching, and holistic
            wellness. We&apos;re designing a mobile app for female identifying
            individuals to manage their mental health and to find the right help
            they need. We believe these users would be most impacted by our app
            because of our focus on the unique health issues that female
            identifying individuals experience through their different phases of
            life.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="sketches">
          <span className={lo.className + " " + styles.title}>Sketches</span>
          To get ideas flowing, we brainstormed a variety of possible designs
          for the mobile app. These designs show the key functionalities of the
          application. Each member of our group brainstormed different possible
          designs for our app, with the goal of reflecting as wide a variety of
          screens and layouts as possible.
          <div className="pt-10">
            <div className={styles.bs + " " + styles.trans}>
              <Image className="border" src={bs2} alt={""} />
              <Image className="border" src={bs4} alt={""} />
              <Image className="border" src={bs5} alt={""} />
              <Image src={bs6} alt={""} />
              <Image src={bs7} alt={""} />
              <Image src={bs8} alt={""} />
              {/* <Image src={bs9} />
              <Image src={bs10} />
              <Image src={bs11} /> */}
              <Image src={bs12} alt={""} />
              <Image src={bs13} alt={""} />
              <Image src={bs14} alt={""} />
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="wireframes">
          <span className={lo.className + " " + styles.title}>Wireframes</span>
          After brainstorming, we decided to merge our ideas and create a final
          lo-fi prototype. The prototype incorporates major design elements that
          demonstrate solutions to the startup’s goals.
          <div className={styles.wf + " " + styles.trans}>
            <img src="w1.png" />
            <img src="w2.png" />
            <img src="w3.png" />
          </div>
          We decided that matching users with therapists based on their survey
          responses would be the most critical feature for our app, given our
          startup’s focus on designing mental care for women. Users are
          redirected to a match with therapist page, where they can view the
          profile of their match. Users can then accept the match or opt to find
          another therapist.
          <br></br>
          <br></br>
          We also designed our homepage to feature a dashboard for users, with
          their menstrual cycle calendar and medication tracker, to easily
          access all their information in one place. This dashboard is meant to
          provide a holistic understanding of their mood and mental health.
          <br></br>
          <br></br>
          To create a seamless process for scheduling appointments, we decided
          to place upcoming appointment information on the homepage for easy
          access. Users are able to quickly view future appointments, schedule a
          new appointment, or reschedule current appointments.
          <br></br>
          <br></br>
          Lastly, we included a screen for health articles and medical advice to
          destigmatize women health issues and deliver trusted, comprehensive
          health information and resources for women.
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="prototype">
          <span className={lo.className + " " + styles.title}>Prototypes</span>
          <span className="text-3xl font-bold pt-5 pb-10">
            Interactive High-Fidelity Mockup
          </span>
          <p className="pb-10">
            Based on the wireframe, we created an interactive high-fidelity
            (hi-fi) prototype. As an enhanced version of our final wireframe, we
            populated it with realistic content using Figma by linking buttons,
            links, and other elements between screens. We designed the following
            screens to demonstrate the key interactions of your interface, but
            we did not include every possible screen.
          </p>
          <div className={"grid grid-cols-3 gap-8 pb-16 " + styles.screens}>
            {/* <div className={styles.wrapper}> */}
            <iframe
              className={styles.iframe}
              width="350"
              height="600"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbpqkYbWbyqzE2q0TKotIz4%2FIterative-Design%3Fpage-id%3D0%253A1%26node-id%3D9%253A2%26viewport%3D-286%252C565%252C0.8%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A2"
              allowFullScreen
            ></iframe>
            {/* </div> */}
            <img src="s1.png" />
            <img src="s2.png" />
            <img src="s3.png" />
            <img src="s4.png" />
            <img src="s5.png" />
          </div>
          <div className={styles.line}></div>
          <div className={styles.bigContainer} id="crit">
            <span className={lo.className + " " + styles.title}>
              Critique Evaluation
            </span>
            <p className="pb-5">
              During in-class design critique, we briefly introduced our startup
              and prototype and received feedback from our peers after they
              interacted with the prototype for 2 minutes. Some of the feedback
              we got from this interactive session is noted below.
            </p>
            <ul className={styles.bullets + " ml-10"}>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  It was initially difficult to navigate the different pages,
                  especially navigating from the Questionnaire page to the home
                  page. Having a navigation bar on every screen would have made
                  the navigation process more intuitive.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  There was confusion about what the circle on the menstrual
                  cycle means. Having an indication of the number of days that
                  elapsed after the last period would have been helpful.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  It would have been beneficial to have a checkmark on
                  medications after a user had taken them.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  Our <u>Learn More About your Cycle link</u> on the homepage
                  initially redirected users to the trending news page, which
                  resulted in confusion.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  It would have been helpful to have the questions appear one at
                  a time instead of all appearing on the same page.
                </p>
              </li>
              <li>
                <p className={styles.text + " text-base font-normal"}>
                  It was suggested that we included brief labels for the icons
                  on our navigation bar for clarity purposes.
                </p>
              </li>
            </ul>

            <p className="pt-5">
              To address the difficulty of navigation, we added more navigation
              elements, including back buttons and menu bars, such that users
              can always retrace their steps and return to the homepage. Because
              our original menu bar had no descriptive elements, we also made
              sure to add a caption under each menu items to clarify the meaning
              of the navigation icons.
              <br></br>
              <br></br>
              Since the menstrual cycle was difficult to understand, we added
              more visual designs to indicate where the cycle started and ended.
              We added small dots moving clockwise on the cycle tracker to
              indicate the current day of the cycle. In addition, we utilized
              color to indicate certain phases of the cycle. Red dots correspond
              to dates of the period and gray dots indicate days without
              menstruating.
              <br></br>
              <br></br>
              Finally, we added interactivity with the medication tracker so
              that a checkmark appears once the user has taken their medication,
              and addresses the misdirects and broken links.
            </p>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="testing">
          <span className={lo.className + " " + styles.title}>
            User Testing
          </span>
          Because having test users try out an interface is a valuable source of
          feedback, we continued to conduct our own usability test through a
          remote user testing service (UserTesting.com), using our newly
          created, interactive hi-fi prototype.
          <br></br>
          <br></br>
          We selected three overarching tasks for the users to complete on your
          interactive prototype.
          <br></br>
          <br></br>
          <ul>
            <li> 1) Fill out the questionnaire</li>
            <li>2) Match with a new therapist and contact them</li>
            <li>3) Find the trending news and read them</li>
          </ul>
          <br></br>
          We believe these tasks made up the primary function of the app, and we
          considered how our users will fare in performing these functions. We
          asked our users to rate the difficulty of the task on a 5-point rating
          scale and noted whether or not they completed the task successfully.
          <br></br>
          Finally, we asked them to answer the following questions following the
          user test.
          <br></br>
          <ul>
            <li>1) What frustrated you most about this site?</li>
            <li>
              2) If you had a magic wand, how would you improve this site?
            </li>
            <li>3) What did you like about the site?</li>
            <li>
              4) How likely are you to recommend this site to a friend or
              colleague (0=Not at all likely, and 10=Very likely)?
            </li>
          </ul>
          <br></br>
          <br></br>
          <div className="">
            <div>
              <span className="text-3xl font-bold pt-16 pb-10">User 1</span>
              <div className="flex flex-row py-10 pb-10">
                <iframe
                  className={styles.video + " pr-10"}
                  width="560"
                  height="300"
                  src="https://www.youtube.com/embed/6zW1TVsROb8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>
                  User one was able to complete all tasks with ease. They found
                  the app very user-friendly. It was easy to navigate to the
                  Trending News page because of the News icon in the navigation
                  bar. The user was able to fill out the questionnaire with
                  great ease and did not find the process overwhelming. The user
                  experienced some difficulties in checking off completed
                  medication. For a first-time user, it wasn’t clear how exactly
                  to check off the medication. The user expressed that having a
                  checkmark right next to the medication would make the task
                  more intuitive.
                </p>
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold pt-16 pb-10">User 2</span>
              <div className="flex flex-row py-10 pb-10">
                <iframe
                  className={styles.video + " pr-10"}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/p2ov14mNfOI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                User two thought the interface was well designed and had a nice
                aesthetic. They were able to understand the menu navigation bar,
                but wished that it stayed static on the screen. When completing
                the task of filling out the mental health questionare, they
                found that the interface navigation was intuitive and simple.
                They were able to successfully answer all questions to be
                matched with a therapist. User two was also able to complete the
                last task, checking off completed medication, but stated that it
                may be confusing for new users. User two believed that marking
                medications as complete would be easy for users to remember over
                time. This suggests that to improve usability and learnability,
                we should design the functionality for completing medication to
                be more obvious for users.
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold pt-16 pb-10">User 3</span>
              <div className="flex flex-row py-10">
                <iframe
                  className={styles.video + " pr-10"}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Pl_jguOYJ5s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                User three thought the interface was well-designed, clean, and
                organized. It was easy for her to find the button to schedule a
                new appointment, and she correctly assumed that the
                questionnaire was meant to match you with a therapist even
                though that was not stated directly in the questionnaire. She
                experienced some confusion in deciding which button (either the
                ‘Schedule Appointment’ or ‘Match with a new therapist’ button)
                to select at the end of the questionnaire. For the task in
                checking off completed medication, she was able to successfully
                and easily check off medications but had to decide whether to go
                to the ‘Home’ tab or the ‘Profile’ tab. She did say that it was
                easy to check off medication once she went to the right tab, but
                it might be confusing for a first-time user.
              </div>
            </div>
          </div>
          <span className="text-3xl font-bold pt-5 pb-10">Summary</span>
          Generally, the users thought the interface was aesthetically pleasing
          and easy to use, particularly the first and third tasks in which they
          could easily find the button and tab necessary to easily and
          successfully complete the tasks. For the second task, however, users
          found it to be more difficult because it wasn’t clear how to check off
          medication, with most of them recommending that check boxes be added
          next to the medication to make the task more intuitive, especially for
          first-time users.
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer}>
          <span className={lo.className + " " + styles.title}>
            Looking Back At It
          </span>
          Rather than building a product in one fell swoop and being done for
          good, I&apos;ve really understood iterative design as a methodology
          that positions the users&apos; digital experience as a living project
          that needs to be regularly tweak and improved upon. Iterative design
          is an ongoing, incremental process that challenges the idea of a
          finished product.
          <br></br>
          <br></br>In this project, I also saw how testing can provide a
          valuable collection of user feedback that we used to improve your app
          and to understand what was working and what wasn&apos;t. I genuinely
          enjoyed building this prototype for LunaJoy, as I believe in the value
          of an app for Holistic women&apos;s mental health therapy, counseling,
          and medication management.
        </div>
      </div>
    </div>
  );
}
