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
                   }: GreetingsProps) {

    const handleClick = () => onClick(name);

    return (
        <div>
            <p>Hello, {name} {mark}</p>
            {optional && <p>{optional}</p>}
            {age && <p>Age: {age}</p>}
            <p>Language: {language}</p>
            <p>Favorite Foods: {favoriteFoods.join(', ')}</p>
            {address && (
                <>
                    <p>Address:</p>
                    <p>{address.city}, {address.state}</p>
                </>
            )}
            <div>
                <button onClick={handleClick}>Click!!!!</button>
            </div>
        </div>
    );
}

export default Greetings;