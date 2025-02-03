import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter, RouterProvider} from "react-router-dom";
import {router} from "./routes.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  </StrictMode>,
)
