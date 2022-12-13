import NavBar from "../navbar";
import Overview from "../overview";
import styles from "../../styles/Project.module.css";
import { Londrina_Outline } from "@next/font/google";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import { ArrowRightIcon } from "@heroicons/react/outline";
import frames from "../../public/detection/vid_frames.jpg";
import faces from "../../public/detection/face_frames.jpg";
import marked from "../../public/detection/face_marked_frames.jpg";
import arch from "../../public/detection/cnn.png";
import net from "../../public/detection/efficientnet.png";
import res from "../../public/detection/efficientnet.png";
import t1 from "../../public/detection/t1.png";
import t2 from "../../public/detection/t2.png";
import cm1 from "../../public/detection/Confusion.png";
import cv from "../../public/detection/ConfusionVideo.png";
import acc from "../../public/detection/Accuracy.png";
import pred from "../../public/detection/CNN_predictions.png";
import loss from "../../public/detection/Loss.png";
import mr from "../../public/detection/MapReduce_predictions.png";

const lo = Londrina_Outline({ weight: "400", subsets: ["latin"] });

export default function Detection() {
  return (
    <div className={styles.trans}>
      <div>
        <div className="flex p-10 justify-center text-center">
          <ul className="flex py-10 mt-10">
            <li className="mr-6">
              <Link href="/">
                <HomeIcon className="h-7 w-7 mx-2" />
              </Link>
            </li>
            <li className="mr-6">
              <Link href="#motivation">MOTIVATION</Link>
            </li>
            <li className="mr-6">
              <Link href="#goals">GOALS</Link>
            </li>
          </ul>
          <h1
            className={lo.className + " text-center text-8xl px-14 font-bold"}
          >
            DEEPFAKE
            <br></br>DETECTION
          </h1>
          <ul className="flex py-10 mt-10">
            <li className="mr-6">
              <Link href="#methodology">METHODOLOGY</Link>
            </li>
            <li className="mr-6">
              <Link href="#results">RESULTS</Link>
            </li>
          </ul>
        </div>
        <Overview
          tldr="We created an algorithm to predict whether a video with a human subjects is a deepfake. We utilized EfficientNetB0 as our base model and utilized a dataset created by Meta containing 124,000 total clips, some of which are deep fakes and others real. We pre-processed these videos by extracting the framing and cropping the faces."
          highlights={[
            "Achieved a testing accuracy of 0.9051 with our CNN model, with EfficientNetB0 at its head.",
            "Improved results by pre-processed data in using MTCNN to detect the faces, crop the area of interest, and plot the landmark features of the face.",
          ]}
        ></Overview>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="motivation">
          <span className={lo.className + " " + styles.title}>Motivation</span>
          <p>
            As deepfakes have gained visibility in popular media, the generated
            fake content with increasing scale and realism has challenged the
            veracity of legitimate information. The rapid development of Deep
            Neural Networks has made the process of creating convincing
            deepfakes easier and faster. Deepfakes have been weaponized for
            malicious purposes such as for fake news, pornography, and
            individual humiliation. Our motivation for creating a deep fake face
            detection model is to counteract this rising tide of misinformation.
            <br></br>
            <br></br>
            Given the strong association of faces to the identity of an
            individual, developing an effective deepfake detection for faces is
            critical to addressing serious privacy, security, and ethical
            concerns.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="goals">
          <span className={lo.className + " " + styles.title}>Goals</span>
          <ul>
            <li className="pb-2">
              1) Review existing literature on deepfake detection and select an
              algorithm to implement, tailoring it for deepfake facial detection
              with videos
            </li>
            <li className="pb-2">
              2) Find a diverse dataset with high-quality human subject videos.
            </li>
            <li>
              3) Extract real and fake faces from videos then split the real and
              fake datasets into our testing, training, and validation datasets.
            </li>
            <li className="pb-2">
              4) Use a CNN to train a deep fake detection model that can
              identify whether or not the faces are real or fake.
            </li>
            <li className="pb-2">
              5) Obtain an accuracy of more than 50% for our deepfake face
              detection model.
            </li>
          </ul>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="methodology">
          <span className={lo.className + " " + styles.title}>Methodology</span>
          We utilized 3,033 clips from a dataset created by Meta with 124,000
          total clips sourced from 3,426 paid actors, produced with eight facial
          modification algorithms, including several Deepfake, GAN-based, and
          non-learned methods.
          <br></br>
          <div className="flex pt-10">
            <div>
              <span className={" text-2xl font-bold pt-5"}>Step 1</span>
              <p>
                Convert videos to images from our dataset of real and deep fake
                videos.
              </p>
            </div>
            <ArrowRightIcon width={"5.5rem"} className="pr-5"></ArrowRightIcon>
            <div>
              <span className={" text-2xl font-bold pt-5"}>Step 2</span>
              <p>
                Use face detector MTCNN to crop the faces out of the images.
              </p>
            </div>
            <ArrowRightIcon width={"5.5rem"} className="pr-5"></ArrowRightIcon>
            <div>
              <span className={" text-2xl font-bold pt-5"}>Step 3</span>
              <p>
                Use MTCNN to extract facial features and plot these landmarks on
                the face.
              </p>
            </div>
            <ArrowRightIcon width={"5.5rem"} className="pr-5"></ArrowRightIcon>
            <div>
              <span className={" text-2xl font-bold pt-5"}>Step 4</span>
              <p>
                Split our data into real/fake, then testing, training, and
                validation sets.
              </p>
            </div>
            <ArrowRightIcon width={"5.5rem"} className="pr-5"></ArrowRightIcon>
            <div>
              <span className={" text-2xl font-bold pt-5"}>Step 5</span>
              <p>Used a CNN EfficientNetB0 to train our model.</p>
            </div>
            <ArrowRightIcon
              width={"6rem"}
              className="pl-3 pr-5"
            ></ArrowRightIcon>
            <div>
              <span className={" text-2xl font-bold pt-5"}>Step 6</span>
              <p>
                Used MapReduce to turn real/fake predictions on faces to videos
              </p>
            </div>
          </div>
          <p className="pt-10">
            To begin, Step 1 of our code then converts each video to 11 image
            frames, and resizes them based on the video dimensions. Capturing
            video frames and resizing them are both done using the cv2 Python
            package.
          </p>
          <br></br>
          <br></br>
          <p>
            For Step 2, we use Python package MTCNN to detect faces and obtain
            the coordinates of a face box. We then crop the area around the face
            to preserve just the area of interest. The way MTCNN works is that
            first, some proposed areas that could have a face are selected, and
            then fed through the second network which filters these options and
            creates bounding boxes. Then a final layer performs the final
            detection and makes the bounding boxes containing the faces more
            precise.
          </p>
          <p>
            <br></br>
            <br></br>
            In Step 3, we attempted two different photo-processing versions to
            pass through our CNN - one with red dots highlighting the facial
            features, and one without. We use MTCNN to detect and extract facial
            features to be used in our dataset. MTCNN works by selecting
            proposed areas that could have a face, then passing these areas
            though networks that create a bounding box around the face and
            extract the features.
          </p>
          <br></br>
          <br></br>
          <div className={styles.larger + " grid grid-cols-3 gap-5 -mr-10"}>
            <div className={styles.firstImg}>
              <Image src={frames} className="pb-2" alt="" />
              Step 1: Extracted frames from 3 videos.
            </div>
            <div className={styles.detection}>
              <Image src={faces} className="pb-2" alt={""} />
              Step 2: Extracted faces from the frames and cropped.
            </div>
            <div className={styles.detection}>
              <Image src={marked} className="pb-2" alt={""} />
              Step 3: Extracted faces from the frames with red dots plotted on
              the key landmarks of the face.
            </div>
          </div>
          <br></br>
          <br></br>
          <p>
            Once we crop the faces, Step 4 is to prepare our real and fake
            directories, then split this data into test, train, and validation
            sets. We kept the frames belonging to a single video together, by
            splitting these alphabetically - if 11 frames were taken from a
            single video and 11 faces cropped from those, then all 11 would go
            into either test, train, or val. Finally, with the data split into
            train/test/val, each directory having subdirectories for fake/real,
            we were able to run our CNN.
            <br></br>
            <br></br>
            In Step 5, we used Google&apos;s EfficientNetB0 as the head of our
            CNN to predict the real vs fake images. EfficientNet-b0 uses a
            compound scaling method to uniformly scale the dimensions of the CNN
            and therefore improve efficiency and accuracy. The network can
            easily classify images into 1000 object categories, such as
            keyboard, mouse, pencil, and many animals, and as a result, the
            network has learned rich feature representations for a wide range of
            images. We decided EfficientNetB0 was best fit for our binary
            classification because it provides higher accuracy than many known
            models due to its clever scaling at depth, width, and resolution
            task.
          </p>
          <br></br>
          <br></br>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <Image src={net} className="pb-2" alt={""} />
              Architecture of EfficientNetB0.
            </div>
            <div>
              <Image
                src={arch}
                className={styles.inverted + " pb-2"}
                alt={""}
              />
              Architecture of our CNN.
            </div>
          </div>
          <br></br>
          <br></br>
          <p>
            Our final architecture is a Dense layer with 512 units,
            Dropout(0.2), Dense with 128 units, then a Dense layer with 1 unit
            and sigmoid activation in order to obtain results in a range of 0 to
            1. If the result is closer to 1, it is more likely to be real, while
            closer to 0 is more likely to be fake. This archi- tecture was
            compiled with the Adam optimizer (learning rate of 0.001) and the
            loss function was binary crossentropy. This was run for 20 epochs,
            and early stopping kicked in after 7 epochs without progress.
          </p>
          <p>
            <br></br>
            <br></br>
            Lastly, in Step 6, we used the technique MapReduce to concatenate
            and average the predictions of each image corresponding to a video.
            From this, we generate the accuracy for video predictions, accuracy
            rate on real/fake videos, average pre- dictions on real/fake videos
            (real should be close to 1, fake close to 0), and a confusion
            matrix.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer} id="results">
          <span className={lo.className + " " + styles.title}>Results</span>
          <p>
            Our CNN yielded pretty accurate classification. The CNN had
            4,771,229 parameters, and the testing/validation sets had 216 fake,
            216 real items to predict on each. The training set had 1,728 fake
            and 1,728 real faces. In one run of the CNN, we obtained maximum
            training accuracy of 0.9352, and maximum validation accuracy of
            0.9585. On our predictions on the testing set, 391 out of 432
            guesses were correct, with a testing accuracy of 0.9051 (guesses
            were rounded to determine if they were correctly labeled 1 or 0).
            These CNN training and test results are visualized below.
          </p>
          <div className={styles.trans}>
            <div className="grid grid-cols-2">
              <div>
                <Image src={acc} alt={""} />
                Accuracy Functions from CNN training. Run on a total of 20
                epochs, with early stopping at 14 (after 7 epochs without
                improvement).
              </div>
              <div>
                <Image src={loss} alt={""} />
                Loss Functions from CNN training. Run on a total of 20 epochs,
                with early stopping at 14 (after 7 epochs without improvement).
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <Image src={cm1} className="pb-2" alt={""} />
                Confusion Matrix for predictions on each face after rounding
                decimal place output, out of the 432-face testing set.
              </div>
              <div>
                <Image src={cv} className="pb-2" alt={""} />
                Confusion Matrix for predictions on each video by averaging the
                predictions for each face frame from a video, out of 39 total
                videos.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bigContainer}>
          <span className={lo.className + " " + styles.title}>
            Looking Back At It
          </span>
          With this project, we created a deepfake face detector that achieves
          an accuracy of 90%. We used a CNN to train this model to categorize
          photos of faces as real or fake. Deepfakes have many negative and
          dangerous uses in society, and it can be difficult to determine real
          vs fake images by just looking at them. Having a deepfake face
          detector is important in this case to prevent spread of fake images
          that can be misused. Going forward, this technology will positively
          impact many people, including social media users and news platforms.
        </div>
      </div>
    </div>
  );
}
