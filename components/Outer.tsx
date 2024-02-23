import { FaChevronDown, FaPlay } from "react-icons/fa6";
import Button from "./Button";
import Counter from "./Counter";
import Input from "./Input";
import Dropdown from "./Dropdown";
import Switch from "./Switch";
import Margin from "./Margin";

const Outer = () => {
  return (
    <div className="flex top-0 left-0 w-full h-full absolute [backface-visibility:hidden]">
      <Margin position="left" />
      <div className="flex flex-1 flex-col justify-between py-3 px-4 bg-white rounded-r-2xl">
        <div className="justify-center flex">
          <div className="my-6">
            <Dropdown
              initial="Catégorie"
              options={[
                "Pâtes et Biscuits",
                "Garnitures chaudes",
                "Garnitures froides",
                "Décors et autres",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-8 items-center">
          <Input />
          <div className="flex gap-x-3 items-center">
            <Switch />
            <p className="whitespace-nowrap">
              Recette utilisée dans d&apos;autres recettes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-gray-200 text-xs mb-1">Conservation</p>
            <div className="flex gap-x-5">
              <Counter />
              <Dropdown initial="Unité" options={["Unité", "Unité", "Unité"]} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="max-w-full mx-3">
            <p className="text-gray-200 text-xs mb-1">Notes</p>
            <textarea
              name="notes"
              id="notes"
              cols={30}
              rows={12}
              className="bg-neutral-100 w-full rounded-2xl resize-none outline-none p-2"
            ></textarea>
          </div>
          <div className="grid grid-cols-3 items-center">
            <div className="justify-self-center col-start-2">
              <Button text="Annuler" type="normal" />
            </div>
            <label className="relative justify-self-end" htmlFor="flip-page">
              <input type="checkbox" id="flip-page" className="hidden" />
              <FaPlay className="size-3 cursor-pointer" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outer;
