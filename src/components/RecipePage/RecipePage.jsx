import React from "react";
import { recipe } from "../../data/data.js";
import { CgComponents } from "react-icons/cg";
import { FaClockRotateLeft, FaBowlFood } from "react-icons/fa6";
import parse from "html-react-parser";
import VegLogo from "./VegLogo.jsx";

function RecipePage() {
  return (
    <div>
      <div className="flex flex-col-reverse  md:flex-row gap-7 relative">
        <VegLogo isVeg={recipe.vegetarian} />
        <div className="p-6">
          <img
            src={recipe.image}
            alt=""
            className="w-[500px] h-[500px] object-cover object-bottom rounded-xl"
          />
        </div>
        <div className="max-w-[600px] p-6">
          <h1 className="text-6xl my-7 font-bold text-red-500">
            {recipe.title}
          </h1>
          <div className="flex-col flex">
            <span className="flex items-center gap-2">
              <FaClockRotateLeft className="text-red-500" />
              Ready In: {recipe.readyInMinutes}
            </span>
            <span className="flex items-center gap-2">
              <FaBowlFood className="text-red-500" />
              Servings: {recipe.servings}
            </span>
          </div>
          <div className="my-3">
            <p className="text-justify">{parse(recipe.summary)}</p>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="text-4xl font-semibold mb-2 text-red-500">
            Ingredients
          </h2>
          <ul className="text-[1.15em]">
            {recipe.extendedIngredients.map((item) => (
              <li key={item.id} className="flex items-center gap-3 mb-1.5">
                <CgComponents className="text-red-600" />
                {item.original}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-6">
          <img
            src="https://images.pexels.com/photos/3233275/pexels-photo-3233275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-[500px] h-[500px] object-cover object-bottom rounded-xl"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-4xl font-semibold mb-6 text-center text-red-500">
          Instructions
        </h2>
        {recipe.analyzedInstructions[0].steps.map((step) => (
          <h3 key={step.number} className="text-xl my-2">
            <span className="font-semibold text-red-600">
              Step {step.number}:
            </span>{" "}
            {step.step}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default RecipePage;
