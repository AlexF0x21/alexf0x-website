import clsx from 'clsx'
import Image from 'next/image'
import { Post } from '@/types/post'
import Link from 'next/link'

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={clsx('grid  md:grid-cols-3 gap-5')}>
      {posts.map(post => (
        <Link
          key={post.slug}
          className={clsx(
            'flex flex-col bg-zinc-400/20 dark:bg-zinc-700/30 gap-2 rounded-xl'
          )}
          href={`/post/${post.slug}`}
        >
          <Image
            className={clsx('rounded-t-lg')}
            src={post.image}
            alt='Стив из майнкрафт'
            width={500}
            height={500}
          />
          <div className={clsx('p-5')}>
            <h2 className={clsx('mb-1')}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostList
