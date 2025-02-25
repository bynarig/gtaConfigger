import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from '#/app/App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
