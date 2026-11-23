import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <h1>Eleanor</h1>
      <p>A single-page app built with React and TanStack Router.</p>
    </>
  )
}
