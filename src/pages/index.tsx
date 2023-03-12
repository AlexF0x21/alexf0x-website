import {
  FaDiscord,
  FaGithub,
  FaSteam,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa'
import Link from 'next/link'
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Trans, useTranslation } from 'next-i18next'
import Head from 'next/head'
import PostList from '@/components/PostList'
import { getPosts } from '@/lib/post'
import { Post } from '@/types/post'

const socials = [
  { icon: FaGithub, url: 'https://github.com/AlexF0x21' },
  { icon: FaTelegram, url: 'https://t.me/AlexF0x21' },
  { icon: FaSteam, url: 'https://steamcommunity.com/id/AlexF0x21' },
  { icon: FaDiscord, url: 'https://discord.io/AlexF0x' },
  { icon: FaYoutube, url: 'https://www.youtube.com/AlexF0x21' },
]

const Home = ({ posts }: { posts: Post[] }) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('home.title')}</title>
      </Head>
      <div className={clsx('py-56')}>
        <h1>
          <Trans
            i18nKey='home.greetings'
            components={{ name: <span className={clsx('text-orange-600')} /> }}
          />
        </h1>
        <p className={clsx('py-2')}>{t('home.about')}</p>
        <div className={clsx('flex gap-3')}>
          {socials.map((link, idx) => (
            <Link
              key={idx}
              className={clsx('icon-button')}
              href={link.url}
              target='_blank'
            >
              <link.icon className={clsx('w-7 h-7 md:w-8 md:h-8')} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className={clsx('mb-2')}>Посты</h2>
        <PostList posts={posts} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = getPosts()

  return {
    props: {
      posts: posts.map(post => ({ ...post.data, slug: post.slug })),
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default Home
