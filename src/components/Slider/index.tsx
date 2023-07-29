import { slide1, slide2, slide3, slide4 } from '@/assets'
import styles from './Slider.module.css'

export const Slider = () => {
  return (
    <section className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <img id="slide1" src={slide1} alt="3D" />
          <img id="slide2" src={slide2} alt="3D" />
          <img id="slide3" src={slide3} alt="3D" />
          <img id="slide4" src={slide4} alt="3D" />
        </div>
        <div className={styles.sliderNav}>
          <a href="#slide1"></a>
          <a href="#slide2"></a>
          <a href="#slide3"></a>
        </div>
      </div>
    </section>
  )
}
