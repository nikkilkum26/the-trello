import React from "react";

const MovableCard = ({ provided, eachCard, cardId, removeCardItem, idx }) => {
  return (
    <div
      className="d-flex justify-content-between "
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <li key={cardId} className="cardlist mt-2 mb-2 list-group-item">
        {eachCard.name}
      </li>
      <i
        className="fa-regular fa-trash-can align-self-center"
        onClick={() => removeCardItem(idx, cardId)}
      ></i>
    </div>
  );
};

export default MovableCard;
