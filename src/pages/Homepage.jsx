import React from "react";
import { useReceipe } from "../components/ReceipeContext";
import ReceipeCard from "../components/ReceipeCard";

function Homepage() {
  const { state, dispatch, searchRadio } = useReceipe();
  console.log(state.recipes);
  const handleChange = (e) => {
    console.log(e.target.value);
    searchRadio(e.target.value);
    // dispatch({ type: "RADIOFILTER", payload: e.target.value });
  };
  return (
    <div className="p-2 m-5">
      <input
        className=" border rounded-lg "
        type="search"
        placeholder="Search the receipe"
        onChange={(e) =>
          dispatch({ type: "SEARCH_RECIPE", payload: e.target.value })
        }
      />
      <div>
        Filters:
        <span>
          <input
            type="radio"
            id="name"
            name="recipe"
            value="name"
            onChange={(e) => handleChange(e)}
          />
          <label for="name">Name</label>
          <input
            type="radio"
            id="ingredients"
            name="recipe"
            value="ingredients"
            onChange={(e) => handleChange(e)}
          />
          <label for="ingredients">Ingredients</label>

          <input
            type="radio"
            id="cuisine"
            name="recipe"
            value="cuisine"
            onChange={(e) => handleChange(e)}
          />
          <label for="cuisine">Cuisine</label>
        </span>
        <div className="p-5">
          <h1>All Receipes</h1>
          <div className="grid grid-flow-col m-5 p-5">
            {state.recipes.map((receipe) => (
              <ReceipeCard receipe={receipe} />
            ))}
            <div className=" text-5xl m-auto cursor-pointer">+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
