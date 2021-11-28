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
    <div className="container mt-3">
      {workSpaceData.map((workspace, idx) => (
        <div
          className="shadow-sm p-3 mb-5 bg-body rounded text-center"
          key={idx}
        >
          <div className="title">{workspace.title}</div>
          {workspace.cardList.map((eachCard, cardId) => (
            <div key={cardId} className="cardlist">
              {eachCard}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
