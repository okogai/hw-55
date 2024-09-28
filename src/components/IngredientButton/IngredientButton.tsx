import React from 'react';

interface IngredientButtonProps {
    name: string;
    image: string;
    onAdd: () => void;
}

const IngredientButton: React.FC<IngredientButtonProps> = ({ name, image, onAdd }) => {
    return (
        <button onClick={onAdd} className="ingredient-button">
            <img src={image} alt={name} width="50" height="50" />
            <span>{name}</span>
        </button>
    );
};

export default IngredientButton;
