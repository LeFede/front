/// <reference types="vite/client" />

interface ClickEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {
  target: HTMLElement
}
