import { Dispatch, SetStateAction } from "react";
import { FaPlus } from "react-icons/fa6";
import Button from "./Button";
import Cover from "./Cover";
import Margin from "./Margin";

const Card = ({
  show,
  setShow,
  hidden,
}: {
  show: boolean;
  hidden: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleSubmit = () => {
    setShow(false);
  };

  return (
    <div
      className={`w-[30rem] bg-white relative rounded-2xl aspect-[5/6] shadow-md [transform-style:preserve-3d] [transform:perspective(2000px)] ${
        show ? "opacity-100" : "opacity-0"
      } ${hidden ? "hidden" : ""} transition duration-1000`}
    >
      <Cover />
      <div className="h-full w-full flex">
        <Margin position="left" />
        <div className="flex flex-1 flex-col justify-between py-3 px-4 bg-white rounded-r-2xl">
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1 items-center">
              <p className="font-semibold">Pâte à choux</p>
              <p>Procédé</p>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-1.5">
                {Array.from({ length: 10 }, (_, index) => (
                  <div key={index} className="flex gap-x-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-100 flex items-center justify-center text-[0.5rem]">
                      {index + 1}
                    </div>
                    <div className="flex-1 flex bg-neutral-100 px-4 rounded-2xl py-2">
                      <input
                        type="text"
                        className="flex-1 outline-none bg-inherit"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="border border-neutral-400 rounded-full p-px cursor-pointer">
                  <FaPlus className="size-2.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-3 items-center">
              <div className="justify-self-center col-start-2 flex items-center gap-x-10">
                <Button text="Annuler" type="normal" />
                <Button type="success" text="Ajoufer" handler={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
