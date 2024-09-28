import React from 'react';
import IngredientButton from '../IngredientButton/IngredientButton';
import trashIcon from '../../assets/trash.png';

interface Ingredient {
    name: string;
    price: number;
    image: string;
}

interface IngredientListProps {
    ingredients: Ingredient[];
    onAddIngredient: (index: number) => void;
    onRemoveIngredient: (index: number) => void;
    selectedIngredients: { name: string; count: number }[];
}

const IngredientList: React.FC<IngredientListProps> = ({
                                                           ingredients,
                                                           onAddIngredient,
                                                           onRemoveIngredient,
                                                           selectedIngredients,
                                                       }) => {
    return (
        <div>
            <h2 className='ingredients'>Ingredients</h2>
            <div className="ingredient-list">
                {ingredients.map((ingredient, index) => (
                    <div key={ingredient.name} className="ingredient-item">
                        <IngredientButton
                            name={ingredient.name}
                            image={ingredient.image}
                            onAdd={() => onAddIngredient(index)}
                        />
                        <span>x {selectedIngredients[index].count}</span>
                        <button
                            onClick={() => onRemoveIngredient(index)}
                            disabled={selectedIngredients[index].count === 0}
                            className="delete-button"
                        >
                            <img src={trashIcon} alt="Удалить" className="trash-icon"/>
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default IngredientList;