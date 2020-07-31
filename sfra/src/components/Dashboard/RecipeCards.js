import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from '../../utils/AxiosWithAuth';



const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 350px;
  // justify-content: flex-start;
  // align-items: flex-start;
  // margin-right: 10px;
  // margin-left: 10px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 266px;
  border-radius: 10px;
`;

const RecipeName = styled.p`
  font-family: "airbnb_cereal_appbook";
  text-align: left;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;
  color: black;
`;

const PrepTime = styled.p`
  font-family: "airbnb_cereal_appbook";
  text-align: left;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 0px;
  color: #797979;
`;

export default function RecipeCards({
  category,
  title,
  picture_url,
  prepTime,
  id
}){

  const [userRecipes, setUserRecipes] = useState([]);

  const userId = localStorage.getItem('user ID')

  const history=useHistory();

  const handleClick = e => {
    history.push('/edit-recipe')
  }


  const handleDelete = recipe => {
    axiosWithAuth()
    .delete (`https://bw-secret-family-recipes-1.herokuapp.com/api/users/${userId}/recipes/${id}`)
    .then((res) => {
      console.log(res)
      setUserRecipes(res.data)
      const updatedRecipeList = recipe.filter((recipe) => recipe.id !== res.data);
      setUserRecipes(updatedRecipeList);
    })
    .catch(err => console.log('delete err', err))
  };


  return (
    <CardWrapper>
      {/* <div>
        <h3>{category}</h3>
        <p>View More</p>
      </div> */}
      <RecipeImage src={picture_url} alt={title} />
      <RecipeName>{title}</RecipeName>
      <PrepTime>{prepTime}</PrepTime>
      <button onClick={handleClick}>Edit Recipe</button>
      <button onClick={handleDelete}>Delete Recipe</button>
    </CardWrapper>
  );
}