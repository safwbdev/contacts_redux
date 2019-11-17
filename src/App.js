import React from 'react';
import './App.scss';
import "react-datepicker/dist/react-datepicker.css";
import 'react-table/react-table.css'
import List from './features/list'
import AddForm from './features/addForm'
import EditForm from './features/editForm'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          {/* <Route path="/" exact ><AddForm /><List/></Route> */}
          <Route path="/" exact component={List} />
          <Route path="/new" exact component={AddForm} />
          <Route path="/edit/:id" component={EditForm} />
        </div>
      </Router>
    </div>
  );
}

export default App;
