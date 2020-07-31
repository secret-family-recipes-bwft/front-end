import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";
import styled from "styled-components";
import RecipeCards from "./RecipeCards";


const initialRecipe = {
    category: '',
    title:'',
    picture_url:'',
    prepTime:'',
}

const CardContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: space-evenly;
  // background-color: pink;
`;

function EditRecipeForm(){

    const [userRecipes, setUserRecipes] = useState([]);
    const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe)
   
    const history = useHistory();
    const userId = localStorage.getItem('user ID')
    // const {id} = useParams()
    
    const saveEdit = recipe => {
        axiosWithAuth()
        .put(`https://bw-secret-family-recipes-1.herokuapp.com/api/users/${userId}/recipes`)
        .then((res) => {
            console.log(res.data);
            setUserRecipes(res.data)
            history.push('/return-user-dash')
        })
        .catch((err) => {
            console.log(err);
          })
        }
        
    return(
        <div>
            <form onSubmit={saveEdit}>

               <label> 
                   Category:
                   <input 
                   type='text'
                   onChange={e =>
                    setRecipeToEdit({ ...recipeToEdit, category: e.target.value })
                  }
                  value={recipeToEdit.category}  
                   />
               </label>

               <label> 
                   Title:
                   <input 
                   type='text'
                   onChange={e =>
                    setRecipeToEdit({ ...recipeToEdit, title: e.target.value })
                  }
                  value={recipeToEdit.title}  
                   />
               </label>

               <label> 
                   Picture:
                   <input 
                   type='text'
                   onChange={e =>
                    setRecipeToEdit({ ...recipeToEdit, picture_url: e.target.value })
                  }
                  value={recipeToEdit.picture_url}  
                   />
               </label>

               <label> 
                   Prep Time:
                   <input 
                   type='text'
                   onChange={e =>
                    setRecipeToEdit({ ...recipeToEdit, prepTime: e.target.value })
                  }
                  value={recipeToEdit.prepTime}  
                   />
               </label>
                
                <button onClick={saveEdit}>Edit Recipe</button>
            </form>

            <CardContainer>
      {userRecipes.map((crrObj) => {
        return (
            <RecipeCards
              category={crrObj.category}
              title={crrObj.title}
              picture_url={crrObj.picture_url}
              prepTime={crrObj.prepTime}
            />
        );
      })}
    </CardContainer>

        </div>
    )
}
export default EditRecipeForm;