import { FETCH_CATEGORY, UPDATE_CONTEXT } from "../Context/userAction";

/**
 * *********************************************************************************************
 * @description function to get category
 * @param  {*} update
 * @param  {*} effect
 * @return
 */
export const getCategories = (update, effect) => {
  effect(() => {
    (async () => {
      const res = await FETCH_CATEGORY();
      console.log(res);
      update(res);
    })();
  }, []);
};

/**
 * **********************************************************************************************
 * @description function to set ads category
 * @param {*} value
 * @param {*} dispatch
 * @param {*} state
 * @return
 */
export const setAdsCategory = async (value, dispatch, state) => {
  const category = JSON.parse(value);
  UPDATE_CONTEXT(dispatch, state, { category });
};
/**
 * *********************************************************************************************
 * @description function to set monthly budget in context
 * @param {*} value
 * @param {*} dispatch
 * @param {*} state
 * @param {*} error
 * @param {*} update
 * @returns
 */
export const monthlyBudget = async (value, dispatch, state, error, update) => {
  if (isNaN(value)) {
    // error("Must input Valid Amount");
    return false;
  } else if (value < 100) {
    update(value);
    UPDATE_CONTEXT(dispatch, state, { monthlyBudget: value });
    error("Must input valid Amount");
  } else {
    update(value);
    error("");
    UPDATE_CONTEXT(dispatch, state, { monthlyBudget: value });
  }
};
