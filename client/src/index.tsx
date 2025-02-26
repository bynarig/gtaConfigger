import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from '#/app/App';
import {store} from '#/shared/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>

    <StrictMode>
      <App />
    </StrictMode>,
      </Provider>,
  );
}
