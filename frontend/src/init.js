import React from 'react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import App from './App.jsx';
import resources from './locales/index.js';

export const init = async () => {
  const i18nextInstance = i18next.createInstance();

  i18nextInstance.init({
    debug: false,
    lng: 'ru',
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18nextInstance}>
      <App />
    </I18nextProvider>
  );
};
