import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.heroContainer}>
        <img src="/tfc_logo.png" alt="Tampa Furry Club Logo" className={styles.heroImage} />
        <p className={`${styles.heroDesc}`}>
          Looking for furries in Tampa?
        </p>
        <a href="https://discord.gg/vq2q3qnynG">
          <button className={`${styles.discordButton}`}>
            Join Our Discord!
            <img src="/discord.png" alt="" className={styles.discordIcon}></img>
          </button>
        </a>
      </div>
    </main>
  )
}
