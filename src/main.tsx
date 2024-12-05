import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Or `import { App } from './App';` if it's a named export.
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
