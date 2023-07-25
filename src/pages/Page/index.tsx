import { Component } from '@/components'

export const Page = () => {
  const doSomething = () => {}

  return (
    <>
      <h6>hello world</h6>
      <Component title="hola" action={doSomething}>
        <p>hola</p>
      </Component>
    </>
  )
}
