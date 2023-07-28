/// <reference types="vite/client" />

interface ClickEvent<T> extends React.MouseEvent<T, MouseEvent> {
  target: HTMLElement
}
