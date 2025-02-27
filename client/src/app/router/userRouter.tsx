import {Route, Routes} from 'react-router-dom';
import UserProfilePage from '#/pages/user/UserProfilePage';
import LoginPage from '#/pages/user/auth/LoginPage';
import RegisterPage from '#/pages/user/auth/RegisterPage';
import RestorePasswordPage from '#/pages/user/auth/RestorePasswordPage';

function UserRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/restore" element={<RestorePasswordPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
    </Routes>
  );
}

export default UserRouter;
