import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeInfo } from 'hooks/useRecipeInfo.ts';
import { useEffect, useState } from 'react';
import { Recipe } from 'types/types.ts';
import styles from './DetailedRecipe.module.css';

const DetailedRecipe = () => {
  const { recipeId } = useParams();

  const { recipeInfo } = useRecipeInfo(Number(recipeId));

  const [recipe, setRecipe] = useState<Recipe>();

  const navigate = useNavigate();

  useEffect(() => {
    if (recipeInfo) {
      setRecipe(recipeInfo);
    }
  }, [recipeInfo]);

  return (
    <div className={styles.wrapper}>
      {recipe && (
        <>
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <div>
            <span>Preparation time: {recipe.prepTime}</span>
            <span>Cook time: {recipe.cookTime}</span>
            <span>Total time: {recipe.totalTime}</span>
            <span>Recipe makes {recipe.makingAmount}</span>
          </div>
          <img
            src={recipe.imageUrl}
            alt="Recipe"
          />
          <div>
            <p>Ingredients</p>
            {recipe.ingredients?.map((item) => <span key={item}>{item}</span>)}
            <br />
            {recipe.additions1?.map((item, index) => (
              <span
                style={{ fontWeight: index ?? 'bold' }}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <p>Directions</p>
          {recipe.directions?.map((item) => item)}
          <p>Tips</p>
          {recipe.tips?.map((tip) => tip)}
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </div>
  );
};

export { DetailedRecipe };
