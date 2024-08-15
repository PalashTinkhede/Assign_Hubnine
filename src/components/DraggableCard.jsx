/* eslint-disable react/prop-types */
import { useState } from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import Popup from "./Popup";
import "react-resizable/css/styles.css";

function DraggableCard({ card, updateCardPosition }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleDragStop = (e, data) => {
    updateCardPosition(card.id, data.x, data.y);
  };

  return (
    <>
      <Draggable position={{ x: card.x, y: card.y }} onStop={handleDragStop}>
        <ResizableBox
          width={200}
          height={100}
          minConstraints={[100, 50]}
          maxConstraints={[400, 300]}
          className=" "
        >
          <div className="border border-primary ">
            <p>{card.text}</p>
            <button onClick={() => setShowPopup(true)}>Show More</button>
          </div>
        </ResizableBox>
      </Draggable>
      {showPopup && (
        <Popup text={card.fullText} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
}

export default DraggableCard;
