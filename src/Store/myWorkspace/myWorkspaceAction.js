import axios from "axios";
import * as myWorkspaceActionTypes from './myWorkspaceActionTypes';
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