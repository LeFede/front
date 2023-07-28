import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <a href="#">Link1</a>
          </li>
          <li>
            <a href="#">Link2</a>
          </li>
          <li>
            <a href="#">Link3</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Link4</a>
          </li>
          <li>
            <a href="#">Link5</a>
          </li>
          <li>
            <a href="#">Link6</a>
          </li>
        </ul>
      </nav>
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
