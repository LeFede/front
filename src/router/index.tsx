import { Layout } from '@/layouts'
import { Page, Pico, FormPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        index: true,
        element: <Page />,
      },
      {
        path: 'pico',
        element: <Pico />,
      },
      {
        path: 'form',
        element: <FormPage />,
      },
    ],
  },
])
