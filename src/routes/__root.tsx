import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

function RootLayout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand" activeOptions={{ exact: true }}>
          Eleanor
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/" activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="page">
        <Outlet />
      </main>
    </>
  )
}

function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p>This page does not exist.</p>
      <Link to="/">Back to home</Link>
    </>
  )
}
