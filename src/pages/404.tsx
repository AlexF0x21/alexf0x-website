import clsx from 'clsx'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

const Error404 = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('error404.title')}</title>
      </Head>
      <div className={clsx('py-32 text-center')}>
        <h1>{t('error404.not-found')}</h1>
        <p className={clsx('py-2')}>{t('error404.not-found-detail')}</p>
        <Link
          className={clsx(
            'inline-flex px-4 py-2 bg-orange-600 rounded-xl text-white'
          )}
          href='/'
        >
          {t('error404.back-to-home')}
        </Link>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default Error404
