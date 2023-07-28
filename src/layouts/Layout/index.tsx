import { Nav } from '@/components'
import { useCounterStore } from '@/store'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  const { count, increment, decrement } = useCounterStore()

  const handleIncrement = (_: ClickEvent<HTMLButtonElement>) => {
    increment(1)
  }
  const handleDecrement = (a: ClickEvent<HTMLButtonElement>) => {
    decrement(1)
  }

  return (
    <>
      {count}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
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
