import { lazy, Suspense, useMemo } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import Loader from '@/components/common/Loader';
import { TOKEN_KEY } from '@/constants/auth';
import { PATH } from '@/constants/path';
import TodoContextProvider from '@/contexts/TodoContext';
import { getToken } from '@/utils/token';

const SigninPage = lazy(() => import('@/pages/signin'));
const SignupPage = lazy(() => import('@/pages/signup'));
const TodoPage = lazy(() => import('@/pages/todo'));
const NotFoundPage = lazy(() => import('@/pages/404'));

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path={PATH.TODO} element={<TodoPage />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path={PATH.SIGNIN} element={<SigninPage />} />
          <Route path={PATH.SIGNUP} element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;

const PrivateRouter = () => {
  const token = useMemo(() => getToken(TOKEN_KEY), []);

  return token ? (
    <TodoContextProvider>
      <Outlet />
    </TodoContextProvider>
  ) : (
    <Navigate to={PATH.SIGNIN} replace />
  );
};

const PublicRouter = () => {
  const token = useMemo(() => getToken(TOKEN_KEY), []);

  return token ? <Navigate to={PATH.TODO} replace /> : <Outlet />;
};
