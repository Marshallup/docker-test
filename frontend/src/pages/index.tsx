import type { NextPage } from 'next'
import { useState } from 'react';
import Head from 'next/head'

const Home: NextPage = () => {
  const [data, setData] = useState([]);

  async function doFetch() {
    const url = `${String(process.env.NEXT_PUBLIC_API_URL)}/users/test`;

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setData(response);
        console.log(response, 'response')
      })
      .catch(error => {
        console.log(error.response, 'error');
      });
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <button onClick={doFetch}>Сделать запрос на бек</button>
          <h2>Ответ здесь:</h2>
          <pre>
            { JSON.stringify(data) }
          </pre>
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
