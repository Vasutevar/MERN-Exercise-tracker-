import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar';
import ExercisesList from './components/exercises-list';
import EditExercise from './components/edit-exercises';
import CreateExercises from './components/create-exercises'
import CreateUsers from './components/create-users';


function App() {
  return (                                         //id from mongoDB [ObjectID]

    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercises} />
        <Route path="/user" exact component={CreateUsers} />
      </div>
    </Router>

  );
}

export default App;
