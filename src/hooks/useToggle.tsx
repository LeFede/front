import { useState } from 'react'

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState(initialValue)

  const toggleValue = () => {
    setState(!state)
  }

  return [state, toggleValue]
}
