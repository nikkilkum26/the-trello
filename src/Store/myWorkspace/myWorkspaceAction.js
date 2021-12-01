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
    toast.success("Welcome!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const insertCard =
  (id, newCard, uuid, workSpaceData) => async (dispatch) => {
    try {
      dispatch({
        type: myWorkspaceActionTypes.ADD_CARD,
        payload: { id, newCard, uuid },
      });
      toast.success("Card Created Successfully!");
    } catch (err) {}
  };

export const deleteCard = (id, item, data) => async (dispatch) => {
  data[id].cardList.splice(item, 1);

  try {
    // await axios.delete(
    //   `http://localhost:4000/workspace/${id}/cardList/${item}`
    // );
    dispatch({
      type: myWorkspaceActionTypes.DELETE_CARD,
      payload: data,
    });
    toast.success("Deleted Successfully!");
  } catch (err) {
    toast.error(err.message);
  }
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
    toast.success("WorkSpace Created Successfully!");
  } catch (err) {}
};

export const deleteWorkSpace = (data, workspace, id) => async (dispatch) => {
  data.splice(id - 1, 1);
  dispatch({
    type: myWorkspaceActionTypes.GET_WORKSPACE_DATA,
    payload: data,
  });
  toast.success("WorkSpace Deleted Successfully!");
};

export const dragChangesAction = (data) => async (dispatch) => {
  dispatch({
    type: myWorkspaceActionTypes.GET_WORKSPACE_DATA,
    payload: data,
  });
};
