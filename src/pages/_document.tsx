import { Head, Html, Main, NextScript } from 'next/document'
import clsx from 'clsx'

const Document = () => {
  return (
    <Html className={clsx('scroll-smooth')}>
      <Head>
        <link rel='alternate' href='https://alexf0x.ru/' hrefLang='ru' />
        <link rel='alternate' href='https://alexf0x.ru/en' hrefLang='en' />
        <link rel='alternate' href='https://alexf0x.ru/' hrefLang='x-default' />
      </Head>
      <body
        className={clsx(
          'bg-white dark:bg-zinc-900 text-lg selection:bg-orange-500/20'
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
