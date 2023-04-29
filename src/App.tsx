import React from 'react';
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

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

  return (
      <>
        <MyForm onSubmit={onSubmit} />
        <Counter />
        <Greetings
            name="세은"
            onClick={onClick}
            language="Korea!"
            favoriteFoods={["banana", "apple"]}
            address={{city: "seoul", state: "gw"}}
        />
      </>
  );
}

export default App;
