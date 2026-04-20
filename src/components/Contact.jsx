import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sub}>CONTACT</p>
        <h2 className={styles.title}>구매 및 문의</h2>
        <p className={styles.desc}>
          모든 작품은 주문 제작 방식으로 진행됩니다.<br />
          원하시는 작품이나 커스텀 주문은 아래로 문의해 주세요.
        </p>
        <div className={styles.info}>
          <div className={styles.item}>
            <span className={styles.icon}>📍</span>
            <span>경기도 이천시 도자예술로 12</span>
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>📞</span>
            <span>031-000-0000</span>
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>✉️</span>
            <span>hello@miniature-ceramic.kr</span>
          </div>
          <div className={styles.item}>
            <span className={styles.icon}>🕐</span>
            <span>월~토 10:00 – 18:00</span>
          </div>
        </div>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input className={styles.input} type="text" placeholder="이름" required />
          <input className={styles.input} type="tel" placeholder="연락처" required />
          <textarea className={styles.textarea} placeholder="문의 내용" rows={4} required />
          <button className={styles.submit} type="submit">문의 보내기</button>
        </form>
      </div>
      <footer className={styles.footer}>
        <p>© 2024 미니어쳐 도자기. All rights reserved.</p>
      </footer>
    </section>
  )
}
