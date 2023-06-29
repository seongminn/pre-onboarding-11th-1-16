import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from './constants/path';

const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));

function Router() {
  return (
    <Suspense>
      <Routes>
        <Route path={PATH.TODO} element={<TodoPage />} />
        <Route path={PATH.SIGNIN} element={<SigninPage />} />
        <Route path={PATH.SIGNUP} element={<SignupPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
