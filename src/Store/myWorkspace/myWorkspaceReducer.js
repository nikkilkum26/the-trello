import * as myWorkspaceActionTypes from "./myWorkspaceActionTypes";

const initialWorkspaceState = {
  workSpaceData: [],
  cardData: [],
};

const myWorkspaceReducer = (
  state = initialWorkspaceState,
  { type, payload }
) => {
  switch (type) {
    case myWorkspaceActionTypes.GET_WORKSPACE_DATA:
      return {
        ...state,
        workSpaceData: payload,
      };
    case myWorkspaceActionTypes.ADD_CARD:
      return {
        ...state,
        workSpaceData: state.workSpaceData.map((work) =>
          work.id === payload.id
            ? {
                ...work,
                cardList: [
                  ...work.cardList,
                  { id: payload.uuid, name: payload.newCard },
                ],
              }
            : work
        ),
      };
    case myWorkspaceActionTypes.DELETE_CARD:
      return {
        ...state,
        workSpaceData: payload,
      };
    case myWorkspaceActionTypes.ADD_WORKSPACE_DATA:
      return {
        ...state,
        workSpaceData: payload,
      };
    default:
      return state;
  }
};

export default myWorkspaceReducer;
