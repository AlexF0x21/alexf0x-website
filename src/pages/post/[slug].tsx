import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostBySlug, getPosts } from '@/lib/post'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import { serialize } from 'next-mdx-remote/serialize'
import { Post } from '@/types/post'
import clsx from 'clsx'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { formatDate } from '@/utils/date'
import { TbCalendar } from 'react-icons/tb'
import Tags from '@/components/Tags'
import Link from 'next/link'

const Post = ({
  mdxSource,
  post,
}: {
  mdxSource: MDXRemoteSerializeResult
  post: Post
}) => {
  const title = `${post.title} - AlexF0x Blog`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={clsx('flex flex-col gap-2')}>
        <Image
          className={clsx('rounded-xl')}
          src={post.image}
          width={700}
          height={700}
          alt='Post image'
        />
        <h1>{post.title}</h1>
        <ul className={clsx('flex gap-2')}>
          <li className={clsx('flex gap-1')}>
            <TbCalendar /> {formatDate(post.published)}
          </li>
          <li>
            <Tags tags={post.tags} />
          </li>
        </ul>
      </div>
      <div className={clsx('prose dark:prose-invent mt-10')}>
        <MDXRemote {...mdxSource} />
      </div>
      <div className={clsx('flex justify-between')}>
        <Link
          className={clsx('link')}
          href={`https://github.com/AlexF0x21/alexf0x-website/edit/main/src/posts/${post.slug}.mdx`}
        >
          Edit post on GitHub
        </Link>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = getPosts()

  const paths = posts
    .map(post =>
      locales!.map(locale => ({
        params: { slug: post.slug },
        locale,
      }))
    )
    .flat()

  return { paths, fallback: false }
}

interface IParams extends NextParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as IParams

  const post = getPostBySlug(slug)

  const mdxSource = await serialize(post.content)

  return {
    props: {
      mdxSource,
      post: { ...post.data, slug },
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  }
}

export default Post
