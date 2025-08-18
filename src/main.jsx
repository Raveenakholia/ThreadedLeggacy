/** @format */

import { Children, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ContactUs from './Forms/ContactUs';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';

const AppLayout = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <ContactUs />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
