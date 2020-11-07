import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) => {
    return(
        <div className={style.recipe}>
            <h1>{props.label}</h1>
            <img className={style.image} src={props.image} alt=""/> 
            <ul>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;