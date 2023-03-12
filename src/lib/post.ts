import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getPosts = () => {
  const files = fs.readdirSync(path.join('src', 'posts'))

  const posts = files.map(file => {
    const post = fs.readFileSync(path.join('src', 'posts', file))

    const { data } = matter(post)

    return {
      slug: file.replace('.mdx', ''),
      data,
    }
  })

  return posts
}

export const getPostBySlug = (slug: string) => {
  const file = fs.readFileSync(path.join('src', 'posts', `${slug}.mdx`))

  const { data, content } = matter(file)

  return {
    data,
    content,
  }
}
