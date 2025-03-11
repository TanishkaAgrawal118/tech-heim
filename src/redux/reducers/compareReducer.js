const initialState = {
    compareList: JSON.parse(localStorage.getItem("compareList")) || [],
  };
  
  const updateLocalStorage = (compareList) => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  };
  
  const compareReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_COMPARE": {
        if (state.compareList.length < 4) {
          const updatedCompareList = [...state.compareList, action.payload];
          updateLocalStorage(updatedCompareList); 
          return {
            ...state,
            compareList: updatedCompareList,
          };
        } else {
          return state;
        }
      }
  
      case "REMOVE_FROM_COMPARE": {
        const updatedCompareList = state.compareList.filter(
          (item) => item.id !== action.payload
        );
        updateLocalStorage(updatedCompareList);
        return {
          ...state,
          compareList: updatedCompareList,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default compareReducer;
  