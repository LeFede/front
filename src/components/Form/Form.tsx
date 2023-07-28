import ERRORS from '@/errors'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z, type ZodType } from 'zod'
import styles from './Form.module.css'

// TODO: find a way to better handle this
// separating data from the implementation

interface FormData {
  name: string
  password: string
  confirmPassword: string
}

const schema: ZodType<FormData> = z
  .object({
    name: z
      .string()
      .refine((value) => value !== '', ERRORS.EMPTY)
      .refine((value) => /^[A-Za-z0-9_]+$/.test(value), ERRORS.ALPHANUMERIC)
      .refine((value) => !/\d/.test(value[0]), ERRORS.START_WITH_LETTER)
      .refine((value) => /^.{3,30}$/.test(value), ERRORS.NAME_LENGTH),
    // .max(30)
    password: z
      .string()
      .refine((value) => value !== '', ERRORS.EMPTY)
      .refine((value) => /.{8,30}/.test(value), ERRORS.PASSWORD_LENGTH),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: ERRORS.PASSWORDS_NOT_MATCH,
    path: ['confirmPassword'],
  })

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: 'onChange' })

  const onSubmit = (_: FormData) => {
    reset()
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
    </form>
  )
}
