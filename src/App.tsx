import React, { useState } from 'react';
import './App.css';
import {Ingredient} from './types';
import saladImage from './assets/salad.png';
import cheeseImage from './assets/cheese.png';
import meatImage from './assets/meat.png';
import baconImage from './assets/bacon.png';
import IngredientList from "./components/IngredientList/IngredientList.tsx";
import Burger from "./components/Burger/Burger.tsx";

const INGREDIENTS: Ingredient[] = [
    { name: 'Bacon', price: 60, image: baconImage },
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
];

interface SelectedIngredient {
    name: string;
    count: number;
    image: string;
}

const App: React.FC = () => {
    const initialSelectedIngredients: SelectedIngredient[] = INGREDIENTS.map((ingredient) => ({
        name: ingredient.name,
        count: 0,
        image: ingredient.image,
    }));

    const [selectedIngredients, setSelectedIngredients] = useState<SelectedIngredient[]>(initialSelectedIngredients);

    const addIngredient = (index: number) => {
        const updatedIngredients = [...selectedIngredients];
        updatedIngredients[index].count += 1;
        setSelectedIngredients(updatedIngredients);
    };

    const removeIngredient = (index: number) => {
        const updatedIngredients = [...selectedIngredients];
        if (updatedIngredients[index].count > 0) {
            updatedIngredients[index].count -= 1;
        }
        setSelectedIngredients(updatedIngredients);
    };

    const calculateTotalPrice = () => {
        return (
            30 +
            selectedIngredients.reduce((total, ingredient) => {
                const ingredientInfo = INGREDIENTS.find((ing) => ing.name === ingredient.name);
                return total + (ingredientInfo ? ingredientInfo.price * ingredient.count : 0);
            }, 0)
        );
    };

    return (
        <div className="app">
            <IngredientList
                ingredients={INGREDIENTS}
                onAddIngredient={addIngredient}
                onRemoveIngredient={removeIngredient}
                selectedIngredients={selectedIngredients}
            />
            <Burger ingredients={selectedIngredients} totalPrice={calculateTotalPrice()}/>

        </div>
    );
};

export default App;
