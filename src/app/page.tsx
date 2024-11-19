import { getAllTopics } from '@/actions/topicActions'
import { Metadata } from 'next'
import { Suspense } from 'react'
import TopicsList from '@/components/TopicsList'

export const metadata: Metadata = {
  title: 'WebDev Topics | MongoDB CRUD example',
  description: 'A simple CRUD application using Next.js and MongoDB',
}

export default async function Home() {
  const { topics } = await getAllTopics()

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD exmaple</p>
      <Suspense fallback={<div>로딩 중...</div>}>
        <TopicsList topics={topics} />
      </Suspense>
    </main>
  )
}
