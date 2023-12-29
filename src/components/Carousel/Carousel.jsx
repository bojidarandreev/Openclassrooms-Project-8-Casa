import './carousel.css';
import Photo from '../../assets/colors.jpg'
import Photo2 from '../../assets/slide1.jpg'

export default function Carousel() {

  return (
    <>
    <section>
      <div id="banner">
        <img src="./assets/images/arrow_left.png" alt="left arrow" className="arrow arrow_left" />
        <img src="./assets/images/arrow_right.png" alt="right arrow" className="arrow arrow_right" />
        <img className="banner-img" src={Photo} alt="Banner Print-it" />
        <p>Impressions tous formats <span>en boutique et en ligne</span></p>
        <div className="dots">
        </div>
      </div>
    </section>
    {/* <script src="./assets/script.js"></script> */}
    </>

  )
}


