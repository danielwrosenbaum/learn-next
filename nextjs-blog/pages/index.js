import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey there! I'm Daniel. I'm a full-stack web developer who loves to build websites and projects!
          You can contact me via <a href="https://www.linkedin.com/in/danielwrosenbaum/">linkedIn</a>.
        </p>
        <div>Check out my <a href="https://github.com/danielwrosenbaum">GitHub</a>!</div>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
