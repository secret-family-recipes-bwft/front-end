import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../../utils/AxiosWithAuth";

const initialRecipe = {
    category: '',
    title:'',
    picture_url:'',
    prepTime:'',
}

function EditRecipeForm(){

    const [userRecipes, setUserRecipes] = useState([]);
    const [recipeToEdit, setRecipeToEdit] = useState(initialRecipe)
   
    const history = useHistory();
    const userId = localStorage.getItem('user ID')
    const {id} = useParams()
    
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

        </div>
    )
}

export default EditRecipeForm;