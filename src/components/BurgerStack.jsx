const BurgerStack = (removeIngredient , stack) => {
    return (<ul>
        {stack.map((ingredient, index) => {
            <li key ={index} style={{color : ingredient.color}}>
                {ingredient.name}
                <button onClick={() => removeIngredient(index)}>X</button>
            </li>
        })}
    </ul>)
  };
  
  export default BurgerStack;