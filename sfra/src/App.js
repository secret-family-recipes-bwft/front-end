import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NewUserDashboard from "./components/Dashboard/NewUserDashboard";
import ReturnUserDashboard from "./components/Dashboard/ReturnUserDashboard";
import StartScreen from "./components/RecipeForm/StartScreen";
import TheStoryBasics from "./components/RecipeForm/TheStoryBasics";
import TheStoryTradition from "./components/RecipeForm/TheStoryTradition";
import StartScreen2 from "./components/RecipeForm/StartScreen2";
import Expectations from "./components/RecipeForm/Expectations";
import StartScreen3 from "./components/RecipeForm/StartScreen3";
import Ingredients from "./components/RecipeForm/Ingredients";
import Directions from "./components/RecipeForm/Directions";
import SuccessPage from "./components/RecipeForm/SuccessPage";

import PrivateRoute from './utils/PrivateRoute';
import EditRecipeForm from "./components/Dashboard/EditRecipeForm";

import { UserContext } from "./contexts/UserContext";
import { SetUsersContext } from "./contexts/SetUsersContext";
import { UserRecipesContext } from "./contexts/RecipeContext";
import { SetUserRecipesContext } from "./contexts/SetUserRecipeContext";
import { InitialRecipeContext } from "./contexts/InitialRecipeContext";
// import RecipeCards from "./components/Dashboard/RecipeCards";

const initialRecipe = {
  category: '',
  title:'',
  picture_url:'',
  prepTime:'',
  id:''
}
function App() {
  
  const [userRecipes, setUserRecipes] = useState([]);
  const [users, setUsers] = useState([])



  return (
    <div className="App">
      <UserContext.Provider value={{users}} >
      <SetUsersContext.Provider value={{setUsers}}>
      <UserRecipesContext.Provider value ={{userRecipes}}>
      <SetUserRecipesContext.Provider value = {{setUserRecipes}}>
      <InitialRecipeContext.Provider value = {{initialRecipe}}>
        
      <Route exact path="/">
        <Login />
      </Route>

      <PrivateRoute exact path="/return-user-dash">
        <ReturnUserDashboard />
      </PrivateRoute>

      <Route exact path="/SignUp">
        <SignUp />
      </Route>

      <PrivateRoute exact path="/new-user-dash">
        <NewUserDashboard />
      </PrivateRoute>

      <Route exact path="/edit-recipe/:id" >
        <EditRecipeForm/>
      </Route>

      <Route exact path="/start-screen">
        <StartScreen />
      </Route>

      <Route exact path="/the-story-basics">
        <TheStoryBasics />
      </Route>

      <Route exact path="/the-story-tradition">
        <TheStoryTradition />
      </Route>

      <Route exact path="/start-screen-2">
        <StartScreen2 />
      </Route>

      <Route exact path="/the-expectations">
        <Expectations />
      </Route>

      <Route exact path="/start-screen-3">
        <StartScreen3 />
      </Route>

      <Route exact path="/the-ingredients">
        <Ingredients />
      </Route>

      <Route exact path="/the-directions">
        <Directions />
      </Route>

      <Route exact path="/recipe-created-success">
        <SuccessPage />
      </Route>
      </InitialRecipeContext.Provider>
      </SetUserRecipesContext.Provider>
      </UserRecipesContext.Provider>
      </SetUsersContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
