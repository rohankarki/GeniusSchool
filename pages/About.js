import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Script from "next/script";

const About = () => {
  return (
    <>
      <Head>
        <title>School | About</title>
        <meta name="keyword" content="About" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div>
        <div className="SliderContainer">
          
          <img
            src="/imagecontatc.jpeg"
            alt="First Slider"
            className="imageresponsive"
          />
          <div className="textimagecontact">
            <div className="imagesprinciple">
              <h1>
                <img src="iconsimage.png" id="imagesinside"></img>
              </h1>
            </div>
            <div className="textsprinciple">
              <i className="fa fa-quote-left" id="leftssquotess"></i>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloribus, cumque! Repellat vero eligendi at. Cupiditate officia
                inventore corrupti optio magnam deleniti esse iste eum possimus
                nesciunt quasi dolore, voluptates atque.
              </p>
              <i className="fa fa-quote-right" id="rightssquotess"></i>
            </div>
          </div>
        </div>

        <div className="AboutSchool">
          <div className={styles.titileandunderline}>
            <h1 className={styles.headings}>
              ABOUT SCHOOL
              <p className={styles.box}></p>
            </h1>
          </div>
          <div className="About">
            <div className="leftabout">
              <h1>
                <img src="schoolimage.jpeg" width="97%" height="290px"></img>
              </h1>
            </div>
            <div className="rightabout">
              <i className="fa fa-quote-left" id="leftssquotess"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus laborum voluptatum asperiores, blanditiis doloribus
                nulla quas doloremque omnis nam consectetur dicta placeat cumque
                assumenda eaque soluta ab. Eligendi, distinctio aperiam?
              </p>
              <i className="fa fa-quote-right" id="rightssquotess"></i>
              <h3>Rama Pokhrel</h3>
              <h4>Principal , Genius English Medium School</h4>
            </div>
          </div>
        </div>

        <div className="ourhistory">
          <div className={styles.titileandunderline}>
            <h1 className={styles.headings}>
              OUR HISTORY
              <p className={styles.box}></p>
            </h1>
          </div>
          <div className="boxes">
            <div className="boxes1">
              <h1>
                <img src="lovetolearn.jpeg" width="97%" height="290px"></img>
              </h1>
            </div>
            <div className="boxes2">
              <i className="fa fa-quote-left" id="leftssquotess"></i>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis, ducimus. Alias deserunt doloremque tempore sit
                obcaecati numquam accusamus quidem accusantium error itaque?
                Nisi, at quisquam eligendi qui amet explicabo vero?
              </p>
              <i className="fa fa-quote-right" id="rightssquotess"></i>
            </div>
          </div>
        </div>

        <div className="locationandcontacts">
          <div className={styles.titileandunderline}>
            <h1 className={styles.headings}>
              LOCATION AND CONTACTS
              <p className={styles.box}></p>
            </h1>
          </div>
          <div className="maps">
            {/* <h1>hello</h1> */}
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=New%20Baneshwor%20Rd,%20Kathmandu%2044600,%20Nepal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className={styles.titileandunderline}>
              <h1 className={styles.headings}>
                CONTATCS
                <p className={styles.box}></p>
              </h1>
            </div>

            <div className="contacts">
              <div className="num">
                <i classname="fa fa-phone" id="phone"></i>
                <h1> 01-4800147, +977-9841495786</h1>
              </div>
              <div className="gmail">
                <i classname="fa fa-envelope" id="mail"></i>
                <h2>Geniusschool@gmail.com</h2>
              </div>
            </div>
          </div>

          <div className="">
            <Image
              src="/chalk.jpeg"
              alt="First Slider"
              width={40}
              height={12}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
