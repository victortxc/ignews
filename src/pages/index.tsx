import styles from './home.module.scss';
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all publications <br />
            <span>for $9.90 monthly</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}