
const IngredientList = ({availableIngredients, addIngredient}) => {
    return (<ul>
        {availableIngredients.map((ingredient, index) => {
            <li key ={index} style={{color : ingredient.color}}>
            {ingredient.name}
            <button onClick={() => addIngredient(ingredient)}>+</button>
        </li>
        }) 
        }
    </ul>);
};
  
export default IngredientList;
  