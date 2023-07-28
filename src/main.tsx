import { router } from '@/router'
import '@picocss/pico'
import '@/styles/index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
)
// <React.StrictMode>
// </React.StrictMode>,
