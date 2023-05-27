import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './Router';
import { NotificationProvider } from './context';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <NotificationProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </NotificationProvider>
    </Provider>
  );
}

export default App;
