import React from 'react';
import './Burger.css';

interface BurgerProps {
    ingredients: { name: string; count: number }[];
    totalPrice: number;
}

const Burger: React.FC<BurgerProps> = ({ ingredients,  totalPrice }) => {
    const filteredIngredients = ingredients.filter(ingredient => ingredient.count > 0);
    const renderedIngredients = filteredIngredients.map((ingredient, index) => (
            <div key={`${ingredient.name}-${index}`} className={ingredient.name}></div>
        ));

    return (
        <div>
            <h2>Burger</h2>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {renderedIngredients}
                <div className="BreadBottom"></div>
            </div>
            <div className="total-price">Total Price: {totalPrice} som</div>
        </div>
    );
};

export default Burger;
