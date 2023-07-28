import { create } from 'zustand'

interface CounterState {
  count: number
  increment: (value: number) => void
  decrement: (value: number) => void
}

export const useCounterStore = create<CounterState>((set, _) => ({
  count: 10,

  increment: (value: number) => {
    set((state) => {
      return { ...state, count: state.count + value }
    })
  },

  decrement: (value: number) => {
    set((state) => {
      return { ...state, count: state.count - value }
    })
  },
}))
