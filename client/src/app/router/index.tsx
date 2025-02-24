import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StartPage from '#/pages/start/StartPage';
import NotFound from '#/pages/404/404';
import MainPage from '#/pages/main/MainPage';
import UserRouter from './userRouter';

function Index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
