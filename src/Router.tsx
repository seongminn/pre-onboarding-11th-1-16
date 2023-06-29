import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));

function Router() {
  return (
    <Suspense>
      <Routes>
        <Route element={<TodoPage />} />
        <Route element={<SigninPage />} />
        <Route element={<SignupPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
