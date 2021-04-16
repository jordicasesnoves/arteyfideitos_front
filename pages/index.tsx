import Head from 'next/head'

const HomePage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Fideitos" />
        <title>Fideitos Web - Home Page</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href={`/favicon.png`}
          sizes="64x64"
        />
      </Head>
      <div>Fideitos Web!</div>
    </div>
  )
}

export default HomePage
