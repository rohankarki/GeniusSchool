import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.logomaker} id="logomakers">
          <div className="imageslogo">
            <Image
              src="/schoologo.png"
              width={90}
              height={90}
              layoout="responsive"
              id="imageslogo"
            />
          </div>
          <div className={styles.logofooter} id="logosmaker">
            Genus English Medium School
          </div>
        </div>
        <div className="lasts">
          <ul>
            <li>
              <a class="active" href="/index.js">
                Home
              </a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="#">Notices</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <div className="fc">
              <a> @Copyright2022</a>
            </div>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
