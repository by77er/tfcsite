import { Fira_Sans } from '@next/font/google'
import styles from './page.module.css'

const fira = Fira_Sans({ subsets: ['latin'], weight: "400" });

export default function Home() {
  return (
    <main>
      <section className={styles.heroContainer}>
        <img src="/tfc_logo.png" alt="TFC Logo" className={styles.heroImage} />
        <h1 className={`${fira.className} ${styles.heroTitle}`}>Tampa Furry Club</h1>
        <hr className={styles.heroHr}/>
        <p className={`${fira.className} ${styles.heroDesc}`}>
          Looking to meet furries in Tampa, FL? Here we are.
        </p>
        <div className={styles.arrowDown}></div>
        <a href="https://discord.gg/vq2q3qnynG">
          <button className={`${fira.className} ${styles.discordButton}`}>
            Join on Discord
            <img src="/discord.png" className={styles.discordIcon}></img>
          </button>
        </a>
      </section>
    </main>
  )
}
