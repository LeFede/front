import { useToggle } from '@/hooks'

export const Component = ({ title, children, action }: ComponentProps) => {
  const [show, toggle] = useToggle(false)

  const handleShow = () => {
    toggle()
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleShow}>{show ? 'Hide' : 'Show'}</button>
      {show && children}
      <button onClick={action}>Click</button>
    </div>
  )
}
