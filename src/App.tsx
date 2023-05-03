import React from 'react';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import Board from "./Board";
import Input from "./Input";

// Greetings.tsx
// const App: React.FC = () => {
//
//   const onClick = (name: string) => {
//     console.log(`${name} 안녕!!~`);
//   };
//
//   return <Greetings name="Seeun" onClick={onClick}/>;
// }


//MyForm.tsx
const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  const onClick = (name: string) => {
      console.log(`${name} 안녕!!`);
  };

  const handleFoodClick = (food: string) => {
      console.log(`Clicked on ${food}`);
  };

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
  };

  return (
      <>
        <MyForm onSubmit={onSubmit} />
        <Counter />
        <Greetings
            name="세은"
            onClick={onClick}
            language="Korea!"
            favoriteFoods={["banana", "apple", "pair", "berry"]}
            address={{city: "seoul", state: "gw"}}
            onFoodClick={handleFoodClick}
        />
        <Board />
        <Input onChange={inputUserId} width={300} fontSize={20} />
      </>
  );
}

export default App;
