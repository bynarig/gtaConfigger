import MainPage from '#/pages/main/MainPage.jsx';
import {Route, Routes} from 'react-router-dom';


function UserRouter () {
  return (
    <Routes>
      <Route path="/login" element={<MainPage />} />
    </Routes>
  );
}

export default UserRouter;