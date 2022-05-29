import Head from "next/head";
import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Document from "next/document";


export default function Home() {
  let slideIndex = 1;
  showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  // let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <div className='slider'>
     <div class="mySlides">
     <img
            src="/chalk.jpeg"
            alt="First Slider"
            className="imageresponsive"
          />
      </div>
      <div class="mySlides">
      <img
            src="/4.jpeg"
            alt="First Slider"
            className="imageresponsive"
          />
      </div>
      <div class="mySlides">
      <img
            src="/5.jpeg"
            alt="First Slider"
            className="imageresponsive"
          />
      </div>
      <a class="prev" onclick={plusSlides(-1)}>❮</a>
      <a class="next" onclick={plusSlides(1)}>❯</a>
   </div>

      <div className="message">
        <div className="mpic">
          <h1>Message From Principle</h1>
          <div className="box"></div>
        </div>
        <div className="mtext">
          <div className="left">
            <img src="principle.png" alt="Principle" />
          </div>
          <div className="right">
            <i className="fa fa-quote-left" id="leftquote"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ipsam mollitia minus quos, ex rem laudantium laboriosam eligendi
              nulla deleniti aliquam ab atque officia ipsa quaerat sit facilis
              dignissimos repellendus!
            </p>
            <i className="fa fa-quote-right" id="rightquote"></i>
            <h2>Susan Sharma</h2>
            <h3>Principal, Lotus English Medium School</h3>
          </div>
        </div>
      </div>

      <div className="ThirdContainer">
        <div className="cards">
          <h1>
            WHY US ?<p className={styles.box}></p>
          </h1>

          <div className="card">
            <div className="card1">
              <i className="fa fa-bus" id="bus"></i>
              <h4 className={styles.heading}>TRANSPORTATION FACILITY</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                exercitationem modi cum. Ut sunt, suscipit maxime, beatae vero
                adipisci quisquam, blanditiis iste debitis nobis dignissimos
                eaque quasi pariatur nulla asperiores.
              </p>
            </div>

            <div className="card2">
              <i className="fa fa-graduation-cap" id="cap"></i>
              <h4>EXTRAORINARY EDUCATION</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                exercitationem modi cum. Ut sunt, suscipit maxime, beatae vero
                adipisci quisquam, blanditiis iste debitis nobis dignissimos
                eaque quasi pariatur nulla asperiores.
              </p>
            </div>

            <div className="card3">
              <i className="fa fa-user" id="teacher"></i>
              <h4>TRAINED TEACHER'S</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                corrupti veniam fuga, ipsam mollitia cum, unde delectus nulla
                accusamus illo aperiam laudantium quidem reprehenderit amet ex
                molestias quos odit sapiente?
              </p>
            </div>

            <div className="card4">
              <i className="fa fa-bed" id="bed"></i>
              <h4>CLEAN HOSTEL FACILTY</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                dolorem amet sequi cupiditate temporibus nulla dolor nemo sed
                quia quaerat. Rerum deserunt incidunt quae eveniet laudantium
                neque consequuntur perferendis delectus?
              </p>
            </div>

            <div className="card5">
              <i className="fas fa-id-card-alt" id="security"></i>
              <h4>SECURITY</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                voluptates consequuntur alias nihil esse corrupti ex illo,
                voluptate asperiores voluptatibus ipsa est minus doloribus
                reiciendis eveniet aut ducimus sed ratione.
              </p>
            </div>
          </div>

          <div className="cards2">
            <div className="cards1">
              <i className="fas fa-bus" id="bus"></i>
              <h4>SECURITY</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                voluptates consequuntur alias nihil esse corrupti ex illo,
                voluptate asperiores voluptatibus ipsa est minus doloribus
                reiciendis eveniet aut ducimus sed ratione.
              </p>
            </div>

            <div className="cardss2">
              <i className="fas fa-bus" id="bus"></i>
              <h4>CLEAN HOSTEL FACILITY</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                voluptates consequuntur alias nihil esse corrupti ex illo,
                voluptate asperiores voluptatibus ipsa est minus doloribus
                reiciendis eveniet aut ducimus sed ratione.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="downcards">
        <h1>
          NOTICES AND EVENTS
          <p className={styles.box}></p>
        </h1>
        <div className="card">
          <div className="card1">
            {/* <i className="fa fa-bus" id='bus'></i> */}
            <i className="fa fa-bell" id="bus"></i>
            <h4>SPEAKING COMPETITION</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              exercitationem modi cum. Ut sunt, suscipit maxime, beatae vero
              adipisci quisquam, blanditiis iste debitis nobis dignissimos eaque
              quasi pariatur nulla asperiores.
            </p>
          </div>

          <div className="card2">
            <i className="fa fa-bell" id="cap"></i>
            <h4>DANCING COMPETITION</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              exercitationem modi cum. Ut sunt, suscipit maxime, beatae vero
              adipisci quisquam, blanditiis iste debitis nobis dignissimos eaque
              quasi pariatur nulla asperiores.
            </p>
          </div>

          <div className="card3">
            <i className="fa fa-bell" id="teacher"></i>
            <h4>SPORTS DAY</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              corrupti veniam fuga, ipsam mollitia cum, unde delectus nulla
              accusamus illo aperiam laudantium quidem reprehenderit amet ex
              molestias quos odit sapiente?
            </p>
          </div>

          <div className="card4">
            <i className="fa fa-bell" id="bed"></i>
            <h4>ANNUAL PROGRAM</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              dolorem amet sequi cupiditate temporibus nulla dolor nemo sed quia
              quaerat. Rerum deserunt incidunt quae eveniet laudantium neque
              consequuntur perferendis delectus?
            </p>
          </div>

          <div className="card5">
            <i className="fa fa-bell" id="security"></i>
            <h4>DEBATE COMPETITION</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              voluptates consequuntur alias nihil esse corrupti ex illo,
              voluptate asperiores voluptatibus ipsa est minus doloribus
              reiciendis eveniet aut ducimus sed ratione.
            </p>
          </div>
        </div>
        <div className="down">
          <Link href="">
            <a className={styles.button}>MORE NOTICES</a>
          </Link>
        </div>
      </div>

      <div className="lastcontainer">
        <Image
          src="/5.jpeg"
          alt="First Slider"
          width={40}
          height={10}
          layout="responsive"
        />
        <div className="texts">
          <div className="lefts">
            <i className="fa fa-quote-left" id="leftquotes"></i>
          </div>
          <h1>GENIUS EDUCATION MAKES SINCERE</h1>
          <div className="rights">
            <i className="fa fa-quote-right" id="rightquotes"></i>
          </div>
        </div>
      </div>
      
    </>
  );
}

