import { Nav } from '@/components'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <footer className="container-fluid">
        <hr />
        <ul className="container f sb">
          <a href="#">left</a>
          <small>&copy;2023 💬</small>
        </ul>
      </footer> */}
    </>
  )
}
