import { Route, Routes } from 'react-router-dom';

import Signin from '@/pages/signin';
import Signup from '@/pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
