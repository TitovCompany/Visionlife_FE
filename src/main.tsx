import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {router} from './routes.ts';

createRoot(document.getElementById('web')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
