import {Route, Routes} from 'react-router-dom';
import MainPage from '#/pages/main/MainPage';
import UserProfilePage from '#/pages/user/UserProfilePage';

function UserRouter() {
  return (
    <Routes>
      <Route path="/login" element={<MainPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
    </Routes>
  );
}

export default UserRouter;
