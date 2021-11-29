import axios from "axios";
import * as myWorkspaceActionTypes from "./myWorkspaceActionTypes";
import { toast } from "react-toastify";

export const getWorkSpace = () => async (dispatch) => {
  try {
    const getData = await axios.get("http://localhost:4000/workspace");
    dispatch({
      type: myWorkspaceActionTypes.GET_WORKSPACE_DATA,
      payload: getData.data,
    });
  } catch (error) {
    toast.error(error.message);
  }
};

export const insertCard = (id, newCard) => async (dispatch) => {
  try {
    dispatch({
      type: myWorkspaceActionTypes.ADD_CARD,
      payload: { id, newCard },
    });
  } catch (err) {}
};

export const deleteCard = (id, item, data) => async (dispatch) => {
  data[id].cardList.splice(item, 1);

  try {
    dispatch({
      type: myWorkspaceActionTypes.DELETE_CARD,
      payload: data,
    });
  } catch (err) {}
};

export const workSpace = (workspace, data) => async (dispatch) => {
  // console.log(workspace, data);
  data.push({
    title: workspace,
    cardList: [],
    id: data.length + 1,
  });

  try {
    dispatch({
      type: myWorkspaceActionTypes.ADD_WORKSPACE_DATA,
      payload: data,
    });
  } catch (err) {}
};
