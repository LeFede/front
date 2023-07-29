import { Slider } from '@/components'
import { useInView } from 'react-intersection-observer'

export const Page = () => {
  const { ref, inView } = useInView({
    threshold: 1,
    //  triggerOnce: true,
    rootMargin: '-100px 0px -100px 0px',
  })

  return (
    <main className="container">
      <div>
        <section>
          <hgroup>
            <h1>Greetings folk!</h1>
            <h2>dream a better world</h2>
          </hgroup>
          <p>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.&quot;
          </p>
        </section>
        <section>
          <hgroup>
            <h2>Climb 🧗</h2>
            <h3>things are easier now</h3>
          </hgroup>
          <p>
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?&quot;
          </p>
        </section>
        <section>
          <hgroup>
            <h2 ref={ref} className={`${inView ? 'inView' : ''} hide`}>
              Escalate quickly 📈
            </h2>
            <h3 className={`${inView ? 'inView' : ''} hide`}>enroll with us</h3>
          </hgroup>
          <p>
            &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?&quot;
          </p>
        </section>

        <Slider />
      </div>
      {/* <Component title="hola" action={doSomething}>
        <p>hola</p>
      </Component>

      <Form /> */}
    </main>
  )
}
