import { useState } from "react";
import Cart from "./Cart";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
function App() {
  const [itemId, setItemId] = useState(null);
  const clickHandler = (id) => {
    setItemId(id !== itemId ? id : null);
  };
  return (
    <>
      <div className="">
        <ul className="grid grid-cols-2 md:grid-cols-3 p-8 gap-4 ">
          {questions.map((item) => (
            <li key={item.id} onClick={() => clickHandler(item.id)}>
              <Cart active={itemId === item.id ? true : false} item={item} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
