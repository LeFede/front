import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/pico">Pico</Link>
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
  )
}
