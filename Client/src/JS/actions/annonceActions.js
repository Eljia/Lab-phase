import {
  AJOUT_ANNONCE_SUCCESS,
  AJOUT_FAIL,
 
} from "../const/productconst";

import axios from "axios";

export const addproduct =(formData)=>
  async (dispatch) => {
    // dispatch({ type: SET_LOADING });
     const config = {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-type": "application/json",
        }
      };
    try {
    
      let { data } = await axios.post("/product/add",formData,config);
console.log(data) 
      dispatch({
        type: AJOUT_ANNONCE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: AJOUT_FAIL,
      });
    }
  };