import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountryDetail from './components/CountryDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/country/:name',
    element: <CountryDetail />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);