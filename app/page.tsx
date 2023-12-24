import { sortPosts, allCoreContent, coreContent } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs, Authors } from 'contentlayer/generated'
import Main from './Main'
import AuthorLayout from '@/layouts/AuthorLayout'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

export default async function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
