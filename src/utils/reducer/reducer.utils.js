export const createAction = (type, payload) => {
  // console.log("createAction type======", type);

  return {
    type,
    payload,
  };
};
