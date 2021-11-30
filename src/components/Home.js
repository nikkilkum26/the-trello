import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getWorkSpace,
  insertCard,
  deleteCard,
  workSpace,
  deleteWorkSpace,
} from "../Store/myWorkspace/myWorkspaceAction";
import { v4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CreateNewWorkSpace from "./CreateNewWorkSpace";
import MovableCard from "./MovableCard";
import CreateNewCard from "./CreateNewCard";
const Home = () => {
  const { workSpaceData } = useSelector((state) => state.workspace);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [newCard, setNewCard] = useState("");
  const [newWorkSpace, setNewWorkSpace] = useState("");
  const cardRef = useRef(null);
  const workSpaceRef = useRef(null);
  useEffect(() => {
    dispatch(getWorkSpace());
  }, []);
  useEffect(() => {
    setData(workSpaceData);
  }, [workSpaceData]);

  const createCard = ({ id }) => {
    dispatch(insertCard(id, newCard, v4(), workSpaceData));
    cardRef.current.value = "";
  };
  const removeCardItem = (id, item) => {
    dispatch(deleteCard(id, item, JSON.parse(JSON.stringify(data))));
  };

  const createWorkspace = (workspace) => {
    dispatch(workSpace(workspace, JSON.parse(JSON.stringify(data))));
    workSpaceRef.current.value = "";
  };

  const deleteworkspace = (workspace, idx) => {
    dispatch(deleteWorkSpace(JSON.parse(JSON.stringify(data)), workspace, idx));
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = {
      ...data[source.droppableId - 1].cardList[source.index],
    };

    setData((prev) => {
      prev = [...prev];
      prev[source.droppableId - 1].cardList.splice(source.index, 1);
      prev[destination.droppableId - 1].cardList.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  return (
    <div className="container mt-3 d-flex flex-column justify-content-evenly flex-lg-row flex-md-row flex-wrap">
      <DragDropContext onDragEnd={handleDragEnd}>
        {data.map((workspace, idx) => (
          <div
            className=" card shadow-sm p-3 mb-5 bg-body rounded text-center"
            key={idx + 1}
            id="mycard"
          >
            <ul class="list-group list-group-flush">
              <li className="title list-group-item">{workspace.title}</li>
              <Droppable droppableId={idx + 1}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {workspace.cardList.map((eachCard, cardId) => (
                      <Draggable
                        key={eachCard.id}
                        index={cardId}
                        draggableId={eachCard.id}
                      >
                        {(provided, snapshot) => (
                          <div className="mb-9">
                            <MovableCard
                              provided={provided}
                              eachCard={eachCard}
                              cardId={cardId}
                              removeCardItem={removeCardItem}
                              idx={idx}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </ul>
            <>
              <CreateNewCard
                setNewCard={setNewCard}
                createCard={createCard}
                deleteworkspace={deleteworkspace}
                idx={idx + 1}
                cardRef={cardRef}
                workspace={workspace}
              />
            </>
          </div>
        ))}
      </DragDropContext>
      <CreateNewWorkSpace
        setNewWorkSpace={setNewWorkSpace}
        createWorkspace={createWorkspace}
        workSpaceRef={workSpaceRef}
        newWorkSpace={newWorkSpace}
      />
    </div>
  );
};

export default Home;
