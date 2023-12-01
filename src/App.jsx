import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';

function App() {

  const loggedIn = false;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/" />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<Navigate to="/login" />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
