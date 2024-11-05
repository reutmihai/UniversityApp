import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  faculties: {
    searchTerm: "",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "faculties/setSearchTerm":
      return {
        ...state,
        faculties: {
          ...state.faculties,
          searchTerm: action.payload, 
        },
      };
    default:
      return state; 
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
