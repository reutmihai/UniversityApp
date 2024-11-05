import { Provider as ReduxProvider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
)
