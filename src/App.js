import React from 'react';
import { HashRouter as Router,
         Route,
         Switch,
         Link
} from 'react-router-dom';
import './App.css';

const data = [
  {
    id: 0,
    title: "список покупок",
    todos: ["молоко", "творожок"]

  },
  {
    id: 1,
    title: "список домашних дел",
    todos: ["почистить картошку", "полежать на диване"]
  },
  {
    id: 2,
    title: "список домашних дел",
    todos: ["почистить картошку", "полежать на диване"]
  }
];

const NotFound = () => (
  <div>
    <h2>Not found 404</h2>
    <Link to="/">На главную</Link>
  </div>
);

const TodoLists = () => {
  const listContent = data.map( (list) => (
    <li key={list.id}>
      <Link to={`/lists/${list.id}`}>{list.title}</Link>
    </li>
  ));
  return (
    <div>
      <h2>List of all todoLists</h2>
      <p>всего списков: {data.length}</p>
      <ul>
        {listContent}
      </ul>
    </div>
  )
};

const TodoList = (props) => {
  const id = props.match.params.list;
  console.log( data[id] );
  const listOfTodos = data[id].todos.map( (item, key) => (
    <li key={key}>
      {item}
    </li>
  ));
  return (
    <div>
      <Link to="/">Вернуться к cпискам:</Link>
      <h2>{data[id].title}</h2>
      {listOfTodos}
    </div>
  )
};

const Todo = () => (
  <div>
    <h1>название задачи</h1>
    <Link to="/"/>
  </div>
);


const App = () => (
  <Router>
    <div>
      <Switch >
        <Route exact path="/" component={TodoLists}/>
        <Route path="/lists/:list" component={TodoList}/>
        <Route path="/lists/:list/:todo" component={Todo}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default App;
