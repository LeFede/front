export const Pico = () => {
  // document.getElementById('indeterminate-checkbox').indeterminate = true;

  return (
    <main className="container">
      <section>
        <hgroup>
          <h2>Heading 2</h2>
          <h3>Subtitle for heading 2</h3>
        </hgroup>
      </section>

      <section>
        <abbr title="asd">abbr</abbr>
        <mark>mark</mark>
        <strong>strong</strong>
        <b>b</b>
        <s>Strikethrough</s>
        <i>Italic</i>
        <em>Em</em>
        <cite>Cite</cite>
        <small>small</small>
        <del>del</del>
        <sub>sub</sub>
        <ins>ins</ins>
        <sup>sup</sup>
        <kbd>kbd</kbd>
        <u>u</u>
      </section>

      <section>
        <a href="#">Primary</a>
        <a href="#" className="secondary">
          Secondary
        </a>
        <a href="#" className="contrast">
          Contrast
        </a>
      </section>

      <section>
        <blockquote>
          &quot;Maecenas vehicula metus tellus, vitae congue turpis hendrerit
          non. Nam at dui <a href="#">sit</a> amet ipsum cursus ornare.&quot;
          <footer>
            <cite>- Phasellus eget lacinia</cite>
          </footer>
        </blockquote>
      </section>

      <section>
        <button>Button</button>
        <input type="submit" />
        <a href="#" role="button" className="secondary">
          Secondary
        </a>
        <a href="#" role="button" className="contrast">
          Contrast
        </a>
        <a href="#" role="button" className="outline">
          Primary
        </a>
        <a href="#" role="button" className="secondary outline">
          Secondary
        </a>
        <a href="#" role="button" className="contrast outline">
          Contrast
        </a>
      </section>

      <section>
        <form>
          <div className="grid">
            <label htmlFor="firstname">
              First name
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                required
              />
            </label>

            <label htmlFor="lastname">
              Last name
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                required
              />
            </label>
          </div>

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
          />
          <small>We&apos;ll never share your email with anyone else.</small>

          <button type="submit">Submit</button>

          <div className="grid">
            <input type="text" placeholder="Valid" aria-invalid="false" />
            <input type="text" placeholder="Invalid" aria-invalid="true" />
            <input type="text" placeholder="Disabled" disabled />
            <input type="text" value="Readonly" readOnly />
          </div>
        </form>
      </section>

      <section>
        <label htmlFor="fruit">Fruit</label>
        <select id="fruit" required>
          <option value="" selected>
            Select a fruit…
          </option>
          <option>…</option>
        </select>

        <fieldset>
          <legend>Size</legend>
          <label htmlFor="small">
            <input type="radio" id="small" name="size" value="small" checked />
            Small
          </label>
          <label htmlFor="medium">
            <input type="radio" id="medium" name="size" value="medium" />
            Medium
          </label>
          <label htmlFor="large">
            <input type="radio" id="large" name="size" value="large" />
            Large
          </label>
          <label htmlFor="extralarge">
            <input
              type="radio"
              id="extralarge"
              name="size"
              value="extralarge"
              disabled
            />
            Extra Large
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" />I agree to the
            Terms and Conditions
          </label>
          <label htmlFor="terms_sharing">
            <input
              type="checkbox"
              id="terms_sharing"
              name="terms_sharing"
              disabled
              checked
            />
            I agree to share my information with partners
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="switch">
            <input type="checkbox" id="switch" name="switch" role="switch" />
            Publish on my profile
          </label>
          <label htmlFor="switch_disabled">
            <input
              type="checkbox"
              id="switch_disabled"
              name="switch_disabled"
              role="switch_disabled"
              disabled
              checked
            />
            User must change password at next logon
          </label>
        </fieldset>
      </section>

      <section>
        <input type="search" id="search" name="search" placeholder="Search" />

        <label htmlFor="file">
          File browser
          <input type="file" id="file" name="file" />
        </label>

        <label htmlFor="range">
          Range slider
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            id="range"
            name="range"
          />
        </label>

        <label htmlFor="date">
          Date
          <input type="date" id="date" name="date" />
        </label>

        <label htmlFor="time">
          Time
          <input type="time" id="time" name="time" />
        </label>

        <label htmlFor="color">
          Color
          <input type="color" id="color" name="color" value="#0eaaaa" />
        </label>
      </section>

      <section>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </section>

      <section>
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="col">#</th>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
            </tr>
          </tfoot>
        </table>
      </section>

      <section>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="col">#</th>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
              <td scope="col">Total</td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  )
}
