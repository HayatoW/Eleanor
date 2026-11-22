import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <h1>About Eleanor</h1>
      <p>This page is an example of file-based routing.</p>
    </>
  )
}
