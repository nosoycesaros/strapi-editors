/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
// Utils
import pluginId from '../../pluginId';
// Containers
import HomePage from '../HomePage';
import Edit from '../Edit';
import './styles.css'

const App = () => {
  return (
    <section className="col-md-12 strapi-editor">
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route path={`/plugins/${pluginId}/:collection/:id`} component={Edit} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default App;
