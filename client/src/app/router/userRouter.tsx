import {Route, Routes} from 'react-router-dom';
import MainPage from '#/pages/main/MainPage';

function UserRouter() {
  return (
    <Routes>
      <Route path="/login" element={<MainPage />} />
    </Routes>
  );
}

export default UserRouter;
