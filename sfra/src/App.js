import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import StartScreen from "./components/RecipeForm/StartScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Secret Family Recipe App</h4>
      </header>

      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/SignUp">
        <SignUp />
      </Route>

      <Route exact path="/dash">
        <Dashboard />
      </Route>

      <Route exact path="/start-screen">
        <StartScreen />
      </Route>
    </div>
  );
}

export default App;
