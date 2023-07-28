type ComponentChildren =
  | Array<React.ReactElement<HTMLParagraphElement>>
  | React.ReactElement<HTMLParagraphElement>

interface ComponentProps {
  title: string
  action: () => void
  children: ComponentChildren
}
