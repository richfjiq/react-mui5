import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './Router';
import { NotificationProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './store';
import { Suspense } from 'react';

function App() {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <BrowserRouter>
          <Suspense fallback="Loading">
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </NotificationProvider>
    </Provider>
  );
}

export default App;
