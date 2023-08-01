import { ERRORS } from '@/errors'
import { $ } from '@/utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Form } from '.'

let input: string
let expected: RegExp
let testedInput: HTMLInputElement

const testInputAndExpectedError = async (
  el: HTMLInputElement,
  input: string,
  expected: RegExp,
) => {
  await userEvent.type(el, input)
  expect(el.value).toBe(input)
  expect(screen.getByText(expected)).toBeDefined()
}

describe('Form name input', () => {
  beforeEach(() => {
    render(<Form />)
    testedInput = $<HTMLInputElement>('#name')
  })

  it('errors when first character is not a letter or underscore', async () => {
    await userEvent.type(testedInput, '1j')
    expect(testedInput.getAttribute('aria-invalid')).toBe('true')
    expect(screen.getByText(ERRORS.START_WITH_LETTER)).toBeDefined()
  })

  it('errors after first type, on blank input', async () => {
    expect(testedInput.getAttribute('aria-invalid')).toBeNull()
    await userEvent.type(testedInput, '1')
    await userEvent.clear(testedInput)
    expect(testedInput.getAttribute('aria-invalid')).toBe('true')
  })

  it(`errors when input is not alphanumeric or 
  underscore`, async () => {
    input = '!'
    expected = /Only alphanumeric and underscore characters are allowed/
    await testInputAndExpectedError(testedInput, input, expected)
    expect(testedInput.getAttribute('aria-invalid')).toBe('true')
  })

  it('errors when input is too short', async () => {
    input = 'xd'
    expected = /3 ~ 30 characters/
    await testInputAndExpectedError(testedInput, input, expected)
    expect(testedInput.getAttribute('aria-invalid')).toBe('true')
  })

  it('errors when input is too long', async () => {
    input = 'r234567890123456789012345678901'
    expected = /3 ~ 30 characters/
    await testInputAndExpectedError(testedInput, input, expected)
    expect(testedInput.getAttribute('aria-invalid')).toBe('true')
  })

  it("doesn't display errors when input is valid", async () => {
    input = 'testing_'
    expect(testedInput.getAttribute('aria-invalid')).toBeNull()
  })
})

describe('Form password', () => {
  beforeEach(() => {
    render(<Form />)
    testedInput = $<HTMLInputElement>('#password')
  })

  it('errors after first type, on blank input', async () => {
    expect(testedInput.getAttribute('aria-invalid')).toBeNull()
    await userEvent.type(testedInput, '1')
    await userEvent.clear(testedInput)
    expect(testedInput.getAttribute('aria-invalid')).toBe('true')
  })

  it('errors when password input is too short', async () => {
    input = '1234567'
    expected = /8 ~ 30 characters/
    await testInputAndExpectedError(testedInput, input, expected)
  })

  it('errors when passwords do not match', async () => {
    input = '12345678'
    expected = /Passwords do not match/
    await userEvent.type(testedInput, input)
    expect(screen.getByText(expected)).toBeDefined()
  })
})

describe('Form confirmPassword', () => {
  beforeEach(() => {
    render(<Form />)
    testedInput = $<HTMLInputElement>('#confirmPassword')
  })

  it("doesn't show errors when passwords match", async () => {
    const passwordInput = $<HTMLInputElement>('#password')
    input = '12345678'
    await userEvent.type(testedInput, input)
    await userEvent.type(passwordInput, input)
    expect(testedInput.getAttribute('aria-invalid')).toBeNull()
  })
})

describe('Form submit', () => {
  it('submits correctly when all inputs are correct', async () => {
    render(<Form />)
    const name = $<HTMLInputElement>('#name')
    const password = $<HTMLInputElement>('#password')
    const confirmPassword = $<HTMLInputElement>('#confirmPassword')

    const submit = $<HTMLInputElement>('#submit')
    await userEvent.type(name, 'lefede')
    await userEvent.type(password, '12341234')
    await userEvent.type(confirmPassword, '12341234')

    await userEvent.click(submit)

    expect(name.value).toBe('')
    expect(password.value).toBe('')
    expect(confirmPassword.value).toBe('')
  })
})
