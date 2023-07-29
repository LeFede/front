import { create } from 'zustand'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface CounterState {
  count: number
  posts: Post[]
  increment: (value: number) => void
  decrement: (value: number) => void
  getPosts: () => Promise<void>
  reset: () => void
}

export const useCounterStore = create<CounterState>((set, _get) => {
  const initialState = {
    count: 10,
    posts: [],

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

    getPosts: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      set((state) => ({ ...state, posts }))
    },

    reset: () => {
      set({ ...initialState }, true)
    },
  }

  return initialState
})
