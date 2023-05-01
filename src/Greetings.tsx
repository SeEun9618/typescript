import React from 'react';

type GreetingsProps = {
    name: string;
    mark?: string;
    optional?: string;
    onClick: (name: string) => void;
    age?: number;
    language: string;
    favoriteFoods: string[];
    address?: {
        city: string;
        state: string;
    };
    onFoodClick?: (food: string) => void;
};

function Greetings({
                       name,
                       mark = '!',
                       optional,
                       onClick,
                       age,
                       language,
                       favoriteFoods,
                       address,
                       onFoodClick,
                   }: GreetingsProps) {
    const handleClick = () => onClick(name);

    const handleFoodClick = (food: string) => {
        if (onFoodClick) {
            onFoodClick(food);
        }
    };

    return (
        <div>
            <p>Hello, {name} {mark}</p>
            {optional && <p>{optional}</p>}
            {age && <p>Age: {age}</p>}
            <p>Language: {language}</p>
            <p>Favorite Foods:</p>
            <ul>
                {favoriteFoods.map((food, index) => (
                    <li key={index} onClick={() => handleFoodClick(food)}>
                        {food}
                    </li>
                ))}
            </ul>
            {address && (
                <>
                    <p>Address:</p>
                    <p>
                        {address.city}, {address.state}
                    </p>
                </>
            )}
            <div>
                <button onClick={handleClick}>Click!!!!</button>
            </div>
        </div>
    );
}

export default Greetings;
