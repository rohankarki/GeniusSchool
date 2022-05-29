import Link from "../pages/About";
import Image from "next/image";
import Head from "next/head";

const Navbar = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width"
          initial-scale="1.0"
        />
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
      <div>
        {/* <nav>
           <input type="checkbox" id="check"/>
           <label htmlFor="check" className="checkbtn">
             <i className="fas fa-bars" id="bars"></i>
           </label>
        <div className='imageslogo'>
            <Image src="/schoologo.png" width={90} height={90} layoout="responsive"/>
            </div>
          <div className="topnav" id="myTopnav">
          <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Notices">Notices</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
          </div>
        </nav>  */}

        <nav className="nav">
          <div class="containers">
            <div class="logo">
              <img src="download.jpeg" class="imagelogo" />
            </div>
            <div class="main_list" id="mainListDiv">
              <ul>
                <li>
                  <a class="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/About">About</a>
                </li>
                <li>
                  <a href="/Notices">Notices</a>
                </li>
                <li>
                  <a href="/Gallery">Gallery</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
            </div>
            <div class="media_button">
              <button class="main_media_button" id="mediaButton">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
        <script src="rohan.js"></script>
      </div>
    </>
  );
};

export default Navbar;
