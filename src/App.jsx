import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Navigation from './components/navigation/Navigation';
import EditProfile from './routes/editProfile';
import EditProfile2 from './routes/EditProfile2';
import EditProfile3 from './routes/EditProfile3';

function App() {

  const loggedIn = true;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Navigation />} />
              <Route path="/editprofile" element={<EditProfile />} />
              <Route path="/editprofile2" element={<EditProfile2 />} />
              <Route path="/editprofile3" element={<EditProfile3 />} />
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
