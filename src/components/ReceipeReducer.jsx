import React from "react";
import { recipes } from "./Data";
import { useReceipe } from "./ReceipeContext";
export const initialData = {
  recipes: recipes,
};
function ReceipeReducer(state, action) {
  const { radio } = useReceipe();
  console.log(radio, "searchRadio");
  console.log(action.payload, "action.payload");
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_RECIPE":
      const searchedreceipe =
        payload.length > 0
          ? recipes.filter(
              (item) =>
                item.name.toLowerCase().includes(payload.toLowerCase()) ||
                item.cuisine.toLowerCase().includes(payload.toLowerCase()) ||
                item.ingredients.find((ingri) =>
                  ingri.toLowerCase().includes(payload.toLowerCase())
                )
            )
          : state.recipes;
      console.log();
      return { ...state, recipes: searchedreceipe };
    case "RADIOFILTER":
      console.log(payload, "payload");
      const filteredrecipe =
        payload === "name"
          ? recipes.filter((item) =>
              item.name.toLowerCase().includes(payload.toLowerCase())
            )
          : state.recipes;
      console.log(filteredrecipe, "filteredrecipe");
      return { ...state, recipes: filteredrecipe };
    default:
      return state;
  }
}

export default ReceipeReducer;
