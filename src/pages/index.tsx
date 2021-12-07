import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main>
        <section>
          <span> 👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for $9.90 month</span>

          </p>
        </section>

        <img src="/images/Mulher.svg" alt="avatar"/>
      </main>
    </>  

  )
}
