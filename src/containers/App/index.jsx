import React from "react";
import { Admin, Resource, fetchUtils, resolveBrowserLocale } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import themeReducer from "../../themeReducer";
import customRoutes from "../../routes";
import Layout from "../Layout";
import Dashboard from "../Dashboard";
import Login from "../Login";
//import authProvider from '../../authProvider';

// localization
import englishMessages from "../../i18n/en";
import spanishMessages from "../../i18n/es";
import arabicMessages from "../../i18n/ar";
const messages = {
  en: englishMessages,
  es: spanishMessages,
  ar: arabicMessages
};
const i18nProvider = locale => messages[locale];

// setup locale
const locale = () => {
  let storedLocale = localStorage.getItem("locale");
  if (storedLocale !== null && storedLocale !== "undefined") {
    if (storedLocale !== "browser") {
      return storedLocale;
    } else {
      return resolveBrowserLocale();
    }
  }
  return resolveBrowserLocale();
};

//setup dataProvider
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("token");
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(process.env.REACT_APP_API, httpClient);

const App = () => (
  <Admin
    title={process.env.REACT_APP_NAME}
    dataProvider={dataProvider}
    //authProvider={authProvider}
    customReducers={{ theme: themeReducer }}
    customRoutes={customRoutes}
    appLayout={Layout}
    loginPage={Login}
    dashboard={Dashboard}
    locale={locale()}
    i18nProvider={i18nProvider}
  />
);

export default App;
