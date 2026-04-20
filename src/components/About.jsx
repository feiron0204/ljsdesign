import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <p className={styles.sub}>ABOUT</p>
          <h2 className={styles.title}>흙에서 예술로</h2>
          <p className={styles.body}>
            저희 작업실은 경기도 이천에 자리 잡고 있습니다. 20년 넘게
            전통 도자기를 연구해 온 장인이 직접 흙을 고르고, 물레를
            돌리고, 유약을 입혀 한 점 한 점 완성합니다.
          </p>
          <p className={styles.body}>
            미니어쳐 도자기는 크기는 작지만, 담긴 정성은 어느 작품
            못지않습니다. 손가락 두 마디 크기 안에 전통의 아름다움을
            온전히 녹여냅니다.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.num}>20+</span>
              <span className={styles.label}>년 경력</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.num}>500+</span>
              <span className={styles.label}>완성 작품</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.num}>100%</span>
              <span className={styles.label}>수작업</span>
            </div>
          </div>
        </div>
        <div className={styles.imgBox}>
          <span className={styles.bigEmoji}>🏺</span>
          <div className={styles.badge}>이천 도자기 명인 인증</div>
        </div>
      </div>
    </section>
  )
}
