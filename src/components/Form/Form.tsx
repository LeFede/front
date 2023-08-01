import { ERRORS } from '@/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { z, type ZodType } from 'zod'
import { Modal } from '..'
import styles from './Form.module.css'

// TODO: find a way to better handle this
// separating data from the implementation

interface FormData {
  name: string
  password: string
  confirmPassword: string
}

const onlyAlphaNumericAndUnderscoreRegexp = (value: string) =>
  /^[A-Za-z0-9_]+$/.test(value)

const startsWithLetter = (value: string) => !/\d/.test(value[0])
const lengthRegexp = (min: number, max: number) => (value: string) =>
  new RegExp(`^.{${min},${max}}$`).test(value)
const emptyRegexp = (value: string) => value !== ''
const lengthRegexpN = (min: number, max: number) => lengthRegexp(min, max)

const schema: ZodType<FormData> = z
  .object({
    name: z
      .string()
      .refine(emptyRegexp, ERRORS.EMPTY)
      .refine(onlyAlphaNumericAndUnderscoreRegexp, ERRORS.ALPHANUMERIC)
      .refine(startsWithLetter, ERRORS.START_WITH_LETTER)
      .refine(lengthRegexpN(3, 30), ERRORS.NAME_LENGTH),
    // .max(30)
    password: z
      .string()
      .refine(emptyRegexp, ERRORS.EMPTY)
      .refine(lengthRegexpN(8, 30), ERRORS.PASSWORD_LENGTH),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERRORS.PASSWORDS_NOT_MATCH,
    path: ['confirmPassword'],
  })

export const Form = () => {
  const [showModal, setShowModal] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'onChange' })

  const onSubmit = (_: FormData) => {
    // alert(JSON.stringify(data))
    reset()
    // setShowModal(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* {fields.map(processFields)} */}
      <label>
        Name
        <input
          type={'text'}
          {...register('name')}
          placeholder="Name"
          id="name"
          {...(errors.name != null ? { 'aria-invalid': true } : {})}
        />
        {errors.name != null && <p>{errors.name.message}</p>}
      </label>
      <label>
        Password
        <input
          type="password"
          className={styles.label}
          {...register('password')}
          placeholder="Password"
          id="password"
          autoComplete="true"
          onChange={async (e) => {
            await register('password').onChange(e)
            await trigger('confirmPassword')
          }}
          {...(errors.password != null ? { 'aria-invalid': true } : {})}
        />
        <input className={styles.button} type="checkbox" />
        {errors.password != null && <p>{errors.password.message}</p>}
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirm Password"
          id="confirmPassword"
          autoComplete="true"
          {...(errors.confirmPassword != null ? { 'aria-invalid': true } : {})}
        />
        <input className={styles.button} type="checkbox" />
        {errors.confirmPassword != null && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </label>

      <button type="submit" id="submit">
        Submit
      </button>

      <Modal
        title="hello"
        leftButton="cancel"
        rightButton="😎"
        open={showModal}
        onOutsideClick={() => {
          // console.log('outside click')
          setShowModal(false)
          toast.error('Canceled')
        }}
        onCancel={() => {
          setShowModal(false)
          toast.error('Canceled')
        }}
        onAccept={() => {
          setShowModal(false)
          toast.success('Thank you!')
          reset()
        }}
        onClose={() => {
          setShowModal(false)
          toast.error('Canceled')
        }}
      >
        <p>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </p>
      </Modal>
    </form>
  )
}
