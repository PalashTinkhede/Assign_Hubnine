import { useState } from "react";
import DraggableCard from "./components/DraggableCard";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet...",
      fullText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      x: 100,
      y: 100,
    },
    {
      id: 2,
      text: "Sed do eiusmod tempor incididunt...",
      fullText:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      x: 400,
      y: 200,
    },
  ]);

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      text: "New card text...",
      fullText: "Full text of the new card.",
      x: 150,
      y: 150,
    };
    setCards([...cards, newCard]);
  };

  const updateCardPosition = (id, x, y) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, x, y } : card)));
  };

  return (
    <>
      <div className="align-top min-vw-100 bg-white">
        <button
          className=" text-center add-card-button align-start w-100 position-absolute align-top start-0"
          style={{ top: "20px" }}
          onClick={addCard}
        >
          <p className="text-center">Add Card</p>
        </button>
      </div>

      <div>
        {cards.map((card) => (
          <DraggableCard
            key={card.id}
            card={card}
            updateCardPosition={updateCardPosition}
          />
        ))}
      </div>
    </>
  );
}

export default App;
