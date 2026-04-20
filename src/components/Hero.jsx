import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.sub}>손으로 빚은 작은 예술</p>
        <h1 className={styles.title}>미니어쳐 도자기</h1>
        <p className={styles.desc}>
          자연에서 온 흙, 장인의 손길로 탄생한 작은 도자기 세계
        </p>
        <a href="#products" className={styles.btn}>작품 보기</a>
      </div>
    </section>
  )
}
