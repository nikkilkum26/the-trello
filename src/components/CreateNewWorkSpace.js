import React from "react";

const CreateNewWorkSpace = ({
  setNewWorkSpace,
  createWorkspace,
  workSpaceRef,
  newWorkSpace,
}) => {
  return (
    <div
      className="card shadow-sm p-3 mb-5 bg-body rounded text-center"
      id="create-card"
    >
      <ul className="list-group list-group-flush">
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
  );
};

export default CreateNewWorkSpace;
