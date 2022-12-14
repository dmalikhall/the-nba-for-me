import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from "./helper/context";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { YesterdayProvider } from './helper/yesterdayContext';
import { TomorrowsProvider } from './helper/tomorrowsContext'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <YesterdayProvider>
      <TomorrowsProvider>
        <App />
      </TomorrowsProvider>
    </YesterdayProvider>
  </AppProvider>

);

