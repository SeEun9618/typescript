import React, { useRef } from 'react';

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
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        onClick(name);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

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
                    <p>
                        {address.city}, {address.state}
                    </p>
                </>
            )}
            <div>
                <button onClick={handleClick}>Click!!!!</button>
                <input type="text" ref={inputRef} />
            </div>
        </div>
    );
}

export default Greetings;