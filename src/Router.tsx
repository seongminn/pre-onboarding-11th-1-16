import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { TOKEN_KEY } from './constants/auth';
import { PATH } from './constants/path';
import { getToken } from './utils/token';

const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));

function Router() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path={PATH.TODO} element={<TodoPage />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path={PATH.SIGNIN} element={<SigninPage />} />
          <Route path={PATH.SIGNUP} element={<SignupPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Router;

const PrivateRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Outlet /> : <Navigate to={PATH.SIGNIN} replace />;
};

const PublicRouter = () => {
  const token = getToken(TOKEN_KEY);

  return token ? <Navigate to={PATH.TODO} replace /> : <Outlet />;
};
