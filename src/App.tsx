import { Route, Routes } from 'react-router-dom';

import Signin from '@/pages/signin';
import Signup from '@/pages/signup';
import TodoPage from '@/pages/todo';

import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </TodoContextProvider>
    </div>
  );
}

export default App;
