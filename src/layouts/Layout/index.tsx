import { Nav } from '@/components'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      {/* <div> */}
      <Toaster reverseOrder={true} />
      {/* </div> */}
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
