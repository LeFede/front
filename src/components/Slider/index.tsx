import { slide1, slide2, slide3, slide4 } from '@/assets'
import { type DragEvent } from 'react'
import styles from './Slider.module.css'

// TODO: fix scroll stop on page scroll
// TODO: change alt text
export const Slider = () => {
  const handleBlur = (
    e: ClickEvent<HTMLAnchorElement> | DragEvent<HTMLAnchorElement>,
  ) => {
    ;(() => {
      const a = e.currentTarget
      setTimeout(() => {
        a.blur()
      }, 0)
    })()
  }

  return (
    <section className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <img id="slide1" src={slide1} alt="3D" draggable="false" />
          <img id="slide2" src={slide2} alt="3D" draggable="false" />
          <img id="slide3" src={slide3} alt="3D" draggable="false" />
          <img id="slide4" src={slide4} alt="3D" draggable="false" />
        </div>
        <div className={styles.sliderNav}>
          <a
            draggable="false"
            href="#slide1"
            onDragEnd={handleBlur}
            onMouseDown={handleBlur}
          ></a>

          <a
            draggable="false"
            href="#slide2"
            onDragEnd={handleBlur}
            onMouseDown={handleBlur}
          ></a>

          <a
            draggable="false"
            href="#slide3"
            onDragEnd={handleBlur}
            onMouseDown={handleBlur}
          ></a>
        </div>
      </div>
    </section>
  )
}
