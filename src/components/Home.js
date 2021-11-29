import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWorkSpace,
  insertCard,
  deleteCard,
  workSpace,
} from "../Store/myWorkspace/myWorkspaceAction";
const Home = () => {
  const { workSpaceData } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();
  const [newCard, setNewCard] = useState("");
  const [newWorkSpace, setNewWorkSpace] = useState("");
  const cardRef = useRef(null);
  const workSpaceRef = useRef(null);
  useEffect(() => {
    dispatch(getWorkSpace());
  }, []);

  const createCard = ({ id }) => {
    dispatch(insertCard(id, newCard));
    cardRef.current.value = "";
  };
  const removeCardItem = (id, item) => {
    dispatch(deleteCard(id, item, JSON.parse(JSON.stringify(workSpaceData))));
  };

  const createWorkspace = (workspace) => {
    dispatch(workSpace(workspace, JSON.parse(JSON.stringify(workSpaceData))));
    workSpaceRef.current.value = "";
  };

  return (
    <div className="container mt-3 d-flex flex-column justify-content-evenly flex-lg-row flex-md-row flex-wrap">
      {workSpaceData.map((workspace, idx) => (
        <div
          className=" card shadow-sm p-3 mb-5 bg-body rounded text-center"
          key={idx}
          id="mycard"
        >
          <ul class="list-group list-group-flush">
            <li className="title list-group-item">{workspace.title}</li>
            {workspace.cardList.map((eachCard, cardId) => (
              <div className="d-flex justify-content-between">
                <li key={cardId} className="cardlist mt-2 mb-2 list-group-item">
                  {eachCard}
                </li>
                <i
                  className="fa-regular fa-trash-can align-self-center"
                  onClick={() => removeCardItem(idx, cardId)}
                ></i>
              </div>
            ))}
          </ul>
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

          <button
            key={idx + "btn"}
            className="btn btn-dark"
            onClick={() => createCard(workspace)}
          >
            + card
          </button>
          <i className="fa-regular fa-trash-can align-self-center mt-2"></i>
        </div>
      ))}
      <div
        className="card shadow-sm p-3 mb-5 bg-body rounded text-center"
        id="create-card"
      >
        <ul class="list-group list-group-flush">
          <li className="title list-group-item">
            <input
              className="form-control"
              placeholder="Enter Title"
              onChange={(e) => setNewWorkSpace(e.target.value)}
              ref={workSpaceRef}
            />
          </li>
        </ul>
        <button
          className="btn btn-dark"
          onClick={() => createWorkspace(newWorkSpace)}
        >
          create workspace
        </button>
      </div>
    </div>
  );
};

export default Home;
