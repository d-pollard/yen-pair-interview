/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { BookmarksPage } from './containers/BookmarksPage';
import { SimpleGlobalState } from './containers/SimpleGlobalState';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Interview Starter"
        defaultTitle="React Interview Starter"
      >
        <meta
          name="description"
          content="A great starting point for any React interview"
        />
      </Helmet>

      <SimpleGlobalState />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={BookmarksPage} path="/bookmarks" />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
