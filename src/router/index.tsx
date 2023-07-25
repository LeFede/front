import { Page } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Page />,
    errorElement: <h1>Not Found</h1>,
    children: [],
  },
])
