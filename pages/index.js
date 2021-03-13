import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Components Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className={styles.title}>
         React Components Reference
        </h1>
      </main>
    </div>
  )
}

export default Home;