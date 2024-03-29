import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.sass';

const App = (): JSX.Element => (
  <div className="todo-app">
    <AppHeader />
    <div className="top-panel d-flex flex-column">
      <SearchPanel />
      <ItemStatusFilter />
      <ItemAddForm />
    </div>
    <TodoList />
  </div>
);

export default App;
