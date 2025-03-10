export const addToCompare = (product) => (dispatch, getState) => {
    const { compare } = getState();
  
    if (compare.compareList.length < 4) {
      const updatedCompareList = [...compare.compareList, product];
      localStorage.setItem("compareList", JSON.stringify(updatedCompareList));
      dispatch({
        type: "ADD_TO_COMPARE",
        payload: product,
      });
    }
  };
  
  export const removeFromCompare = (id) => (dispatch, getState) => {
    const { compare } = getState();
    const updatedCompareList = compare.compareList.filter(
      (item) => item.id !== id
    );
    localStorage.setItem("compareList", JSON.stringify(updatedCompareList));
  
    dispatch({
      type: "REMOVE_FROM_COMPARE",
      payload: id,
    });
  };
  