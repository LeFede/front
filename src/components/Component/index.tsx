import { useState } from 'react'

type ComponentChildren =
  | Array<React.ReactElement<HTMLParagraphElement>>
  | React.ReactElement<HTMLParagraphElement>

interface ComponentProps {
  title: string
  action: () => void
  children: ComponentChildren
}

export const Component = ({ title, children, action }: ComponentProps) => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
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
