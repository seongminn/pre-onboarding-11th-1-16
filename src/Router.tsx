import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NotFoundPage = lazy(() => import('@/pages/404'));
const HomePage = lazy(() => import('@/pages/home'));
const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));

function Router() {
  return (
    <Routes>
      <Route element={<HomePage />} />
      <Route element={<TodoPage />} />
      <Route element={<SigninPage />} />
      <Route element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Router;
