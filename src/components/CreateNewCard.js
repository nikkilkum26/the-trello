import React from "react";

const CreateNewCard = ({
  setNewCard,
  createCard,
  deleteworkspace,
  idx,
  cardRef,
  workspace,
}) => {
  return (
    <>
      <div
        key={idx + "form"}
        className="add-card mt-2 mb-2 d-flex justify-content-between"
      >
        <label
          for="exampleInputEmail1"
          className="form-label align-self-center"
          id="card-name"
          key={idx}
        >
          card name
        </label>
        <input
          key={idx}
          className="form-control"
          id="card-name-input"
          placeholder="Enter card name"
          onChange={(e) => setNewCard(e.target.value)}
          ref={cardRef}
        />
      </div>
      <div className="d-flex flex-column">
        <button
          key={idx + "btn"}
          className="btn btn-dark"
          onClick={() => createCard(workspace)}
        >
          Add card
        </button>
        <i
          className="fa-regular fa-trash-can align-self-center mt-2"
          onClick={() => deleteworkspace(workspace, idx)}
        ></i>
      </div>
    </>
  );
};

export default CreateNewCard;
