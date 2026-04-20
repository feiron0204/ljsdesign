import styles from './Products.module.css'

const products = [
  {
    id: 1,
    name: '달항아리 미니어쳐',
    desc: '조선시대 전통 달항아리를 손바닥 위에 담았습니다. 은은한 백색 유약이 달빛을 닮았습니다.',
    price: '38,000원',
    emoji: '🏺',
  },
  {
    id: 2,
    name: '청자 찻잔 세트',
    desc: '고려청자의 비색을 재현한 미니어쳐 찻잔 2점 세트. 실제 사용 가능한 크기입니다.',
    price: '52,000원',
    emoji: '🍵',
  },
  {
    id: 3,
    name: '분청사기 화병',
    desc: '분청사기 특유의 자연스러운 문양을 살린 작은 화병. 작은 꽃 한 송이를 꽂기 딱 좋습니다.',
    price: '45,000원',
    emoji: '🌸',
  },
  {
    id: 4,
    name: '백자 소반',
    desc: '순백의 백자로 만든 앙증맞은 소반. 미니어쳐 찻자리를 꾸미기에 완벽합니다.',
    price: '29,000원',
    emoji: '🫙',
  },
  {
    id: 5,
    name: '옹기 항아리 3종',
    desc: '크기가 다른 세 개의 옹기 미니어쳐 세트. 전통 장독대 분위기를 연출합니다.',
    price: '61,000원',
    emoji: '🏛️',
  },
  {
    id: 6,
    name: '제기 미니어쳐 세트',
    desc: '전통 제례 용기를 정밀하게 재현한 컬렉터용 세트. 받침대 포함.',
    price: '78,000원',
    emoji: '⚱️',
  },
]

export default function Products() {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.sub}>COLLECTION</p>
        <h2 className={styles.title}>작품 컬렉션</h2>
        <p className={styles.desc}>모든 작품은 수작업으로 제작되며, 세상에 하나뿐인 도자기입니다.</p>
      </div>
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.imgBox}>
              <span className={styles.emoji}>{p.emoji}</span>
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.footer}>
                <span className={styles.price}>{p.price}</span>
                <button className={styles.btn}>문의하기</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
