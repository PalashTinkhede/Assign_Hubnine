// import React from 'react';
import { Stage, Layer, Arrow } from "react-konva";

function ArrowConnector({ cards }) {
  const arrows = [
    // Example: connecting the first card to the second card
    { from: cards[0], to: cards[1] },
    
  ];

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {arrows.map((arrow, index) => (
          <Arrow
            key={index}
            points={[
              arrow.from.x + 100,
              arrow.from.y + 50,
              arrow.to.x + 100,
              arrow.to.y + 50,
            ]}
            pointerLength={10}
            pointerWidth={10}
            fill="black"
            stroke="black"
            strokeWidth={4}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default ArrowConnector;
