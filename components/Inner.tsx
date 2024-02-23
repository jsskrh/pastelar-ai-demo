import { useState } from "react";
import { FaPlay, FaXmark } from "react-icons/fa6";
import Margin from "./Margin";
import Search from "./Search";

const Inner = () => {
  const [ingredients, setIngredients] = useState([
    { name: "Lait entier", weight: "535 g", cost: 0.25 },
    { name: "Eau", weight: "535 g", cost: "0,25" },
    { name: "Sucre semoule", weight: "45 g", cost: "0,25" },
    { name: "Sel fin", weight: "20 g", cost: "0,25" },
    { name: "Beurre doux", weight: "470 g", cost: "0,25" },
    { name: "Farine T45 Gruau", weight: "290 g", cost: "0,25" },
    { name: "Farine T55", weight: "285 g", cost: "0,25" },
    { name: "Oeufs entiers", weight: "950 g", cost: "0,25" },
  ]);

  return (
    <div className="flex top-0 left-0 w-full h-full absolute rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] text-sm leading-[0.875rem] shadow-md">
      <div className="flex flex-1 flex-col justify-between py-3 pt-5 px-4 bg-white rounded-l-2xl">
        <div className="flex flex-col gap-y-7 px-3">
          <div className="flex flex-col items-center gap-y-3">
            <p>Ingrédients</p>
            <Search />
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col gap-y-5 text-[rgb(138,138,138)]">
              <div className="grid grid-cols-9 gap-x-4 font-semibold">
                <div className="col-span-4 flex items-center justify-end gap-x-4">
                  <span>Ingrédients</span>
                  <div className="invisible">
                    <div className="h-2 w-2 rounded-full border"></div>
                  </div>
                </div>
                <div className="col-span-3">
                  <span className="font-normal">Poids</span>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[rgb(203,203,203)]">Coût</span>
                  </div>
                </div>
              </div>
              <div>
                {ingredients.map((ingredient, index) => (
                  <div className="grid grid-cols-9 gap-x-4 h-8" key={index}>
                    <div className="col-span-4 text-[rgb(138,138,138)]">
                      <div className="flex items-center justify-end gap-x-4">
                        <div>{ingredient.name}</div>
                        <div>
                          <div
                            className={`h-2 w-2 rounded-full bg-neutral-200 z-10 border border-neutral-400 relative after:w-px after:absolute after:h-[28px] after:bg-neutral-400 after:left-1/2 after:-translate-x-1/2 after:top-full`}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <span className="font-normal">{ingredient.weight}</span>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[rgb(203,203,203)]">
                          {ingredient.cost} €
                        </span>
                        <FaXmark
                          className="size-3 cursor-pointer"
                          onClick={() =>
                            setIngredients((prev) =>
                              prev.filter((arr) => arr.name !== ingredient.name)
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-9 gap-x-4 h-8">
                  <div className="col-span-4 text-[rgb(138,138,138)]">
                    <div className="flex items-center justify-end gap-x-4">
                      <div>Ingrédient ajouté</div>
                      <div>
                        <div
                          className={`h-2 w-2 rounded-full bg-neutral-200 z-10 border border-neutral-400 relative`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3">
                    {/* <span className="font-normal">{ingredient.weight}</span> */}
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[rgb(203,203,203)]">
                        {/* {ingredient.cost} € */}
                      </span>
                      <FaXmark className="size-3 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center">
          <label className="relative" htmlFor="flip-page">
            <input type="checkbox" id="flip-page" className="hidden" />
            <FaPlay className="size-3 cursor-pointer rotate-180" />
          </label>
          <div className="justify-self-center flex flex-col items-center gap-1">
            <p className="text-[rgb(203,203,203)]">Coût au kg</p>
            <p className="text-[rgb(138,138,138)]">3,56 €</p>
          </div>
        </div>
      </div>
      <Margin position="right" />
    </div>
  );
};

export default Inner;
