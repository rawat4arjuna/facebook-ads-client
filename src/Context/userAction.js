import { isNullorUndefined, ConvertPrice } from "./Utils";
import axios from "axios";

const api = "https://facebook-backend-ads.herokuapp.com/api";

/**
 * *****************************************************************************
 * @description Action use to fetch ads category
 * @param  {}
 * @return {Object}
 */
export const FETCH_CATEGORY = async () => {
  try {
    const response = await axios(`${api}/categories`, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data?.categories;
  } catch (error) {
    console.log(error.response);
    return [];
  }
};

/**
 *********************************************************************************
 * @description Action use for upadting context values
 * @param  {Any} dispatch
 * @param  {Object} state
 * @param  {Object} value
 * @return
 */
export const UPDATE_CONTEXT = async (dispatch, state, value) => {
  const data = state.data;
  for (const key in value) {
    data[key] = value[key];
  }
  await dispatch({ Type: "update", data: data });
};
