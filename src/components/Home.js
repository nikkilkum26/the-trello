import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWorkSpace } from "../Store/myWorkspace/myWorkspaceAction";
const Home = () => {
  const { workSpaceData } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorkSpace());
  }, []);
  console.log(workSpaceData);
  return (
    <div className="container mt-3 d-flex justify-content-evenly">
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
            <i class="fa-regular fa-trash-can align-self-center"></i>
            </div>
          ))}
        </ul>
        <div className="add-card mt-2 mb-2 d-flex justify-content-between">
            <label for="exampleInputEmail1" className="form-label align-self-center" id="card-name">card name</label>
            <input className="form-control" id="card-name-input" />
          </div>
          <button type="submit" class="btn btn-dark">+ card</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
