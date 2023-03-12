import Link from 'next/link'
import Post from '@/pages/post/[slug]'
import clsx from 'clsx'

const Tags = ({ tags }: { tags: Post['tags'] }) => {
  return (
    <div className={clsx('flex gap-2')}>
      {tags.map((tag, idx) => (
        <Link
          key={idx}
          className={clsx(
            'bg-orange-600/20 text-orange-600 px-2 rounded-xl hover:underline'
          )}
          href={`/tags/${tag}`}
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}

export default Tags
