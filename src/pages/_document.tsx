import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='alternate' href='https://alexf0x.ru/' hrefLang='ru' />
        <link rel='alternate' href='https://alexf0x.ru/en' hrefLang='en' />
        <link rel='alternate' href='https://alexf0x.ru/' hrefLang='x-default' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
