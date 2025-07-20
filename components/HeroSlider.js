import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: '/7.png',
    title: 'Cafe Furniture',
    description: 'Indulge in the ultimate cafe experience with our carefully selected collection of furniture, designed to elevate your space and create the perfect coffeehouse vibe.'
  },
  {
    id: 2,
    image: '/8.png',
    title: 'Restaurant Furniture',
    description: 'Create an exceptional dining atmosphere with our premium restaurant furniture collection, crafted for comfort, style, and durability.'
  },
  {
    id: 3,
    image: '/9.png',
    title: 'Hotel Furniture',
    description: 'Transform your hospitality space with our elegant hotel furniture designs that blend luxury, functionality, and timeless appeal.'
  }
];

export default function HeroSlider() {
  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`
        }}
        pagination={{ 
          clickable: true,
          el: `.${styles.swiperPagination}`
        }}
        className={styles.swiperContainer}
        speed={800}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.hero}>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className={styles.heroImage}
                  priority={index === 0}
                />
              </div>
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.description}>
                    {slide.description}
                  </p>
                  <button className={styles.cta}>View Collection</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation */}
        <div className={styles.swiperButtonPrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.swiperButtonNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Custom Pagination */}
        <div className={styles.swiperPagination}></div>
      </Swiper>
    </div>
  );
}
