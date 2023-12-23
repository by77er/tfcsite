import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.heroContainer}>
        <img src="/tfc_logo.png" alt="Tampa Furry Club Logo" className={styles.heroImage} />
        <p className={`${styles.heroDesc}`}>
          Looking for furries in Tampa?
        </p>
        <div className={`${styles.flexContainer}`}>
          <a href="https://discord.gg/vq2q3qnynG">
            <button className={`${styles.linkButton} ${styles.discordButton}`}>
              <span>Discord Server</span>
              <img src="/discord.png" alt="" className={styles.buttonIcon}></img>
            </button>
          </a>
          <a href="https://t.me/+8ID4Z2VpbadlZmUx">
            <button className={`${styles.linkButton} ${styles.telegramButton}`}>
              <span>Telegram Feed</span>
              <img src="/telegram.png" alt="" className={styles.buttonIcon}></img>
            </button>
          </a>
        </div>
      </div>
    </main>
  )
}
