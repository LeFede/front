import { Component } from '@/components'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('<Component />', () => {
  const mockHandler = vi.fn()

  beforeEach(() => {
    render(
      <Component title="hola" action={mockHandler}>
        <p>some</p>
        <p>some</p>
      </Component>,
    )
  })

  it('renders title correctly', () => {
    expect(screen.getByText('hola')).toBeDefined()
  })

  it('should not show the content at the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull()
  })

  it('should show content on click', () => {
    const button = screen.getByText(/show/i)
    fireEvent.click(button)
    expect(screen.queryByText(/content/i)).toBeDefined()
  })

  it('should hide content on click', () => {
    const button = screen.getByText(/show/i)
    fireEvent.click(button)
    fireEvent.click(button)
    expect(screen.queryByText(/content/i)).toBeNull()
  })

  it('should trigger action', () => {
    const button = screen.getByText(/click/i)
    fireEvent.click(button)
    expect(mockHandler).toBeCalledTimes(1)
    expect(mockHandler.mock.calls).toHaveLength(1)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
