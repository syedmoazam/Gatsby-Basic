import React from "react"
import { Link } from "gatsby"
import { Layout } from "@components/Layout"
import * as styles from "@styles/home.module.scss"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Full Stack Developer based in Pakistan.</p>
          <Link to="/projects" className={styles.btn}>
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" />
      </section>
    </Layout>
  )
}
