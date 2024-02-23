import { FaCheck } from "react-icons/fa6";

const Success = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`flex-col items-center gap-y-5 ${show ? "flex" : "hidden"}`}
    >
      <p className="text-white">Recette ajoutée avec succès</p>
      <div className="border-2 border-[rgb(27,106,34)] rounded-full p-2">
        <FaCheck />
      </div>
    </div>
  );
};

export default Success;
