import * as myWorkspaceActionTypes from './myWorkspaceActionTypes';

const initialWorkspaceState = {
    workSpaceData: [],
    cardData: []
}

const myWorkspaceReducer = (state = initialWorkspaceState, { type, payload }) => {
    switch (type) {
        case myWorkspaceActionTypes.GET_WORKSPACE_DATA:
            return {
                ...state,
                workSpaceData: payload
            }
        default:
            return state;
    }
}

export default myWorkspaceReducer