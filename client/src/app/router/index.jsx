import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from '#/pages/start/StartPage.jsx';
import NotFound from '#/pages/404/404.jsx';
import UserRouter from '#/app/router/userRouter.jsx';

function Index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/main/*" element={<UserRouter />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;